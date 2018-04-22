export default object => {
  let migrations = [];
  let undos = [];
  let linkObj = object;

  return {
    set: function(key, value) {
      migrations.push({
        undo: {
          type: linkObj[key] ? 'set' : 'del',
          params: linkObj[key] ? {key, value: linkObj[key]} : {key},
        },
        redo: {
          type: 'set',
          params: {
            key,
            value,
          },
        },
      });
      linkObj[key] = value;
    },
    get: function(key) {
      return linkObj[key];
    },
    del: function(key) {
      migrations.push({
        undo: {
          type: 'set',
          params: {
            key,
            value: linkObj[key],
          },
        },
        redo: {
          type: 'del',
          params: {
            key,
          },
        },
      });

      delete linkObj[key];
    },
    undo: function() {
      if (migrations.length === 0) {
        throw 'error';
      }

      // console.log('undos', JSON.stringify(migrations));
      const migration = migrations[migrations.length - 1].undo;
      // console.log(migration);
      undos.push({...migrations[migrations.length - 1]});

      this[migration.type].call(
        this,
        ...Object.keys(migration.params).map(n => migration.params[n]),
      );
      migrations = migrations.slice(0, -2);
    },
    redo: function() {
      if (undos.length === 0) {
        throw 'error';
      }
      // console.log('undos', JSON.stringify(undos));
      const migration = undos[undos.length - 1].redo;
      // console.log(migration);
      this[migration.type].call(
        this,
        ...Object.keys(migration.params).map(n => migration.params[n]),
      );

      undos = undos.slice(0, -1);
      // migrations = migrations.slice(0, -1);
    },
  };
};

export default object => {
  let migrations = [];
  let undos = [];
  let linkObj = object;

  const helper = {
    set: (key, value) => {
      linkObj[key] = value;
    },
    del: key => {
      delete linkObj[key];
    },
  };

  return {
    set: function(key, value) {
      undos = [];
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
      helper.set(key, value);
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
      helper.del(key);
    },
    undo: function() {
      if (migrations.length === 0) {
        throw 'error';
      }

      const migration = migrations[migrations.length - 1].undo;
      // console.log(migration);

      undos.push({...migrations[migrations.length - 1]});
      // console.log(migrations);
      helper[migration.type].call(
        this,
        ...Object.keys(migration.params).map(n => migration.params[n]),
      );
      // console.log(migrations);
      migrations = migrations.slice(0, -1);
    },
    redo: function() {
      if (undos.length === 0) {
        throw 'error';
      }

      const migration = undos[undos.length - 1].redo;
      migrations.push(undos[undos.length - 1]);
      helper[migration.type].call(
        this,
        ...Object.keys(migration.params).map(n => migration.params[n]),
      );

      undos = undos.slice(0, -1);
      // migrations = migrations.slice(0, -1);
    },
  };
};

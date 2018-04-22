export default object => {
  let states = [];
  let undos = [];
  let linkObj = object;
  states.push({...linkObj});

  return {
    set: function(key, value) {
      linkObj[key] = value;
      states.push({...linkObj});
    },
    get: function(key) {
      return linkObj[key];
    },
    del: function(key) {
      delete linkObj[key];
      states.push({...linkObj});
    },
    undo: function() {
      if (states.length === 1) {
        throw 'error';
      }

      const lastState = states[states.length - 2];

      linkObj = {...lastState};

      undos.push({...states[states.length - 1]});
      states = states.slice(0, -1);
    },
    redo: function() {
      if (undos.length === 0) {
        throw 'error';
      }

      const lastState = undos[undos.length - 1];

      linkObj = {...lastState};

      states.push({...undos[undos.length - 1]});
      undos = undos.slice(0, -1);
    },
  };
};

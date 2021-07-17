export default object => {
  let commands = []
  let index = -1
  const addCmd = cmd => {
    commands.splice(index + 1, commands.length - index)
    commands.push(cmd)
    index = commands.length - 1
  }

  return {
    set: (key, value) => {
      const prev = object[key]
      const cmd = {
        exec: () => (object[key] = value),
        undo: () => (prev ? (object[key] = prev) : delete object[key]),
      }

      cmd.exec()
      addCmd(cmd)
    },
    get: function(key) {
      return object[key]
    },
    del: key => {
      const prev = object[key]
      const cmd = {
        exec: () => delete object[key],
        undo: () => (object[key] = prev),
      }

      addCmd(cmd)
      cmd.exec()
    },
    undo: function() {
      const cmd = commands[index]
      if (!cmd) {
        throw 'error'
      }

      cmd.undo()
      index--
    },
    redo: function() {
      const cmd = commands[index + 1]
      if (!cmd) {
        throw 'error'
      }

      cmd.exec()
      index++
    },
  }
}

const getOnlyFunction = (arr) =>
  arr.filter(argm => typeof(argm) === 'function')

const Event = (() => {
  let subscribers = []

  return function() {
    subscribers = []

    this.subscribe = (...argms) =>
      getOnlyFunction(argms).forEach(fun => subscribers.push(fun))

    this.unsubscribe = (...argms) =>
      getOnlyFunction(argms)
        .filter(fun => subscribers.lastIndexOf(fun) > -1)
        .forEach(fun => subscribers.splice(subscribers.lastIndexOf(fun), 1))

    this.emit = function() {
      [...subscribers].forEach(fun => fun.apply(this, arguments))
    }
  }
})()

export default Event

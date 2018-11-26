let subscribers = [];
class Event {
  constructor() {
    subscribers = [];
  }

  subscribe() {
    Array(...arguments)
      .filter(argm => typeof(argm) === 'function')
      .forEach(fun => subscribers.push(fun));
  }

  unsubscribe(...argms) {
    argms
      .filter(argm => typeof(argm) === 'function')
      .forEach(fun => {
        const index = subscribers.lastIndexOf(fun);
        if (index) {
          subscribers.splice(index, 1);
        }
      });
  }

  emit() {
    const currentSubscribers = [...subscribers];
    currentSubscribers.forEach(fun => fun.bind(this)(...arguments));
  }
}

export default Event;

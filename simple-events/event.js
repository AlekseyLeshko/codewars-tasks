class Event {
  constructor() {
    this.subscribers = new Set();
  }

  subscribe(fun) {
    this.subscribers.add(fun);
  }

  unsubscribe(fun) {
    this.subscribers.delete(fun);
  }

  emit() {
    this.subscribers.forEach(fun => fun(...arguments));
  }
}

export default Event;

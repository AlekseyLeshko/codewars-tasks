class Event {
  constructor() {
    this.handlers = new Set();
  }

  subscribe(fun) {
    this.handlers.add(fun);
  }

  unsubscribe(fun) {
    this.handlers.delete(fun);
  }

  emit() {
    this.handlers.forEach(fun => fun(...arguments));
  }
}

export default Event;

class Event {
  constructor() {
    this.handlers = {};
  }

  subscribe(fun) {
    this.handlers[fun] = fun;
  }

  unsubscribe(fun) {
    delete this.handlers[fun];
  }

  emit() {
    Object
      .values(this.handlers)
      .map(fun => fun(...arguments));
  }
}

export default Event;

class Event {
  constructor() {
    this.handlers = [];
  }

  subscribe(fun) {
    this.handlers.push(fun);
  }

  unsubscribe(fun) {
    this.handlers.splice(this.handlers.indexOf(fun), 1);
  }

  emit() {
    Object
      .values(this.handlers)
      .map(fun => fun(...arguments));
  }
}

export default Event;

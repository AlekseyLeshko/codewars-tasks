import Event from './event';
import { describe } from 'ava-spec';

describe('simple events:', it => {
  it('should work with many handlers', t => {
    const event = new Event();

    t.pass(event);

    function f() {
      f.calls = (f.calls || 0) + 1;
      f.args = Array.prototype.slice.call(arguments);
    }
    function f2() {
      f2.calls = (f2.calls || 0) + 1;
      f2.args = Array.prototype.slice.call(arguments);
    }

    event.subscribe(f);
    event.subscribe(f2);
    event.emit(1, 'foo', true);

    t.is(f.calls, 1);
    t.is(f2.calls, 1);

    event.unsubscribe(f);
    event.emit(2);

    t.is(f.calls, 1);
    t.is(f2.calls, 2);
  });
});

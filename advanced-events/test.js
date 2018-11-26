import Event from './event';
import { describe } from 'ava-spec';

function l(arr) { arr.push('l'); }
function o(arr) { arr.push('o'); }

describe('advanced events:', it => {
  it('should work like advanced event', t => {
    let bucket = [];
    const event = new Event();

    event.subscribe(l, o, l);
    event.emit(bucket);

    t.deepEqual(bucket, ['l', 'o', 'l']);

    event.unsubscribe(o, l);
    bucket = [];

    event.emit(bucket);

    t.deepEqual(bucket, ['l']);
  });
});

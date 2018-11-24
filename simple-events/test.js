import Event from './event';
import { describe } from 'ava-spec';

describe('simple events:', it => {
  it('should work like rules', t => {
    const event = new Event();
    t.pass(event);
  });
});

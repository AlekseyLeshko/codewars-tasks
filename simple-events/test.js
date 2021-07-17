import Event from './event'
import { describe } from 'ava-spec'

function Stub() {
  return function _stub() {
    _stub.args = Array.prototype.slice.call(arguments)
    _stub.calls = (_stub.calls || 0) + 1
  }
}

const f1 = new Stub()
const f2 = new Stub()

describe('simple events:', it => {
  it('should work with many handlers', t => {
    const event = new Event()

    t.pass(event)

    event.subscribe(f1)
    event.subscribe(f2)
    event.emit(1, 'foo', true)

    t.is(f1.calls, 1)
    t.is(f2.calls, 1)

    event.unsubscribe(f1)
    event.emit(2)

    t.is(f1.calls, 1)
    t.is(f2.calls, 2)
  })
})

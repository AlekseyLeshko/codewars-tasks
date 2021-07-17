import Event from './event'
import { describe } from 'ava-spec'

function l(arr) { arr.push('l') }
function o(arr) { arr.push('o') }

describe('advanced events:', it => {
  it('should work like advanced event', t => {
    let bucket = []
    const event = new Event()

    event.subscribe(l, o, l)
    event.emit(bucket)

    t.deepEqual(bucket, ['l', 'o', 'l'])

    event.unsubscribe(o, l)
    bucket = []

    event.emit(bucket)

    t.deepEqual(bucket, ['l'])

    event.unsubscribe(l)

    event.emit(bucket)
  })

  it('should wirk with all types', t => {
    const argms = [
      100500,
      l,
      { hello: 'world' },
      'foo',
      undefined,
      o,
      null,
      'banana',
      ['a', 2],
      false,
      NaN,
    ]
    let bucket = []

    const event = new Event()

    event.subscribe(...argms)
    event.emit(bucket)

    t.deepEqual(bucket, ['l', 'o'])
  })
})

import { describe } from 'ava-spec'
import missing from './solution'

describe('simple-number-sequence:', it => {
  it('should return answer', t => {
    t.is(missing('5557'), 56)
    t.is(missing('5558'), -1)
    t.is(missing('123567'), 4)
    t.is(missing('899091939495'), 92)
    t.is(missing('9899101102'), 100)
    t.is(missing('599600601602'), -1)
    t.is(missing('8990919395'), -1)
    t.is(missing('998999100010011003'), 1002)
    t.is(missing('99991000110002'), 10000)
    t.is(missing('979899100101102'), -1)
    t.is(missing('900001900002900004900005900006'), 900003)
  })
})

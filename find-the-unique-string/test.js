import { describe } from 'ava-spec'
import findUniq from './solution'

describe('Find the unique string:', it => {
  it('should return answer', t => {
    t.is(findUniq([ 'A a', 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]), 'BbBb')
    t.is(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]), 'foo')
    t.is(findUniq([ 'silvia', 'vasili', 'victor' ]), 'victor')
    t.is(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]), 'Harry Potter')
    t.is(findUniq([ '    ', 'a', ' ' ]), 'a')
    t.is(findUniq([ 'a', 'p', 'p', 'p' ]), 'a')
  })
})

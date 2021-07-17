import add from './add'
import {describe} from 'ava-spec'

describe('adding big numbers:', it => {
  it('should return amount', t => {
    t.deepEqual(add('1', '9'), '10')
    t.deepEqual(add('123', '321'), '444')
    t.deepEqual(add('11', '99'), '110')
    t.deepEqual(add('999999999', '1'), '1000000000')
  })
})

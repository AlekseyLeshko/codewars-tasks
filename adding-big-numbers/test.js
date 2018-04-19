import add from './add';
import {describe} from 'ava-spec';

describe('adding big numbers:', it => {
  it('should return amount', t => {
    t.deepEqual(add('123', '321'), '444');
  });
});

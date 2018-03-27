import DI from './dependency-injection';
import {describe} from 'ava-spec';

const deps = {
  dep1: () => 'this is dep1',
  dep2: () => 'this is dep2',
  dep3: () => 'this is dep3',
  dep4: () => 'this is dep4',
};
const di = new DI(deps);

describe('dependency injection:', it => {
  it('should return func with 3th dependencies', t => {
    const expected = 'this is dep1 -> this is dep2 -> this is dep3';
    const myFunc = di.inject(function(dep3, dep1, dep2) {
      return [dep1(), dep2(), dep3()].join(' -> ');
    });

    t.is(myFunc(), expected);
  });
});

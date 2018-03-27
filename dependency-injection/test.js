import DI from './dependency-injection';
import {describe} from 'ava-spec';

const deps = {
  dep1: () => 'this is dep1',
  dep2: () => 'this is dep2',
  dep3: () => 'this is dep3',
  dep4: () => 'this is dep4',
  i18n: () => 'i18n',
  login: () => 'login',
  app: () => 'app',
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

  it('should return func without dependencies', t => {
    const expected = 0;
    const myFunc = di.inject(function() {
      return arguments.length;
    });

    t.is(myFunc(), expected);
  });

  it('should return func', t => {
    const expected = 'i18n, login, app';
    const myFunc = di.inject(function (i18n, login, app) {
      return [i18n(), login(), app()].join(', ');
    });

    t.is(myFunc(), expected);
  });
});

import { describe } from 'ava-spec';
import toCamelCase from './toCamelCase';

describe('toCamelCase:', it => {
  it('should convert all strings to camel case', t => {
    const expected = 'helloWorld';
    const list = [
      'hello_world',
      '_hello_world',
      'Hello_world',
      '_Hello_world',
      '-hello_world',
      'hello-world',
      'HELLO_WORLD',
      'Hello_World',
      '_Hello_World',
      '_Hello_World-',
      'hello world',
      '__HELLO_WORLD___',
    ];

    list.map((str) => {
      t.is(toCamelCase(str), expected);
    });
  });
});


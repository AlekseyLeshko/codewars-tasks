import abbreviate from '../decisions/abbreviate';
import abbreviateClever from '../decisions/clever';
import abbreviateTwo from '../decisions/abbreviate-two';
import {describe} from 'ava-spec';

describe('abbreviate:', it => {
  describe('custom tests:', it => {
    let str;
    let expected;

    it.afterEach(t => {
      t.is(abbreviate(str), expected);
      t.is(abbreviateTwo(str), expected);
      t.is(abbreviateClever(str), expected);
    });

    it('big sentence', () => {
      expected = 'e6t-r3s are r4y fun!';
      str = 'elephant-rides are really fun!';
    });

    it('internationalization', () => {
      expected = 'i18n';
      str = 'internationalization';
    });

    it('finish', () => {
      expected = 'You n2d, n2d not w2t, to c6e t2s c2e-w2s m5n';
      str = 'You need, need not want, to complete this code-wars mission';
    });

    it('on on a', () => {
      expected = 'on on a';
      str = 'on on a';
    });
  });

  it('generated tests', t => {
    let joins = [', ', '-', ': ', '; ', '. ', '\''];
    let words = [
      'cat',
      'mat',
      'doggy',
      'balloon',
      'sits',
      'sat',
      'a',
      'is',
      'on',
      'the',
      'monolithic',
      'double-barreled',
    ];
    let wordsAbbreviated = [
      'cat',
      'mat',
      'd3y',
      'b5n',
      's2s',
      'sat',
      'a',
      'is',
      'on',
      'the',
      'm8c',
      'd4e-b6d',
    ];

    let input = '';
    let output = '';
    let wordIndex;
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < Math.random(); j += 0.1) {
        wordIndex = (Math.random() * joins.length) | 0;
        if (input.length > 0) {
          input += ' ';
          output += ' ';
        }
        wordIndex = (Math.random() * words.length) | 0;
        input += words[wordIndex];
        output += wordsAbbreviated[wordIndex];
      }
      t.is(abbreviate(input), output);
      t.is(abbreviateTwo(input), output);
      t.is(abbreviateClever(input), output);
      input = '';
      output = '';
    }
  });
});

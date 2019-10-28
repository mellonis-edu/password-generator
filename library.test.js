import specialCharacters from './specialCharacters';
import {
  getRandomAlpha,
  getRandomDigit,
  getRandomSpecialChar,
} from './library';

describe('library.js', () => {
  describe('getRandomAlpha', () => {
    test('getRandomAlpha is a function', () => {
      expect(getRandomAlpha).toBeInstanceOf(Function);
    });

    test('getRandomAlpha returns a letter', () => {
      const regExp = /^[a-z]$/i;

      expect(
        [...new Array(52)]
          .every(() => {
            const result = getRandomAlpha();

            return typeof result === 'string' && result.length === 1 && regExp.test(result);
          }),
      )
        .toBe(true);
    });
  });


  describe('getRandomDigit', () => {
    test('getRandomDigit is a function', () => {
      expect(getRandomDigit).toBeInstanceOf(Function);
    });

    test('getRandomDigit returns a digit', () => {
      const regExp = /^[0-9]$/;

      expect(
        [...new Array(20)]
          .every(() => {
            const result = getRandomDigit();

            return typeof result === 'string' && result.length === 1 && regExp.test(result);
          }),
      )
        .toBe(true);
    });
  });


  describe('getRandomSpecialChar', () => {
    test('getRandomSpecialChar is a function', () => {
      expect(getRandomSpecialChar).toBeInstanceOf(Function);
    });

    test('getRandomSpecialChar returns a special char', () => {
      expect(
        [...new Array(specialCharacters.length * 2)]
          .every(() => {
            const result = getRandomSpecialChar();

            return typeof result === 'string' && result.length === 1 && specialCharacters.includes(result);
          }),
      )
        .toBe(true);
    });
  });
});

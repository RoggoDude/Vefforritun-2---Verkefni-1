
import { describe, expect, it } from '@jest/globals';
import { parse } from '../src/parser.js';

describe('parser', () => {
  it('converts a string to a number', () => {
      const input = '123';

      const parsed = parse(input);

      expect(parsed).toBe(123);
  });
  
});
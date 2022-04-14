import { test, expect } from 'vitest';
import mySlowFunction from './slow';

test('example test', () => {
  expect(mySlowFunction(10)).toBe(1);
});



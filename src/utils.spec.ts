import calculate from './utils';

test('функция calculate умножать два числа', (): void => {
  expect(calculate(4, 2)).toBe(8);
});

export {};

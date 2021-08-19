import calculate from './utils';

test('функция calculate умножает два числа', (): void => {
  expect(calculate(4, 2)).toBe(8);
});

export {};

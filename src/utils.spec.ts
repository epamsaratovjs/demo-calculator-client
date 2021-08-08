import calculate from './utils';

test('функция calculate суммирует два числа', (): void => {
  expect(calculate(4, 2)).toBe(6);
});

export {};

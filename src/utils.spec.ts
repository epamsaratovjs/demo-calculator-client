import sum from './utils';

test('функция sum суммирует два числа', (): void => {
  expect(sum(4, 2)).toBe(6);
});

export {};

import { addTimeSize } from '../addTimeSize';

describe('Adding sizes', (): void => {
  test.each([
    [new Date(2019, 4, 1), new Date(2019, 4, 2)],
    [new Date(2019, 4, 31), new Date(2019, 5, 1)],
  ])(
    'One day (default)',
    (date, expected): void => {
      expect(addTimeSize(date, 'day')).toEqual(expected);
    },
  );

  test.each([
    [new Date(2019, 4, 1), new Date(2019, 4, 6)],
    [new Date(2019, 4, 31), new Date(2019, 5, 5)],
  ])(
    'Five days',
    (date, expected): void => {
      expect(addTimeSize(date, 'day', 5)).toEqual(expected);
    },
  );

  test.each([
    [new Date(2019, 4, 5), new Date(2019, 5, 5)],
    [new Date(2019, 11, 14), new Date(2020, 0, 14)],
  ])(
    'One month (default)',
    (date, expected): void => {
      expect(addTimeSize(date, 'month')).toEqual(expected);
    },
  );

  test.each([
    [new Date(2019, 4, 5), new Date(2019, 7, 5)],
    [new Date(2019, 10, 14), new Date(2020, 1, 14)],
  ])(
    'Three months',
    (date, expected): void => {
      expect(addTimeSize(date, 'month', 3)).toEqual(expected);
    },
  );

  test.each([
    [new Date(2019, 4, 4), new Date(2019, 7, 4)],
    [new Date(2019, 10, 17), new Date(2020, 1, 17)],
  ])(
    'One quarter (default)',
    (date, expected): void => {
      expect(addTimeSize(date, 'quarter')).toEqual(expected);
    },
  );
});

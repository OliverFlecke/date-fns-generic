import endOfTimeSize from '../endOfTimeSize';

describe('End of', (): void => {
  test.each([
    [
      new Date(2019, 4, 2, 10, 15, 31, 123),
      new Date(2019, 4, 2, 10, 15, 31, 999),
    ],
    [
      new Date(2018, 6, 19, 3, 43, 11, 742),
      new Date(2018, 6, 19, 3, 43, 11, 999),
    ],
    [
      new Date(2020, 11, 7, 19, 27, 7, 13),
      new Date(2020, 11, 7, 19, 27, 7, 999),
    ],
  ])(
    'second',
    (date, expected): void => {
      expect(endOfTimeSize(date, 'second')).toEqual(expected);
    },
  );

  test.each([
    [
      new Date(2019, 4, 2, 10, 15, 31, 123),
      new Date(2019, 4, 2, 10, 15, 59, 999),
    ],
    [
      new Date(2018, 6, 19, 3, 43, 11, 742),
      new Date(2018, 6, 19, 3, 43, 59, 999),
    ],
    [
      new Date(2020, 11, 7, 19, 27, 7, 13),
      new Date(2020, 11, 7, 19, 27, 59, 999),
    ],
  ])(
    'minute',
    (date, expected): void => {
      expect(endOfTimeSize(date, 'minute')).toEqual(expected);
    },
  );

  test.each([
    [
      new Date(2019, 4, 2, 10, 15, 31, 123),
      new Date(2019, 4, 2, 10, 59, 59, 999),
    ],
    [
      new Date(2018, 6, 19, 3, 43, 11, 742),
      new Date(2018, 6, 19, 3, 59, 59, 999),
    ],
    [
      new Date(2020, 11, 7, 19, 27, 7, 13),
      new Date(2020, 11, 7, 19, 59, 59, 999),
    ],
  ])(
    'hour',
    (date, expected): void => {
      expect(endOfTimeSize(date, 'hour')).toEqual(expected);
    },
  );

  test.each([
    [
      new Date(2019, 4, 2, 10, 15, 31, 123),
      new Date(2019, 4, 2, 23, 59, 59, 999),
    ],
    [
      new Date(2018, 6, 19, 3, 43, 11, 742),
      new Date(2018, 6, 19, 23, 59, 59, 999),
    ],
    [
      new Date(2020, 11, 7, 19, 27, 7, 13),
      new Date(2020, 11, 7, 23, 59, 59, 999),
    ],
  ])(
    'day',
    (date, expected): void => {
      expect(endOfTimeSize(date, 'day')).toEqual(expected);
    },
  );

  test.each([
    [
      new Date(2019, 4, 2, 10, 15, 31, 123),
      new Date(2019, 4, 4, 23, 59, 59, 999),
    ],
    [
      new Date(2018, 6, 19, 3, 43, 11, 742),
      new Date(2018, 6, 21, 23, 59, 59, 999),
    ],
    [
      new Date(2020, 11, 7, 19, 27, 7, 13),
      new Date(2020, 11, 12, 23, 59, 59, 999),
    ],
  ])(
    'week',
    (date, expected): void => {
      expect(endOfTimeSize(date, 'week')).toEqual(expected);
    },
  );

  test.each([
    [
      new Date(2019, 4, 2, 10, 15, 31, 123),
      new Date(2019, 4, 5, 23, 59, 59, 999),
    ],
    [
      new Date(2018, 6, 19, 3, 43, 11, 742),
      new Date(2018, 6, 22, 23, 59, 59, 999),
    ],
    [
      new Date(2020, 11, 7, 19, 27, 7, 13),
      new Date(2020, 11, 13, 23, 59, 59, 999),
    ],
  ])(
    'isoweek',
    (date, expected): void => {
      expect(endOfTimeSize(date, 'isoweek')).toEqual(expected);
    },
  );

  test.each([
    [
      new Date(2019, 4, 2, 10, 15, 31, 123),
      new Date(2019, 4, 31, 23, 59, 59, 999),
    ],
    [
      new Date(2018, 6, 19, 3, 43, 11, 742),
      new Date(2018, 6, 31, 23, 59, 59, 999),
    ],
    [
      new Date(2020, 11, 7, 19, 27, 7, 13),
      new Date(2020, 11, 31, 23, 59, 59, 999),
    ],
  ])(
    'month',
    (date, expected): void => {
      expect(endOfTimeSize(date, 'month')).toEqual(expected);
    },
  );

  test.each([
    [
      new Date(2019, 4, 2, 10, 15, 31, 123),
      new Date(2019, 5, 30, 23, 59, 59, 999),
    ],
    [
      new Date(2018, 6, 19, 3, 43, 11, 742),
      new Date(2018, 8, 30, 23, 59, 59, 999),
    ],
    [
      new Date(2020, 11, 7, 19, 27, 7, 13),
      new Date(2020, 11, 31, 23, 59, 59, 999),
    ],
  ])(
    'quarter',
    (date, expected): void => {
      expect(endOfTimeSize(date, 'quarter')).toEqual(expected);
    },
  );

  test.each([
    [
      new Date(2019, 4, 2, 10, 15, 31, 123),
      new Date(2019, 11, 31, 23, 59, 59, 999),
    ],
    [
      new Date(2018, 6, 19, 3, 43, 11, 742),
      new Date(2018, 11, 31, 23, 59, 59, 999),
    ],
    [
      new Date(2020, 11, 7, 19, 27, 7, 13),
      new Date(2020, 11, 31, 23, 59, 59, 999),
    ],
  ])(
    'year',
    (date, expected): void => {
      expect(endOfTimeSize(date, 'year')).toEqual(expected);
    },
  );

  test.each([
    [
      new Date(2019, 4, 2, 10, 15, 31, 123),
      new Date(2019, 11, 29, 23, 59, 59, 999),
    ],
    [
      new Date(2018, 6, 19, 3, 43, 11, 742),
      new Date(2018, 11, 30, 23, 59, 59, 999),
    ],
    [
      new Date(2020, 11, 7, 19, 27, 7, 13),
      new Date(2021, 0, 3, 23, 59, 59, 999),
    ],
  ])(
    'isoyear',
    (date, expected): void => {
      expect(endOfTimeSize(date, 'isoyear')).toEqual(expected);
    },
  );
});

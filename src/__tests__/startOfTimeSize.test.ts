import startOfTimeSize from '../startOfTimeSize';

describe('Start of', (): void => {
  test.each([
    [
      new Date(2019, 4, 2, 10, 15, 31, 123),
      new Date(2019, 4, 2, 10, 15, 31, 0),
    ],
    [
      new Date(2018, 6, 19, 3, 43, 11, 742),
      new Date(2018, 6, 19, 3, 43, 11, 0),
    ],
    [new Date(2020, 11, 7, 19, 27, 7, 13), new Date(2020, 11, 7, 19, 27, 7, 0)],
  ])(
    'second',
    (date, expected): void => {
      expect(startOfTimeSize(date, 'second')).toEqual(expected);
    },
  );

  test.each([
    [new Date(2019, 4, 2, 10, 15, 31, 123), new Date(2019, 4, 2, 10, 15, 0, 0)],
    [new Date(2018, 6, 19, 3, 43, 11, 742), new Date(2018, 6, 19, 3, 43, 0, 0)],
    [new Date(2020, 11, 7, 19, 27, 7, 13), new Date(2020, 11, 7, 19, 27, 0, 0)],
  ])(
    'minute',
    (date, expected): void => {
      expect(startOfTimeSize(date, 'minute')).toEqual(expected);
    },
  );

  test.each([
    [new Date(2019, 4, 2, 10, 15, 31, 123), new Date(2019, 4, 2, 10, 0, 0, 0)],
    [new Date(2018, 6, 19, 3, 43, 11, 742), new Date(2018, 6, 19, 3, 0, 0, 0)],
    [new Date(2020, 11, 7, 19, 27, 7, 13), new Date(2020, 11, 7, 19, 0, 0, 0)],
  ])(
    'hour',
    (date, expected): void => {
      expect(startOfTimeSize(date, 'hour')).toEqual(expected);
    },
  );

  test.each([
    [new Date(2019, 4, 2, 10, 15, 31, 123), new Date(2019, 4, 2, 0, 0, 0, 0)],
    [new Date(2018, 6, 19, 3, 43, 11, 742), new Date(2018, 6, 19, 0, 0, 0, 0)],
    [new Date(2020, 11, 7, 19, 27, 7, 13), new Date(2020, 11, 7, 0, 0, 0, 0)],
  ])(
    'day',
    (date, expected): void => {
      expect(startOfTimeSize(date, 'day')).toEqual(expected);
    },
  );

  test.each([
    [new Date(2019, 4, 2, 10, 15, 31, 123), new Date(2019, 3, 28, 0, 0, 0, 0)],
    [new Date(2018, 6, 19, 3, 43, 11, 742), new Date(2018, 6, 15, 0, 0, 0, 0)],
    [new Date(2020, 11, 7, 19, 27, 7, 13), new Date(2020, 11, 6, 0, 0, 0, 0)],
  ])(
    'week',
    (date, expected): void => {
      expect(startOfTimeSize(date, 'week')).toEqual(expected);
    },
  );

  test.each([
    [new Date(2019, 4, 2, 10, 15, 31, 123), new Date(2019, 4, 1, 0, 0, 0, 0)],
    [new Date(2018, 6, 19, 3, 43, 11, 742), new Date(2018, 6, 1, 0, 0, 0, 0)],
    [new Date(2020, 11, 7, 19, 27, 7, 13), new Date(2020, 11, 1, 0, 0, 0, 0)],
  ])(
    'month',
    (date, expected): void => {
      expect(startOfTimeSize(date, 'month')).toEqual(expected);
    },
  );

  test.each([
    [new Date(2019, 4, 2, 10, 15, 31, 123), new Date(2019, 3, 1, 0, 0, 0, 0)],
    [new Date(2018, 6, 19, 3, 43, 11, 742), new Date(2018, 6, 1, 0, 0, 0, 0)],
    [new Date(2020, 11, 7, 19, 27, 7, 13), new Date(2020, 9, 1, 0, 0, 0, 0)],
  ])(
    'quarter',
    (date, expected): void => {
      expect(startOfTimeSize(date, 'quarter')).toEqual(expected);
    },
  );

  test.each([
    [new Date(2019, 4, 2, 10, 15, 31, 123), new Date(2019, 0, 1, 0, 0, 0, 0)],
    [new Date(2018, 6, 19, 3, 43, 11, 742), new Date(2018, 0, 1, 0, 0, 0, 0)],
    [new Date(2020, 11, 7, 19, 27, 7, 13), new Date(2020, 0, 1, 0, 0, 0, 0)],
  ])(
    'year',
    (date, expected): void => {
      expect(startOfTimeSize(date, 'year')).toEqual(expected);
    },
  );
});

import subTimeSize from '../subTimeSize';

describe('Subtract one (default)', (): void => {
  test.each([
    [new Date(2019, 4, 2, 10, 15, 31, 123), new Date(2019, 4, 2, 10, 15, 31, 122)],
    [new Date(2018, 6, 19, 3, 43, 11, 742), new Date(2018, 6, 19, 3, 43, 11, 741)],
    [new Date(2020, 11, 7, 19, 27, 7, 13), new Date(2020, 11, 7, 19, 27, 7, 12)],
    [new Date(2020, 11, 7, 19, 27, 7, 0), new Date(2020, 11, 7, 19, 27, 6, 999)],
  ])(
    'One millisecond',
    (date, expected): void => {
      expect(subTimeSize(date, 'millisecond')).toEqual(expected);
    },
  );

  test.each([
    [new Date(2019, 4, 2, 10, 15, 31, 123), new Date(2019, 4, 2, 10, 15, 30, 123)],
    [new Date(2018, 6, 19, 3, 43, 11, 742), new Date(2018, 6, 19, 3, 43, 10, 742)],
    [new Date(2020, 11, 7, 19, 27, 7, 13), new Date(2020, 11, 7, 19, 27, 6, 13)],
    [new Date(2020, 11, 7, 19, 26, 0, 13), new Date(2020, 11, 7, 19, 25, 59, 13)],
  ])(
    'One second',
    (date, expected): void => {
      expect(subTimeSize(date, 'second')).toEqual(expected);
    },
  );

  test.each([
    [new Date(2019, 4, 2, 10, 15, 31, 123), new Date(2019, 4, 2, 10, 14, 31, 123)],
    [new Date(2018, 6, 19, 3, 43, 11, 742), new Date(2018, 6, 19, 3, 42, 11, 742)],
    [new Date(2020, 11, 7, 19, 27, 7, 13), new Date(2020, 11, 7, 19, 26, 7, 13)],
    [new Date(2020, 11, 7, 19, 0, 7, 13), new Date(2020, 11, 7, 18, 59, 7, 13)],
  ])(
    'One minute',
    (date, expected): void => {
      expect(subTimeSize(date, 'minute')).toEqual(expected);
    },
  );

  test.each([
    [new Date(2019, 4, 2, 10, 15, 31, 123), new Date(2019, 4, 2, 9, 15, 31, 123)],
    [new Date(2018, 6, 19, 3, 43, 11, 742), new Date(2018, 6, 19, 2, 43, 11, 742)],
    [new Date(2020, 11, 7, 19, 27, 7, 13), new Date(2020, 11, 7, 18, 27, 7, 13)],
    [new Date(2020, 11, 10, 0, 27, 7, 13), new Date(2020, 11, 9, 23, 27, 7, 13)],
  ])(
    'One hour',
    (date, expected): void => {
      expect(subTimeSize(date, 'hour')).toEqual(expected);
    },
  );

  test.each([
    [new Date(2019, 4, 2, 10, 15, 31, 123), new Date(2019, 4, 1, 10, 15, 31, 123)],
    [new Date(2018, 6, 19, 3, 43, 11, 742), new Date(2018, 6, 18, 3, 43, 11, 742)],
    [new Date(2020, 11, 7, 19, 27, 7, 13), new Date(2020, 11, 6, 19, 27, 7, 13)],
    [new Date(2020, 11, 1, 19, 27, 7, 13), new Date(2020, 10, 30, 19, 27, 7, 13)],
  ])(
    'One day',
    (date, expected): void => {
      expect(subTimeSize(date, 'day')).toEqual(expected);
    },
  );

  test.each([
    [new Date(2019, 4, 2, 10, 15, 31, 123), new Date(2019, 3, 2, 10, 15, 31, 123)],
    [new Date(2018, 6, 19, 3, 43, 11, 742), new Date(2018, 5, 19, 3, 43, 11, 742)],
    [new Date(2020, 11, 7, 19, 27, 7, 13), new Date(2020, 10, 7, 19, 27, 7, 13)],
    [new Date(2020, 0, 7, 19, 27, 7, 13), new Date(2019, 11, 7, 19, 27, 7, 13)],
  ])(
    'One month',
    (date, expected): void => {
      expect(subTimeSize(date, 'month')).toEqual(expected);
    },
  );

  test.each([
    [new Date(2019, 4, 2, 10, 15, 31, 123), new Date(2018, 4, 2, 10, 15, 31, 123)],
    [new Date(2018, 6, 19, 3, 43, 11, 742), new Date(2017, 6, 19, 3, 43, 11, 742)],
    [new Date(2020, 11, 7, 19, 27, 7, 13), new Date(2019, 11, 7, 19, 27, 7, 13)],
  ])(
    'One year',
    (date, expected): void => {
      expect(subTimeSize(date, 'year')).toEqual(expected);
    },
  );
});

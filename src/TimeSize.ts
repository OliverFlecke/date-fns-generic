enum TimeSize {
  Millisecond = 'millisecond',
  Second = 'second',
  Minute = 'minute',
  Hour = 'hour',
  Day = 'day',
  Week = 'week',
  ISOWeek = 'isoweek',
  Month = 'month',
  Quarter = 'quarter',
  Year = 'year',
  ISOYear = 'isoyear',
}

export default TimeSize;

export type TimeSizeString =
  | 'millisecond'
  | 'second'
  | 'minute'
  | 'hour'
  | 'day'
  | 'week'
  | 'isoweek'
  | 'month'
  | 'quarter'
  | 'year'
  | 'isoyear';

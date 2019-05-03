import TimeSize, { TimeSizeString } from './TimeSize';
import {
  endOfYear,
  endOfQuarter,
  endOfMonth,
  endOfWeek,
  endOfDay,
  endOfHour,
  endOfMinute,
  endOfSecond,
} from 'date-fns';

export default function endOfTimeSize(
  date: Date | string | number,
  timeSize: TimeSize | TimeSizeString,
): Date {
  switch (timeSize) {
    case TimeSize.Millisecond:
      return new Date(date);

    case TimeSize.Second:
      return endOfSecond(date);

    case TimeSize.Minute:
      return endOfMinute(date);

    case TimeSize.Hour:
      return endOfHour(date);

    case TimeSize.Day:
      return endOfDay(date);

    case TimeSize.Week:
      return endOfWeek(date);

    case TimeSize.Month:
      return endOfMonth(date);

    case TimeSize.Quarter:
      return endOfQuarter(date);

    case TimeSize.Year:
      return endOfYear(date);

    default:
      throw new TypeError(`Unsupported time size: ${timeSize}`);
  }
}

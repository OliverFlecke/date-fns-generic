import {
  startOfSecond,
  startOfMinute,
  startOfHour,
  startOfDay,
  startOfWeek,
  startOfMonth,
  startOfQuarter,
  startOfYear,
} from 'date-fns';
import TimeSize, { TimeSizeString } from './TimeSize';

/**
 * @param date The date to get the start of from
 * @param timeSize The time size used to get the begining of.
 * @returns A date that is the beginning of the given time size,
 * relative to the given date.
 */
export default function startOfTimeSize(
  date: Date | string | number,
  timeSize: TimeSize | TimeSizeString,
): Date {
  switch (timeSize) {
    case TimeSize.Millisecond:
      return new Date(date);

    case TimeSize.Second:
      return startOfSecond(date);

    case TimeSize.Minute:
      return startOfMinute(date);

    case TimeSize.Hour:
      return startOfHour(date);

    case TimeSize.Day:
      return startOfDay(date);

    case TimeSize.Week:
      return startOfWeek(date);

    case TimeSize.Month:
      return startOfMonth(date);

    case TimeSize.Quarter:
      return startOfQuarter(date);

    case TimeSize.Year:
      return startOfYear(date);

    default:
      throw new TypeError(`Unknown time size: ${timeSize}`);
  }
}

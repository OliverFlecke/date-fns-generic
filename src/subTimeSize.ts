import TimeSize, { TimeSizeString } from './TimeSize';
import {
  subMilliseconds,
  subSeconds,
  subMinutes,
  subHours,
  subDays,
  subMonths,
  subYears,
  subWeeks,
} from 'date-fns';

/**
 * @description Subtract a amount of a given time size from a given date
 *
 * @param date The date to subtract the amount of time size- from
 * @param timeSize The size of the time to subtract from the date
 * @param amount The amount of timesizes to subtract. Defaults to one
 * @returns A new date where the amount of the given time size has been
 * subtracted
 */
export default function subTimeSize(
  date: Date | string | number,
  timeSize: TimeSize | TimeSizeString,
  amount?: number,
): Date {
  switch (timeSize) {
    case TimeSize.Millisecond:
      return subMilliseconds(date, amount || 1);

    case TimeSize.Second:
      return subSeconds(date, amount || 1);

    case TimeSize.Minute:
      return subMinutes(date, amount || 1);

    case TimeSize.Hour:
      return subHours(date, amount || 1);

    case TimeSize.Day:
      return subDays(date, amount || 1);

    case TimeSize.Week:
      return subWeeks(date, amount || 1);

    case TimeSize.Month:
      return subMonths(date, amount || 1);

    case TimeSize.Year:
      return subYears(date, amount || 1);

    default:
      throw new TypeError(`Unsupported time size: ${timeSize}`);
  }
}

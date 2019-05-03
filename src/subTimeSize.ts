import { TimeSize } from './TimeSize';
import {
  subMilliseconds,
  subSeconds,
  subMinutes,
  subHours,
  subDays,
  subMonths,
  subYears,
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
  timeSize: TimeSize,
  amount?: number,
): Date {
  switch (timeSize) {
    case 'millisecond':
      return subMilliseconds(date, amount || 1);

    case 'second':
      return subSeconds(date, amount || 1);

    case 'minute':
      return subMinutes(date, amount || 1);

    case 'hour':
      return subHours(date, amount || 1);

    case 'day':
      return subDays(date, amount || 1);

    case 'month':
      return subMonths(date, amount || 1);

    case 'year':
      return subYears(date, amount || 1);

    default:
      throw new TypeError(`Unsupported time size: ${timeSize}`);
  }
}

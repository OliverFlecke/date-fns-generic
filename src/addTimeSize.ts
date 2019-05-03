import {
  addDays,
  addMonths,
  addQuarters,
  addYears,
  addMilliseconds,
  addSeconds,
  addWeeks,
  addMinutes,
  addHours,
} from 'date-fns';
import { TimeSize } from './TimeSize';

/**
 * @description Add any amount of a time size to a given date
 *
 * @param date The date to add the time size to
 * @param timeSize Time size to add to the date
 * @param amount The amount to add to the date. Will default to one
 * @returns A new date object with the added amount
 */
export default function addTimeSize(
  date: string | number | Date,
  timeSize: TimeSize,
  amount?: number,
): Date {
  switch (timeSize) {
    case 'millisecond':
      return addMilliseconds(date, amount || 1);

    case 'second':
      return addSeconds(date, amount || 1);

    case 'minute':
      return addMinutes(date, amount || 1);

    case 'hour':
      return addHours(date, amount || 1);

    case 'day':
      return addDays(date, amount || 1);

    case 'week':
      return addWeeks(date, amount || 1);

    case 'month':
      return addMonths(date, amount || 1);

    case 'quarter':
      return addQuarters(date, amount || 1);

    case 'year':
      return addYears(date, amount || 1);

    default:
      throw new Error('Unsupported timesize');
  }
}

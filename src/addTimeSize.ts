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
import TimeSize, { TimeSizeString } from './TimeSize';

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
  timeSize: TimeSize | TimeSizeString,
  amount?: number,
): Date {
  switch (timeSize) {
    case TimeSize.Millisecond:
      return addMilliseconds(date, amount || 1);

    case TimeSize.Second:
      return addSeconds(date, amount || 1);

    case TimeSize.Minute:
      return addMinutes(date, amount || 1);

    case TimeSize.Hour:
      return addHours(date, amount || 1);

    case TimeSize.Day:
      return addDays(date, amount || 1);

    case TimeSize.ISOWeek:
    case TimeSize.Week:
      return addWeeks(date, amount || 1);

    case TimeSize.Month:
      return addMonths(date, amount || 1);

    case TimeSize.Quarter:
      return addQuarters(date, amount || 1);

    case TimeSize.ISOYear:
    case TimeSize.Year:
      return addYears(date, amount || 1);

    default:
      throw new TypeError(`Unsupported time size: ${timeSize}`);
  }
}

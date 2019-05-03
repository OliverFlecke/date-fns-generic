# date-fns-generic

Generic utils extending the `date-fns` library.

Instead of calling specific functions for each of the time sizes (`addDays`, `addMonths`), these utility functions allows you to pass in a the time size as an argument, and then adding the appropriate amount.
Note, that using `addTimSize` will import all of the `add*` functions from `date-fns`.

## Time size

For `TimeSize`, a string of any expected time 'size' can be passed (eg. `day`, `month`).

## Add time size

`addTimeSize` takes a `Date` (or `string` or `number`, if it can be parsed to a date), along with a `TimeSize` and the optional `amount`, which will default to one.

Example:

```typescript
import addTimeSize from '@oliverflecke/date-fns-generic/lib/addTimeSize';

addTimeSize(new Date(2019, 9, 7, 16), 'hour');
// Gives: Mon Oct 07 2019 17:00:00

addTimeSize(new Date(2019, 1, 1), 'day', 4);
// Gives: Tue Feb 05 2019 00:00:00

addTimeSize(new Date(2019, 1, 3, 10, 37, 11), 'second', 16);
// Gives: Sun Feb 03 2019 10:37:27
```

The `subTimeSize` works similarly.

import { Trip } from '../entities/Trip'
import { Day }  from '../entities/Day'
import { ISODate } from '../ISODate'

/**
 * Domain Service — logic that doesn't belong to a single entity.
 *
 * TripHighlighter answers: "given this trip and a point in time,
 * which day (if any) is happening right now?"
 *
 * Pure function — no side effects, no dependencies on infrastructure.
 * Accepts an injectable `now` so it's trivially unit-testable.
 */
export class TripHighlighter {
  highlight(trip: Trip, now: ISODate = ISODate.today()): Day | null {
    return trip.findDayByDate(now) ?? null
  }
}

import { ISODate } from '../ISODate'

/**
 * Value object — an immutable half-open date interval [arrival, departure).
 * Enforces that arrival precedes departure.
 */
export class DateRange {
  private constructor(
    readonly arrival:   ISODate,
    readonly departure: ISODate,
  ) {}

  static of(arrival: string, departure: string): DateRange {
    const a = ISODate.parse(arrival)
    const d = ISODate.parse(departure)
    if (!a.isBefore(d)) {
      throw new Error(`Arrival ${arrival} must precede departure ${departure}`)
    }
    return new DateRange(a, d)
  }

  nights(): number {
    const ms = new Date(this.departure.value).getTime()
               - new Date(this.arrival.value).getTime()
    return Math.round(ms / 86_400_000)
  }

  contains(date: ISODate): boolean {
    return date.value >= this.arrival.value && date.value <= this.departure.value
  }
}

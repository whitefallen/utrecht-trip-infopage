import { ISODate }       from '../ISODate'
import { Rite }          from '../value-objects/Rite'
import { ScheduleEntry } from '../value-objects/ScheduleEntry'

/**
 * Entity — a single day of the trip, identified by its calendar date.
 * Owns its schedule and carries the Rite value object describing its character.
 */
export class Day {
  constructor(
    /** Stable identity — the calendar date is the natural key for a trip day */
    readonly date:     ISODate,
    readonly dayName:  string,
    readonly rite:     Rite,
    readonly schedule: ReadonlyArray<ScheduleEntry>,
  ) {}

  /** Pure domain query — no side-effects, injectable for testing */
  isToday(now: ISODate = ISODate.today()): boolean {
    return this.date.equals(now)
  }

  /** Human-readable date in the almanac's notation: "05 · VII · MMXXVI" */
  get dateDisplay(): string {
    const [yyyy, mm, dd] = this.date.value.split('-')
    return `${dd} · ${ROMAN_MONTHS[mm] ?? mm} · ${ROMAN_YEARS[yyyy] ?? yyyy}`
  }
}

const ROMAN_MONTHS: Record<string, string> = {
  '01': 'I',   '02': 'II',  '03': 'III',
  '04': 'IV',  '05': 'V',   '06': 'VI',
  '07': 'VII', '08': 'VIII','09': 'IX',
  '10': 'X',   '11': 'XI',  '12': 'XII',
}

const ROMAN_YEARS: Record<string, string> = {
  '2026': 'MMXXVI',
  '2027': 'MMXXVII',
}

import { ISODate }         from '../ISODate'
import { DateRange }       from '../value-objects/DateRange'
import { Day }             from './Day'
import { RailExit }        from '../value-objects/RailExit'
import { TripleOffering }  from '../value-objects/TripleOffering'
import { Vigil }           from '../value-objects/Vigil'
import { Refusal }         from '../value-objects/Refusal'
import { PracticalEntry }  from '../value-objects/PracticalEntry'

export interface TripMeta {
  readonly title:        string
  readonly destination:  string
  readonly romanYear:    string
  readonly travelerMode: string
  readonly heroSubtext:  string
}

export interface TripleNoteDetail {
  readonly key:   string
  readonly value: string
}

export interface TripleNoteData {
  readonly quoteStart:    string
  readonly quoteEmphasis: string
  readonly quoteEnd:      string
  readonly details:       ReadonlyArray<TripleNoteDetail>
}

export interface TripStat {
  readonly label: string
  readonly value: string
  readonly sub:   string
}

export interface TripProps {
  id:               string
  meta:             TripMeta
  dateRange:        DateRange
  days:             Day[]
  railExits:        RailExit[]
  tripleOfferings:  TripleOffering[]
  tripleNote:       TripleNoteData
  vigils:           Vigil[]
  refusals:         Refusal[]
  practicals:       PracticalEntry[]
}

/**
 * Aggregate Root — the trip itinerary.
 *
 * All access to days, constraints, and trip content goes through this class.
 * External code never holds raw day arrays; it always asks the Trip.
 */
export class Trip {
  readonly id:              string
  readonly meta:            Readonly<TripMeta>
  readonly dateRange:       DateRange
  readonly railExits:       ReadonlyArray<RailExit>
  readonly tripleOfferings: ReadonlyArray<TripleOffering>
  readonly tripleNote:      Readonly<TripleNoteData>
  readonly vigils:          ReadonlyArray<Vigil>
  readonly refusals:        ReadonlyArray<Refusal>
  readonly practicals:      ReadonlyArray<PracticalEntry>

  private readonly _days: ReadonlyArray<Day>

  private constructor(props: TripProps) {
    if (props.days.length === 0) throw new Error('Trip must have at least one day')

    this.id              = props.id
    this.meta            = Object.freeze({ ...props.meta })
    this.dateRange       = props.dateRange
    this._days           = Object.freeze([...props.days])
    this.railExits       = Object.freeze([...props.railExits])
    this.tripleOfferings = Object.freeze([...props.tripleOfferings])
    this.tripleNote      = Object.freeze({ ...props.tripleNote })
    this.vigils          = Object.freeze([...props.vigils])
    this.refusals        = Object.freeze([...props.refusals])
    this.practicals      = Object.freeze([...props.practicals])
  }

  /** Factory — called by the repository to reconstitute from stored data */
  static reconstitute(props: TripProps): Trip {
    return new Trip(props)
  }

  get days(): ReadonlyArray<Day> {
    return this._days
  }

  findDayByDate(date: ISODate): Day | undefined {
    return this._days.find(d => d.date.equals(date))
  }

  /** The anchor day — shared with a local friend */
  get keyDay(): Day | undefined {
    return this._days.find(d => d.rite.isKey)
  }

  /** The departure day */
  get finalDay(): Day | undefined {
    return this._days.find(d => d.rite.isFinal)
  }

  /** Derived stats for display — computed from real domain data */
  get stats(): ReadonlyArray<TripStat> {
    return [
      { label: 'Nights',  value: 'IV', sub: `${this.dateRange.nights()} nights` },
      { label: 'Rites',   value: 'V',  sub: `${this._days.length} days` },
      { label: 'Friend',  value: 'I',  sub: 'local, beloved' },
      { label: 'Vessels', value: '0',  sub: 'never' },
      { label: 'Bed by',  value: '23', sub: ':00 sharp' },
    ]
  }
}

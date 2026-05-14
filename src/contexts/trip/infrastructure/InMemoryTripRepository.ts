import { ITripRepository } from '../domain/repositories/ITripRepository'
import { Trip }            from '../domain/entities/Trip'
import { Day }             from '../domain/entities/Day'
import { ISODate }         from '../domain/ISODate'
import { DateRange }       from '../domain/value-objects/DateRange'
import { Rite }            from '../domain/value-objects/Rite'
import { ScheduleEntry }   from '../domain/value-objects/ScheduleEntry'
import { RailExit }        from '../domain/value-objects/RailExit'
import { TripleOffering }  from '../domain/value-objects/TripleOffering'
import { Vigil }           from '../domain/value-objects/Vigil'
import { Refusal }         from '../domain/value-objects/Refusal'
import { PracticalEntry }  from '../domain/value-objects/PracticalEntry'

// Data files — the only place raw content lives
import { TRIP_META }         from './data/meta'
import { DAYS }              from './data/days'
import { RAIL_EXITS }        from './data/railExits'
import { TRIPLE_OFFERINGS }  from './data/tripleOfferings'
import { VIGILS }            from './data/vigils'
import { REFUSALS }          from './data/refusals'
import { PRACTICALS }        from './data/practicals'
import type { OfferingGlyph } from '../domain/value-objects/TripleOffering'

/**
 * Infrastructure — in-memory trip repository.
 *
 * Assembles the Trip aggregate from typed data files.
 * No raw content strings live here; this class only calls domain factories.
 */
export class InMemoryTripRepository implements ITripRepository {
  private readonly trip: Trip = buildTrip()

  getTrip(): Trip {
    return this.trip
  }
}

/* ─────────────────────────────────────────────────────────
   Assembly — maps plain data objects → domain value objects
───────────────────────────────────────────────────────── */

function buildTrip(): Trip {
  const days = DAYS.map(d =>
    new Day(
      ISODate.parse(d.date),
      d.dayName,
      Rite.create(d.rite),
      d.schedule.map(s => ScheduleEntry.of(s.time, s.title, s.desc)),
    ),
  )

  const railExits = RAIL_EXITS.map(r => RailExit.create(r))

  const tripleOfferings = TRIPLE_OFFERINGS.map(o =>
    TripleOffering.create({ ...o, glyph: o.glyph as OfferingGlyph }),
  )

  const vigils = VIGILS.map(v =>
    Vigil.of(v.number, v.titleMain, v.titleEmphasis, v.description),
  )

  const refusals = REFUSALS.map(r =>
    Refusal.of(r.number, r.subject, r.reason),
  )

  const practicals = PRACTICALS.map(p =>
    PracticalEntry.of(p.key, p.value),
  )

  return Trip.reconstitute({
    id:   TRIP_META.id,
    meta: TRIP_META.meta,
    dateRange: DateRange.of(
      TRIP_META.dateRange.arrival,
      TRIP_META.dateRange.departure,
    ),
    days,
    railExits,
    tripleOfferings,
    tripleNote: TRIP_META.tripleNote,
    vigils,
    refusals,
    practicals,
  })
}

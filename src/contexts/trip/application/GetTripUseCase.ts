import { Trip }            from '../domain/entities/Trip'
import { Day }             from '../domain/entities/Day'
import { ITripRepository } from '../domain/repositories/ITripRepository'
import { TripHighlighter } from '../domain/services/TripHighlighter'

export interface GetTripResult {
  readonly trip:     Trip
  readonly todayDay: Day | null
}

/**
 * Application Service (Use Case) — orchestrates the domain to answer
 * "give me the trip, and tell me which day is today."
 *
 * Depends on the ITripRepository interface, not the concrete implementation.
 * Infrastructure is injected; the use case never imports from infrastructure.
 */
export class GetTripUseCase {
  private readonly highlighter = new TripHighlighter()

  constructor(private readonly tripRepo: ITripRepository) {}

  execute(): GetTripResult {
    const trip     = this.tripRepo.getTrip()
    const todayDay = this.highlighter.highlight(trip)
    return { trip, todayDay }
  }
}

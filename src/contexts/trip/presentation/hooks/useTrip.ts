import { useMemo }                  from 'react'
import { GetTripUseCase }           from '../../application/GetTripUseCase'
import { InMemoryTripRepository }   from '../../infrastructure/InMemoryTripRepository'
import type { GetTripResult }       from '../../application/GetTripUseCase'

/**
 * Presentation hook — bridges the application use case into React state.
 * Components stay thin; they receive domain objects and display them.
 *
 * The repository and use case are instantiated once via useMemo
 * and never recreated across renders.
 */
export function useTrip(): GetTripResult {
  return useMemo(() => {
    const repo    = new InMemoryTripRepository()
    const useCase = new GetTripUseCase(repo)
    return useCase.execute()
  }, [])
}

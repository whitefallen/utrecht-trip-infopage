import { useState, useMemo }             from 'react'
import { PackingList }                   from '../../domain/PackingList'
import { LocalStoragePackingRepository } from '../../infrastructure/LocalStoragePackingRepository'
import { TogglePackingItemUseCase }      from '../../application/TogglePackingItemUseCase'

/**
 * Presentation hook — bridges the packing use case into React state.
 *
 * - Repository and use case are created once (useMemo).
 * - State is the PackingList aggregate; every toggle replaces it immutably.
 * - Components receive plain data extracted from the aggregate.
 */
export function usePackingList() {
  const { repo, toggleUseCase } = useMemo(() => {
    const repo          = new LocalStoragePackingRepository()
    const toggleUseCase = new TogglePackingItemUseCase(repo)
    return { repo, toggleUseCase }
  }, [])

  const [list, setList] = useState<PackingList>(() => repo.load())

  function toggle(itemId: string) {
    setList(current => toggleUseCase.execute(current, itemId))
  }

  return {
    items:        list.getItems(),
    checkedCount: list.checkedCount,
    totalCount:   list.totalCount,
    progress:     list.progress,
    toggle,
  }
}

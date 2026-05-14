import { PackingList }          from '../domain/PackingList'
import { IPackingRepository }   from '../domain/repositories/IPackingRepository'

/**
 * Application Service (Use Case) — toggle one item and persist the result.
 * The use case is the only place that calls the repository's save method.
 */
export class TogglePackingItemUseCase {
  constructor(private readonly repo: IPackingRepository) {}

  execute(current: PackingList, itemId: string): PackingList {
    const updated = current.toggle(itemId)
    this.repo.save(updated)
    return updated
  }
}

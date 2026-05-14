import { PackingList } from '../PackingList'

/**
 * Repository interface — defined in the domain layer.
 * Infrastructure provides the implementation; the domain only sees this contract.
 * Default items are an infrastructure concern — the implementation decides them.
 */
export interface IPackingRepository {
  /** Hydrate a PackingList from persisted state, falling back to unchecked defaults */
  load(): PackingList
  /** Persist the current state of the list */
  save(list: PackingList): void
}

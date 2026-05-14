import { IPackingRepository } from '../domain/repositories/IPackingRepository'
import { PackingList }        from '../domain/PackingList'
import { PackingItem }        from '../domain/PackingItem'
import { PACKING_ITEMS }      from './data/packingItems'

const STORAGE_KEY = 'utrecht-pack-v3'

/**
 * Infrastructure — localStorage-backed packing repository.
 *
 * Owns default item construction; the domain interface requires no arguments on load().
 * Item content lives in data/packingItems.ts — edit there to add or rename items.
 */
export class LocalStoragePackingRepository implements IPackingRepository {
  private readonly defaults: PackingItem[] = PACKING_ITEMS.map(
    d => new PackingItem(d.id, d.index, d.label),
  )

  load(): PackingList {
    const persisted = this.read()
    const hydrated  = this.defaults.map(item =>
      persisted[item.id] ? item.check() : item,
    )
    return PackingList.create(hydrated)
  }

  save(list: PackingList): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list.toCheckedMap()))
    } catch {
      // Fail silently — private browsing or storage quota exceeded
    }
  }

  private read(): Record<string, boolean> {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')
    } catch {
      return {}
    }
  }
}

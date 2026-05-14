import { PackingItem } from './PackingItem'

/**
 * Aggregate Root — the packing list.
 *
 * Owns and protects a collection of PackingItems.
 * All mutations go through this class; external code never modifies items directly.
 * Returns a new PackingList on each mutation (immutable aggregate pattern).
 *
 * Default item data lives in infrastructure/data/packingItems.ts — not here.
 */
export class PackingList {
  private constructor(private readonly items: ReadonlyMap<string, PackingItem>) {}

  static create(items: PackingItem[]): PackingList {
    return new PackingList(new Map(items.map(i => [i.id, i])))
  }

  /** Returns a new PackingList with the specified item toggled */
  toggle(itemId: string): PackingList {
    const item = this.items.get(itemId)
    if (!item) return this
    const updated = new Map(this.items)
    updated.set(itemId, item.toggle())
    return new PackingList(updated)
  }

  getItems(): ReadonlyArray<PackingItem> {
    return [...this.items.values()]
  }

  get checkedCount(): number {
    return this.getItems().filter(i => i.isChecked).length
  }

  get totalCount(): number {
    return this.items.size
  }

  /** 0–100 */
  get progress(): number {
    if (this.totalCount === 0) return 0
    return Math.round((this.checkedCount / this.totalCount) * 100)
  }

  /** Serialisable snapshot for persistence */
  toCheckedMap(): Record<string, boolean> {
    const result: Record<string, boolean> = {}
    this.items.forEach((item, id) => { result[id] = item.isChecked })
    return result
  }
}


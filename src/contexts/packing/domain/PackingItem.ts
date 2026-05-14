/**
 * Entity — a single item on the packing list, identified by its id.
 * Immutable by convention: mutations return new instances (value-semantics style)
 * so the PackingList aggregate controls all state changes.
 */
export class PackingItem {
  constructor(
    readonly id:        string,
    readonly index:     string,
    readonly label:     string,
    readonly isChecked: boolean = false,
  ) {}

  /** Returns a new PackingItem with the checked state toggled */
  toggle(): PackingItem {
    return new PackingItem(this.id, this.index, this.label, !this.isChecked)
  }

  /** Returns a new PackingItem in the checked state */
  check(): PackingItem {
    return new PackingItem(this.id, this.index, this.label, true)
  }
}

/**
 * Value object — a navigable section of the page.
 * Knows its own href derivation; presentation doesn't hard-code "#" prefixes.
 */
export class NavSection {
  private constructor(
    readonly id:    string,
    readonly label: string,
  ) {}

  static of(id: string, label: string): NavSection {
    return new NavSection(id, label)
  }

  get href(): string {
    return `#${this.id}`
  }
}

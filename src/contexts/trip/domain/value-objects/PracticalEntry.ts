/**
 * Value object — a single key/value entry in the trip's practical reference.
 */
export class PracticalEntry {
  private constructor(
    readonly key:   string,
    readonly value: string,
  ) {}

  static of(key: string, value: string): PracticalEntry {
    return new PracticalEntry(key, value)
  }
}

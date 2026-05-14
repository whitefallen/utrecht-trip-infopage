/**
 * Value object — a named travel constraint expressed as an explicit refusal.
 * Encodes the traveler's stated constraints (no boats, no museums, etc.)
 * as first-class domain concepts rather than buried strings.
 */
export class Refusal {
  private constructor(
    readonly number:     string,
    readonly strikeText: string,
    readonly reason:     string,
  ) {}

  static of(number: string, strikeText: string, reason: string): Refusal {
    return new Refusal(number, strikeText, reason)
  }
}

/**
 * Value object — an immutable, validated ISO-8601 date string (YYYY-MM-DD).
 * All date comparisons in the domain go through this type.
 */
export class ISODate {
  private constructor(readonly value: string) {}

  static parse(raw: string): ISODate {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
      throw new Error(`Invalid ISO date: "${raw}"`)
    }
    return new ISODate(raw)
  }

  static today(): ISODate {
    const d = new Date()
    const yyyy = d.getFullYear()
    const mm   = String(d.getMonth() + 1).padStart(2, '0')
    const dd   = String(d.getDate()).padStart(2, '0')
    return new ISODate(`${yyyy}-${mm}-${dd}`)
  }

  equals(other: ISODate): boolean {
    return this.value === other.value
  }

  isBefore(other: ISODate): boolean {
    return this.value < other.value
  }

  toString(): string {
    return this.value
  }
}

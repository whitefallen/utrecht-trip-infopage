/**
 * Value object — one of the three offerings of the friend day (Rite II).
 * Immutable; describes a specific shared activity with its specs.
 */
export type OfferingGlyph = 'pancakes' | 'kibbeling' | 'bowling'

export interface OfferingSpec {
  readonly label: string
  readonly value: string
}

export interface TripleOfferingProps {
  glyph:          OfferingGlyph
  number:         string
  offeringLabel:  string
  title:          string
  titleEmphasis:  string
  latin:          string
  description:    string
  specs:          OfferingSpec[]
  isBlood?:       boolean
}

export class TripleOffering {
  readonly glyph:         OfferingGlyph
  readonly number:        string
  readonly offeringLabel: string
  readonly title:         string
  readonly titleEmphasis: string
  readonly latin:         string
  readonly description:   string
  readonly specs:         ReadonlyArray<OfferingSpec>
  readonly isBlood:       boolean

  private constructor(props: TripleOfferingProps) {
    this.glyph         = props.glyph
    this.number        = props.number
    this.offeringLabel = props.offeringLabel
    this.title         = props.title
    this.titleEmphasis = props.titleEmphasis
    this.latin         = props.latin
    this.description   = props.description
    this.specs         = Object.freeze([...props.specs])
    this.isBlood       = props.isBlood ?? false
  }

  static create(props: TripleOfferingProps): TripleOffering {
    return new TripleOffering(props)
  }
}

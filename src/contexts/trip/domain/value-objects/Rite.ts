/**
 * Value object — the ritual character of a single day.
 * Immutable; two Rites with the same data are equal.
 */
export interface RiteDisplayMeta {
  readonly sunset: string
  readonly temp:   string
  readonly mode:   string
  readonly worth:  string
}

export interface RiteProps {
  roman:        string
  name:         string
  subtitle:     string
  latinSubtitle: string
  latinNote:    string
  dropLetter:   string
  lede:         string
  body:         string
  meta:         RiteDisplayMeta
  isKey?:       boolean
  isFinal?:     boolean
}

export class Rite {
  readonly roman:         string
  readonly name:          string
  readonly subtitle:      string
  readonly latinSubtitle: string
  readonly latinNote:     string
  readonly dropLetter:    string
  readonly lede:          string
  readonly body:          string
  readonly meta:          Readonly<RiteDisplayMeta>
  readonly isKey:         boolean
  readonly isFinal:       boolean

  private constructor(props: RiteProps) {
    this.roman         = props.roman
    this.name          = props.name
    this.subtitle      = props.subtitle
    this.latinSubtitle = props.latinSubtitle
    this.latinNote     = props.latinNote
    this.dropLetter    = props.dropLetter
    this.lede          = props.lede
    this.body          = props.body
    this.meta          = Object.freeze({ ...props.meta })
    this.isKey         = props.isKey   ?? false
    this.isFinal       = props.isFinal ?? false
  }

  static create(props: RiteProps): Rite {
    if (!props.roman) throw new Error('Rite.roman is required')
    if (!props.name)  throw new Error('Rite.name is required')
    return new Rite(props)
  }
}

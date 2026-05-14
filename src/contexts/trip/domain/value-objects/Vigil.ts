/**
 * Value object — a quiet evening activity suggestion.
 */
export class Vigil {
  private constructor(
    readonly number:       string,
    readonly titleMain:    string,
    readonly titleEmphasis: string,
    readonly description:  string,
  ) {}

  static of(
    number: string,
    titleMain: string,
    titleEmphasis: string,
    description: string,
  ): Vigil {
    return new Vigil(number, titleMain, titleEmphasis, description)
  }
}

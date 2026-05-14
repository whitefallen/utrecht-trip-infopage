/**
 * Value object — a day-trip option reachable by rail from Utrecht Centraal.
 * Immutable; identity is determined by the route code.
 */
export interface RailExitProps {
  code:        string
  cityPrefix:  string
  citySuffix:  string
  why:         string
  travelTime:  string
  fare:        string
}

export class RailExit {
  private constructor(
    readonly code:       string,
    readonly cityPrefix: string,
    readonly citySuffix: string,
    readonly why:        string,
    readonly travelTime: string,
    readonly fare:       string,
  ) {}

  static create(props: RailExitProps): RailExit {
    if (!props.code) throw new Error('RailExit.code is required')
    return new RailExit(
      props.code, props.cityPrefix, props.citySuffix,
      props.why, props.travelTime, props.fare,
    )
  }

  get fullCityName(): string {
    return `${this.cityPrefix}${this.citySuffix}`
  }
}

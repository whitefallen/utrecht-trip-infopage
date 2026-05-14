/**
 * Value object — a single time-boxed activity in a day's schedule.
 */
export class ScheduleEntry {
  private constructor(
    readonly time:        string,
    readonly title:       string,
    readonly description: string,
  ) {}

  static of(time: string, title: string, description: string): ScheduleEntry {
    return new ScheduleEntry(time, title, description)
  }
}

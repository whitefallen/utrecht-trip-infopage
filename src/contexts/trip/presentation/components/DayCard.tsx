import type { Day } from '../../domain/entities/Day'

interface Props {
  day:     Day
  isToday: boolean
}

export function DayCard({ day, isToday }: Props) {
  const { rite, schedule } = day
  const cls = ['rite', isToday && 'rite--today', rite.isKey && 'rite--key', rite.isFinal && 'rite--final']
    .filter(Boolean).join(' ')

  return (
    <article id={`rite-${rite.roman.toLowerCase()}`} className={cls} data-date={day.date.value}>

      <div className="rite__rail">
        <div className="rite__meta">{day.dateDisplay}</div>
        <div className="rite__roman">{rite.roman}</div>
        <div className="rite__meta">{day.dayName}</div>
        <span className="rite__tag">{rite.name}</span>
      </div>

      <div className="rite__body">
        <h3>Rite of the <em>{rite.subtitle}.</em></h3>
        <p className="rite__latin">
          — {rite.latinSubtitle} <span className="bone-3">{rite.latinNote}</span>
        </p>
        <p className="rite__lede">
          <span className="rite__drop">{rite.dropLetter}</span>
          {rite.lede}
        </p>
        <p>{rite.body}</p>
        <div className="rite__marginalia">
          <span>Sunset <b>{rite.meta.sunset}</b></span>
          <span>Temp   <b>{rite.meta.temp}</b></span>
          <span>Mode   <b>{rite.meta.mode}</b></span>
          <span>Worth  <b>{rite.meta.worth}</b></span>
        </div>
      </div>

      <div className="rite__sched">
        <div className="rite__sched-head">Hours · {day.dayName}</div>
        <ul>
          {schedule.map((entry, i) => (
            <li key={i}>
              <span className="rite__sched-time">{entry.time}</span>
              <div className="rite__sched-act"><b>{entry.title}</b> {entry.description}</div>
            </li>
          ))}
        </ul>
      </div>

    </article>
  )
}

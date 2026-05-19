import type { ReportDay } from '../../infrastructure/data/reportDays'
import { ReportMomentEntry } from './ReportMomentEntry'

interface Props {
  day: ReportDay
}

export function ReportDayCard({ day }: Props) {
  const hasMoments = day.moments.length > 0

  return (
    <section
      className="report-day"
      id={`report-day-${day.riteRoman.toLowerCase()}`}
    >
      <div className="wrap">

        {/* Day header */}
        <div className="report-day__header">
          <span className="report-day__roman">{day.riteRoman}</span>
          <div className="report-day__meta">
            <span className="report-day__date">{day.date} · {day.dayName}</span>
            <span className="report-day__rite">{day.riteName} · <em>{day.riteSubtitle}</em></span>
          </div>
          <a
            href={`./#rite-${day.riteRoman.toLowerCase()}`}
            className="report-day__plan-link"
            title="See what was planned"
          >
            ← plan
          </a>
        </div>

        {/* Optional headline */}
        {day.headline && (
          <h2 className="report-day__headline">{day.headline}</h2>
        )}

        {/* Moments or empty state */}
        {hasMoments ? (
          <div className="report-day__moments">
            {day.moments.map((moment, i) => (
              <ReportMomentEntry key={i} moment={moment} />
            ))}
          </div>
        ) : (
          <div className="report-day__empty">
            <span>— not yet written —</span>
          </div>
        )}

      </div>
    </section>
  )
}

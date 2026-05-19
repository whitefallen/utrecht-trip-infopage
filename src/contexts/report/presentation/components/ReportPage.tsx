import './report.css'
import '../../../shell/presentation/components/shell.css'
import { REPORT_DAYS } from '../../infrastructure/data/reportDays'
import { ReportNav }     from './ReportNav'
import { ReportDayCard } from './ReportDayCard'

export function ReportPage() {
  return (
    <>
      <ReportNav />

      {/* Hero */}
      <header className="report-hero">
        <div className="wrap">
          <div className="report-hero__eyebrow">
            <span className="report-hero__pip" />
            field record · Utrecht · MMXXVI
          </div>
          <h1 className="report-hero__title">
            Utrecht,<br />
            <em>as it happened.</em>
          </h1>
          <p className="report-hero__sub">
            Five days. What was planned, and what was real.
            Fill this in as the trip unfolds — add moments, drop in photos, note what diverged.
          </p>
        </div>
      </header>

      {/* Day sections */}
      <main>
        {REPORT_DAYS.map(day => (
          <ReportDayCard key={day.riteRoman} day={day} />
        ))}
      </main>

      {/* Footer */}
      <footer className="report-foot">
        <div className="wrap">
          <div className="report-foot__rule" />
          <div className="report-foot__text">— end of record · Utrecht · 05.VII—09.VII · MMXXVI —</div>
          <a href="./" className="report-foot__back">← Back to the almanac</a>
        </div>
      </footer>
    </>
  )
}

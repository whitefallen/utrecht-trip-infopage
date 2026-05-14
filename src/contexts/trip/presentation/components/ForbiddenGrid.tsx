import { useTrip } from '../hooks/useTrip'

export function ForbiddenGrid() {
  const { trip } = useTrip()

  return (
    <section id="forbidden" className="standard">
      <div className="wrap">
        <div className="sec-head">
          <div className="tag">vi · the forbidden</div>
          <h2>Six small <em>refusals.</em></h2>
          <div className="seal">Saying no makes yes better</div>
        </div>
        <div className="forbidden">
          {trip.refusals.map(r => (
            <div key={r.number} className="forbid">
              <div className="forbid__seal">
                Refused<small>{r.number}</small>
              </div>
              <h4><span className="forbid__strike">{r.strikeText}</span></h4>
              <p>{r.reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

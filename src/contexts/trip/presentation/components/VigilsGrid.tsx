import { useTrip } from '../hooks/useTrip'

export function VigilsGrid() {
  const { trip } = useTrip()

  return (
    <section id="evenings" className="standard">
      <div className="wrap">
        <div className="sec-head">
          <div className="tag">v · the vigils</div>
          <h2>Six small <em>evenings.</em></h2>
          <div className="seal">For the nights without bowling</div>
        </div>
      </div>
      <div className="quiet">
        {trip.vigils.map(v => (
          <div key={v.number} className="vigil">
            <div className="vigil__number">{v.number}</div>
            <h4>{v.titleMain} <em>{v.titleEmphasis}</em></h4>
            <p>{v.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

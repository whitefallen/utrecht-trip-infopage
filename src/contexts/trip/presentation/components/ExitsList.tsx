import { useTrip } from '../hooks/useTrip'

export function ExitsList() {
  const { trip } = useTrip()

  return (
    <section id="exits" className="standard">
      <div className="wrap">
        <div className="sec-head">
          <div className="tag">iv · the exits</div>
          <h2>An hour of rail, <em>another country.</em></h2>
          <div className="seal">Pick one · Tuesday · 07 · VII</div>
        </div>
        <div className="exits">
          {trip.railExits.map(exit => (
            <div key={exit.code} className="exit">
              <div className="exit__code">{exit.code}</div>
              <div className="exit__name">{exit.cityPrefix}<em>{exit.citySuffix}</em></div>
              <div className="exit__why">{exit.why}</div>
              <div className="exit__meta">From UT Centraal<b>{exit.travelTime}</b></div>
              <div className="exit__fare">Fare<b>{exit.fare}</b></div>
            </div>
          ))}
        </div>
        <p className="mono bone-3" style={{ marginTop: 20 }}>
          — Amsterdam · 27 min · expects a whole day · skip unless craving crowds.
          Fares: NS off-peak singles, July MMXXVI.
        </p>
      </div>
    </section>
  )
}

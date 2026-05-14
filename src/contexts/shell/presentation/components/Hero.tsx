import { useTrip } from '../../../trip/presentation/hooks/useTrip'

export function Hero() {
  const { trip } = useTrip()
  const { meta, stats } = trip

  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero__grid">
          <div>
            <div className="hero__eyebrow">
              <span className="hero__eyebrow-pip"/>
              Almanac · {trip.dateRange.nights()} Nights · {trip.days.length} Rites · Solo · {meta.romanYear}
            </div>
            <h1 className="hero__title">
              <span className="hero__title-row"><span className="hero__title-lead">an almanac for</span></span>
              <span className="hero__title-row">four quiet</span>
              <span className="hero__title-row">
                <span className="hero__title-acid">days,</span>{' '}
                <span className="hero__title-blood">slowly,</span>
              </span>
              <span className="hero__title-row">in Utrecht.</span>
            </h1>
          </div>

          <aside className="hero__meta">
            <div className="hero__meta-row"><div className="hero__meta-key">Depart</div><div className="hero__meta-val hero__meta-val--num">V · VII · MMXXVI</div></div>
            <div className="hero__meta-row"><div className="hero__meta-key">Return</div><div className="hero__meta-val hero__meta-val--num">IX · VII · MMXXVI</div></div>
            <div className="hero__meta-row"><div className="hero__meta-key">Duration</div><div className="hero__meta-val">four nights<br/><span className="bone-3 italic">a number, nothing more</span></div></div>
            <div className="hero__meta-row"><div className="hero__meta-key">Base</div><div className="hero__meta-val">Utrecht, Centrum</div></div>
            <div className="hero__meta-row"><div className="hero__meta-key">Mode</div><div className="hero__meta-val">{meta.travelerMode}<br/><span className="bone-3 italic">no vessels, no vigils after midnight</span></div></div>
            <div className="hero__meta-row"><div className="hero__meta-key">Pax</div><div className="hero__meta-val">i. · solo · M · XXX</div></div>
          </aside>
        </div>

        <p className="hero__sub">
          <span className="hero__sub-drop">N</span>
          {meta.heroSubtext.slice(1)}
        </p>

        <div className="hero__stats">
          {stats.map((s, i) => (
            <div key={i} className="hero__stat">
              <div className="hero__stat-label">{s.label}</div>
              <div className="hero__stat-value">{s.value}<small className="hero__stat-sub">{s.sub}</small></div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

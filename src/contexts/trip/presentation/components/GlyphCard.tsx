import type { TripleOffering, OfferingGlyph } from '../../domain/value-objects/TripleOffering'

function Glyph({ id, isBlood }: { id: OfferingGlyph; isBlood: boolean }) {
  const col = isBlood ? '#E33B4B' : '#C8FF1B'
  if (id === 'pancakes') return (
    <svg className="glyph-card__glyph" viewBox="0 0 80 80" fill="none" stroke={col} strokeWidth="1.4" aria-hidden="true">
      <circle cx="40" cy="40" r="34"/><circle cx="40" cy="40" r="24"/>
      <circle cx="40" cy="40" r="14"/><circle cx="40" cy="40" r="4" fill={col}/>
    </svg>
  )
  if (id === 'kibbeling') return (
    <svg className="glyph-card__glyph" viewBox="0 0 80 80" fill="none" stroke={col} strokeWidth="1.4" aria-hidden="true">
      <circle cx="40" cy="40" r="34"/>
      <polygon points="40,16 60,56 20,56"/><polygon points="40,64 60,24 20,24"/>
      <circle cx="40" cy="40" r="3" fill={col}/>
    </svg>
  )
  return (
    <svg className="glyph-card__glyph" viewBox="0 0 80 80" fill="none" stroke={col} strokeWidth="1.4" aria-hidden="true">
      <circle cx="40" cy="40" r="34"/><circle cx="40" cy="40" r="20"/>
      <circle cx="33" cy="36" r="2.4" fill={col}/>
      <circle cx="47" cy="36" r="2.4" fill={col}/>
      <circle cx="40" cy="46" r="2.4" fill={col}/>
    </svg>
  )
}

export function GlyphCard({ offering }: { offering: TripleOffering }) {
  return (
    <article className={`glyph-card${offering.isBlood ? ' glyph-card--blood' : ''}`}>
      <span className="glyph-card__corner">{offering.number}</span>
      <Glyph id={offering.glyph} isBlood={offering.isBlood} />
      <div className="glyph-card__num">{offering.offeringLabel}</div>
      <h4>{offering.title} <em>{offering.titleEmphasis}</em></h4>
      <div className="glyph-card__latin">{offering.latin}</div>
      <p>{offering.description}</p>
      <div className="glyph-card__specs">
        {offering.specs.map(s => <div key={s.label}>{s.label}<b>{s.value}</b></div>)}
      </div>
    </article>
  )
}

import { useTrip }    from '../hooks/useTrip'
import { GlyphCard }  from './GlyphCard'

export function TripleRiteSection() {
  const { trip } = useTrip()
  const { tripleOfferings: offerings, tripleNote: note } = trip

  return (
    <section id="triple" className="standard">
      <div className="wrap">
        <div className="sec-head">
          <div className="tag">iii · the triple rite</div>
          <h2>Three offerings <em>to monday.</em></h2>
          <div className="seal">Performed with one local · 06 · VII</div>
        </div>

        <div className="triple">
          {offerings.map(o => <GlyphCard key={o.glyph} offering={o} />)}
        </div>

        <div className="triple-note">
          <div className="triple-note__quote">
            {note.quoteStart}<em>{note.quoteEmphasis}</em>{note.quoteEnd}
          </div>
          <div className="triple-note__grid">
            {note.details.map(d => (
              <div key={d.key}>
                <div className="triple-note__detail-key">{d.key}</div>
                <div className="triple-note__detail-val">{d.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

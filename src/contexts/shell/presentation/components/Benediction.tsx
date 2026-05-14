export function Benediction() {
  return (
    <footer className="benediction">
      <div className="wrap">
        <div className="benediction__tag">— closing benediction —</div>
        <h2>Go, <em>traveller.</em><br/>Eat the pancake.<br/>Carry the trip<br/>home <em>gently</em>.</h2>

        <a href="#" className="benediction__sigil-link" aria-label="Return to top">
          <svg className="benediction__sigil" viewBox="0 0 80 80" fill="none" aria-hidden="true">
            {/* Expanding halo ring — grows on hover */}
            <circle className="sigil-halo" cx="40" cy="40" r="36" stroke="#5A5666" strokeWidth="1" fill="none"/>
            {/* Static rings & sigil */}
            <circle cx="40" cy="40" r="36" stroke="#5A5666" strokeWidth="1"/>
            <circle cx="40" cy="40" r="22" stroke="#C8FF1B" strokeWidth="1.2"/>
            <polygon points="40,20 58,52 22,52" stroke="#C8FF1B" strokeWidth="1.2"/>
            <circle cx="40" cy="40" r="3" fill="#E33B4B"/>
          </svg>
          <span className="benediction__sigil-hint" aria-hidden="true">↑ return</span>
        </a>

        <div className="benediction__meta">
          Almanac of nothing in particular · v3<br/>
          Utrecht · 05.VII—09.VII · MMXXVI<br/>
          Pax I · end of document
        </div>
      </div>
    </footer>
  )
}

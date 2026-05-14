import { useTrip } from '../hooks/useTrip'

/**
 * Static geometry for the five wheel stops.
 * cx/cy   — circle centre in the 400×400 viewBox
 * labelX/Y — where the hover-name label appears (below each circle,
 *            above for the two bottom stops to avoid the SVG edge)
 */
const WHEEL_STOPS = [
  { roman: 'I',   date: '05 · VII', cx: 200,   cy: 42,    labelX: 200,   labelY: 76,  },
  { roman: 'II',  date: '06 · VII', cx: 350.4, cy: 151.4, labelX: 350.4, labelY: 185, isKey: true  },
  { roman: 'III', date: '07 · VII', cx: 292.5, cy: 328,   labelX: 292.5, labelY: 294, },
  { roman: 'IV',  date: '08 · VII', cx: 107.5, cy: 328,   labelX: 107.5, labelY: 294, },
  { roman: 'V',   date: '09 · VII', cx: 49.6,  cy: 151.4, labelX: 49.6,  labelY: 185, isFinal: true },
]

export function WheelSection() {
  const { trip } = useTrip()

  return (
    <section id="wheel" className="wheel-section">
      <div className="wrap">
        <div className="wheel__grid">

          <div className="wheel__copy">
            <div className="mono bone-3" style={{ marginBottom: 22 }}>i · the wheel of days</div>
            <h2>Five turnings of the <em>wheel.</em></h2>
            <p>
              Each day is a small rite, named in mock-Latin and entered without much ceremony.
              Two are arrival and departure, which barely count. One belongs to your friend.
              One is an exit by rail. One is a slow wander through Utrecht with a tower to climb.
              After that, the wheel resets and you go home with a little more in your pocket than you came with.
            </p>
            <div className="wheel__legend">
              {trip.days.map((day, i) => (
                <a
                  key={day.date.value}
                  href={`#rite-${day.rite.roman.toLowerCase()}`}
                  className={`wheel__legend-row wheel__legend-row--link${WHEEL_STOPS[i]?.isKey ? ' wheel__legend-row--key' : ''}`}
                >
                  <div className="wheel__legend-roman">{day.rite.roman}</div>
                  <div className="wheel__legend-name">{day.rite.name} · {day.rite.subtitle}</div>
                  <div className="wheel__legend-date">{WHEEL_STOPS[i]?.date}</div>
                </a>
              ))}
            </div>
          </div>

          <svg
            className="wheel__svg"
            viewBox="0 0 400 400"
            fill="none"
            role="img"
            aria-label="Wheel of five rites — click a circle to jump to that day"
          >
            {/* ── Decorative rings, star & spokes ── */}
            <g aria-hidden="true">
              <circle cx="200" cy="200" r="190" stroke="#1B1B2A" strokeWidth="1"/>
              <circle cx="200" cy="200" r="158" stroke="#1B1B2A" strokeWidth="1"/>
              <circle cx="200" cy="200" r="120" stroke="#1B1B2A" strokeWidth="1"/>
              <circle cx="200" cy="200" r="60"  stroke="#1B1B2A" strokeWidth="1"/>
              <polygon points="200,98 287,250 113,250" stroke="#ECE6D2" strokeWidth="1" opacity="0.5"/>
              <polygon points="200,302 113,150 287,150" stroke="#ECE6D2" strokeWidth="1" opacity="0.5"/>
              {WHEEL_STOPS.map(stop => (
                <line key={stop.roman} x1="200" y1="200" x2={stop.cx} y2={stop.cy} stroke="#3A3A50" strokeWidth="1"/>
              ))}
            </g>

            {/* ── Interactive day stops ── */}
            {WHEEL_STOPS.map((stop, i) => {
              const day         = trip.days[i]
              const fill        = stop.isKey  ? '#C8FF1B' : '#0A0A0F'
              const stroke      = stop.isKey  ? '#C8FF1B' : stop.isFinal ? '#E33B4B' : '#ECE6D2'
              const textColor   = stop.isKey  ? '#0A0A0F' : stop.isFinal ? '#E33B4B' : '#ECE6D2'
              return (
                <a
                  key={stop.roman}
                  href={`#rite-${stop.roman.toLowerCase()}`}
                  className="wheel__stop"
                  aria-label={`Jump to Rite ${stop.roman} · ${day?.rite.name ?? ''}`}
                >
                  <title>Rite {stop.roman} · {day?.rite.name} · {day?.rite.subtitle}</title>

                  {/* Expanding halo ring — grows outward on hover */}
                  <circle
                    className="wheel__stop-halo"
                    cx={stop.cx} cy={stop.cy} r="22"
                    stroke={stroke} strokeWidth="1.5"
                  />

                  {/* Main circle + numeral — scale together on hover */}
                  <g className="wheel__stop-main">
                    <circle cx={stop.cx} cy={stop.cy} r="22" fill={fill} stroke={stroke} strokeWidth="2"/>
                    <text
                      x={stop.cx} y={stop.cy + 8}
                      textAnchor="middle"
                      fontFamily="Unbounded" fontWeight="700"
                      fontSize={stop.roman.length > 2 ? 18 : 20}
                      fill={textColor}
                    >
                      {stop.roman}
                    </text>
                  </g>

                  {/* Rite name — fades in on hover */}
                  <text
                    className="wheel__stop-label"
                    x={stop.labelX} y={stop.labelY}
                    textAnchor="middle"
                    fontFamily="EB Garamond" fontStyle="italic"
                    fontSize="11"
                    fill={stroke}
                  >
                    {day?.rite.name}
                  </text>
                </a>
              )
            })}

            {/* ── Centre sigil ── */}
            <g aria-hidden="true">
              <circle cx="200" cy="200" r="36" fill="#0A0A0F" stroke="#C8FF1B" strokeWidth="1.2"/>
              <polygon points="200,178 218,212 182,212" fill="none" stroke="#C8FF1B" strokeWidth="1.2"/>
              <circle cx="200" cy="206" r="4" fill="#C8FF1B"/>
              <g stroke="#3A3A50" strokeWidth="1">
                <line x1="200" y1="10"  x2="200" y2="18"/>
                <line x1="200" y1="382" x2="200" y2="390"/>
                <line x1="10"  y1="200" x2="18"  y2="200"/>
                <line x1="382" y1="200" x2="390" y2="200"/>
              </g>
              <text x="200" y="394" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#5A5666" letterSpacing="3">MMXXVI</text>
              <text x="6" y="200" textAnchor="start" fontFamily="JetBrains Mono" fontSize="9" fill="#5A5666" letterSpacing="2" transform="rotate(-90 6 200)">UTRECHT · NL</text>
            </g>
          </svg>

        </div>
      </div>
    </section>
  )
}

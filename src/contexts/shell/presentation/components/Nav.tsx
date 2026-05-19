import { useScrollSpy } from '../hooks/useScrollSpy'
import { NAV_SECTIONS } from '../../infrastructure/shellContent'

export function Nav() {
  const activeId = useScrollSpy(NAV_SECTIONS)

  return (
    <nav className="topnav">
      <div className="wrap topnav__inner">
        <div className="topnav__brand">
          <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
            <circle cx="20" cy="20" r="18"/>
            <circle cx="20" cy="20" r="11"/>
            <polygon points="20,7 32,28 8,28"/>
            <circle cx="20" cy="20" r="2" fill="currentColor"/>
          </svg>
          <span>UTR · Almanac · MMXXVI</span>
        </div>
        <div className="topnav__links">
          {NAV_SECTIONS.map(section => (
            <a
              key={section.id}
              href={section.href}
              className={activeId === section.id ? 'active' : undefined}
            >
              {section.label}
            </a>
          ))}
          <a href="./report.html" className="topnav__record-link">Record →</a>
        </div>
      </div>
    </nav>
  )
}

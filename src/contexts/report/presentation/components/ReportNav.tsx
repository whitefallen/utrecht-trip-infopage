export function ReportNav() {
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
          <span>UTR · Record · MMXXVI</span>
        </div>
        <div className="topnav__links">
          <a href="./">← Almanac</a>
        </div>
      </div>
    </nav>
  )
}

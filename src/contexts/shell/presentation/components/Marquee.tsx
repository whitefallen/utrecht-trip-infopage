import './shell.css'

interface Props {
  items:    string[]
  variant?: 'fast'
}

export function Marquee({ items, variant }: Props) {
  const doubled = [...items, ...items]
  return (
    <div className={`marquee${variant === 'fast' ? ' marquee--fast' : ''}`} aria-hidden="true">
      <div className="marquee__track">
        {doubled.map((text, i) => <span key={i}>{text}</span>)}
      </div>
    </div>
  )
}

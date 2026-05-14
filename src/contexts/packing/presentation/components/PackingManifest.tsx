import './packing.css'
import { usePackingList } from '../hooks/usePackingList'

export function PackingManifest() {
  const { items, checkedCount, totalCount, progress, toggle } = usePackingList()

  return (
    <div className="ledger">
      <h4 className="ledger__heading">
        Packing <em>manifest</em>
        <span className="ledger__heading-code">vii-b</span>
      </h4>

      <ul className="packlist">
        {items.map(item => (
          <li key={item.id} className="packlist__item" onClick={() => toggle(item.id)}>
            <span className="packlist__index">{item.index}</span>
            <input
              type="checkbox"
              className="packlist__checkbox"
              checked={item.isChecked}
              onChange={() => toggle(item.id)}
              onClick={e => e.stopPropagation()}
              aria-label={item.label}
            />
            <label className="packlist__label">{item.label}</label>
          </li>
        ))}
      </ul>

      <div className="pack-progress">
        <div className="pack-progress__bar-track">
          <div
            className="pack-progress__bar-fill"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <div className="pack-progress__meta">
          <span>{String(checkedCount).padStart(2,'0')} / {String(totalCount).padStart(2,'0')}</span>
          <span>Saved · local rite</span>
        </div>
      </div>
    </div>
  )
}

import { useTrip } from '../hooks/useTrip'

export function InventoryReference() {
  const { trip } = useTrip()

  return (
    <div className="ledger">
      <h4 className="ledger__heading">
        Field <em>reference</em>
        <span className="ledger__heading-code">vii-a</span>
      </h4>
      <div>
        {trip.practicals.map(entry => (
          <div key={entry.key} className="pact__row">
            <div className="pact__key">{entry.key}</div>
            <div>{entry.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

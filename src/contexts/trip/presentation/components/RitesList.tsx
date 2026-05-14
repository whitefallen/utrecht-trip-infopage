import { useTrip }  from '../hooks/useTrip'
import { DayCard }  from './DayCard'

export function RitesList() {
  const { trip, todayDay } = useTrip()

  return (
    <section id="rites" className="rite-section">
      <div className="wrap">
        <div className="sec-head">
          <div className="tag">ii · the five rites</div>
          <h2>Five turnings, <em>plainly described.</em></h2>
          <div className="seal">Treat the hours as suggestion</div>
        </div>
        <div className="rites">
          {trip.days.map(day => (
            <DayCard
              key={day.date.value}
              day={day}
              isToday={todayDay?.date.equals(day.date) ?? false}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

import type { ReportMoment } from '../../infrastructure/data/reportDays'

interface Props {
  moment: ReportMoment
}

export function ReportMomentEntry({ moment }: Props) {
  const hasPhotos = moment.photos && moment.photos.length > 0
  const photoCount = moment.photos?.length ?? 0

  return (
    <article className="report-moment">
      <header className="report-moment__header">
        {moment.time && (
          <span className="report-moment__time">{moment.time}</span>
        )}
        <h3 className="report-moment__title">{moment.title}</h3>
      </header>

      {moment.body && (
        <p className="report-moment__body">{moment.body}</p>
      )}

      {hasPhotos && (
        <div className={`report-moment__photos report-moment__photos--${photoCount === 1 ? 'single' : 'grid'}`}>
          {moment.photos!.map((photo, i) => (
            <figure
              key={i}
              className={`report-moment__photo${photo.full ? ' report-moment__photo--full' : ''}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              {photo.caption && (
                <figcaption className="report-moment__caption">{photo.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      )}
    </article>
  )
}

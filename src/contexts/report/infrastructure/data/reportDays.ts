/**
 * Report data — what actually happened.
 *
 * Fill this in as you go. Each day has:
 *   - headline   : one sentence that captures the day
 *   - moments    : chronological journal entries, each with optional photos
 *
 * Photos:
 *   Drop files into  public/images/day-i/,  public/images/day-ii/,  etc.
 *   Reference them as  src: '/images/day-i/your-photo.jpg'
 *   All photos are optional — a moment without photos is just text.
 */

export interface ReportPhoto {
  src:      string        // e.g. '/images/day-i/canal.jpg'
  alt:      string        // always fill in for accessibility
  caption?: string        // optional one-liner shown below the photo
  full?:    boolean       // true = full-width, false (default) = grid
}

export interface ReportMoment {
  time?:    string        // e.g. '14:30' — optional
  title:    string        // short label, e.g. 'Arrived, dropped the bag'
  body?:    string        // prose — as long or short as you like
  photos?:  ReportPhoto[]
}

export interface ReportDay {
  date:        string     // '05.VII'
  dayName:     string     // 'Sunday'
  riteRoman:   string     // 'I'
  riteName:    string     // 'Limen'
  riteSubtitle:string     // 'Threshold'
  headline?:   string     // the day in one sentence — fill in after the fact
  moments:     ReportMoment[]
}

// ─────────────────────────────────────────────────────────────────────────────
// FIVE DAYS — fill in as the trip unfolds
// ─────────────────────────────────────────────────────────────────────────────

export const REPORT_DAYS: ReportDay[] = [
  {
    date:         '05.VII',
    dayName:      'Sunday',
    riteRoman:    'I',
    riteName:     'Limen',
    riteSubtitle: 'Threshold',
    headline:     '',
    moments:      [
      // ── SAMPLE ENTRY — replace with what actually happened ──────────────
      {
        time:  '14:00',
        title: 'Arrived, dropped the bag',
        body:  'The apartment was smaller than the photos suggested and exactly right for the purpose. Stood in the kitchen for thirty seconds.',
        // photos: [
        //   { src: '/images/day-i/apartment.jpg', alt: 'The apartment hallway', caption: 'Exactly right.' },
        // ],
      },
      {
        time:  '16:30',
        title: 'First walk — Oudegracht south',
        body:  'The canal was doing what the canal does. Followed it without a plan until a terrace looked right.',
      },
    ],
  },

  {
    date:         '06.VII',
    dayName:      'Monday',
    riteRoman:    'II',
    riteName:     'Ventris',
    riteSubtitle: 'Yielding Stomach',
    headline:     '',
    moments:      [],
  },

  {
    date:         '07.VII',
    dayName:      'Tuesday',
    riteRoman:    'III',
    riteName:     'Exitus',
    riteSubtitle: 'The Train Out',
    headline:     '',
    moments:      [],
  },

  {
    date:         '08.VII',
    dayName:      'Wednesday',
    riteRoman:    'IV',
    riteName:     'Otium',
    riteSubtitle: 'Slow Return',
    headline:     '',
    moments:      [],
  },

  {
    date:         '09.VII',
    dayName:      'Thursday',
    riteRoman:    'V',
    riteName:     'Finis',
    riteSubtitle: 'The Going Home',
    headline:     '',
    moments:      [],
  },
]

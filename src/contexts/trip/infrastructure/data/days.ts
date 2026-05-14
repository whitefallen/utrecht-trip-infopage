/**
 * Days data — edit this file to update rites, schedules, and daily copy.
 * One entry per day; order determines display order.
 */

export interface RiteData {
  roman:         string
  name:          string
  subtitle:      string
  latinSubtitle: string
  latinNote:     string
  dropLetter:    string
  lede:          string
  body:          string
  meta: {
    sunset: string
    temp:   string
    mode:   string
    worth:  string
  }
  isKey?:   boolean
  isFinal?: boolean
}

export interface ScheduleEntryData {
  time:  string
  title: string
  desc:  string
}

export interface DayData {
  date:     string   // YYYY-MM-DD
  dayName:  string
  rite:     RiteData
  schedule: ScheduleEntryData[]
}

export const DAYS: DayData[] = [
  {
    date: '2026-07-05',
    dayName: 'Sunday',
    rite: {
      roman: 'I', name: 'Limen', subtitle: 'Threshold',
      latinSubtitle: 'Rite the First.', latinNote: 'Arrival without ceremony.',
      dropLetter: 'A',
      lede: 'rrive. Drop the bag. Prove the apartment exists. Stand in the kitchen for thirty seconds and notice you are somewhere new and nobody needs anything from you. Walk the Oudegracht once, in the direction the canal pulls you. Eat something warm and easy. Sleep before the sky has finished turning.',
      body: 'This day is not for plans. It is for letting the travel-tiredness leave your body so tomorrow can do what tomorrow is supposed to.',
      meta: { sunset: '22:02', temp: '19° / 11°', mode: 'Drift', worth: 'a soft start' },
    },
    schedule: [
      { time: '14:00', title: 'Arrive · check in.',    desc: 'Charge phone. Photograph the meter.' },
      { time: '15:30', title: 'Albert Heijn run.',      desc: 'Water, fruit, yogurt, a pack of stroopwafels for the room.' },
      { time: '16:30', title: 'Orientation loop.',      desc: 'Domplein → Oudegracht south → Twijnstraat → Lepelenburg.' },
      { time: '18:30', title: 'Easy first dinner.',     desc: 'Bitterballen, soup, a small beer if your eyelids still cooperate.' },
      { time: '21:00', title: 'Base.',                  desc: "Shower. Set tomorrow's clothes. Lights out by 22:30." },
    ],
  },

  {
    date: '2026-07-06',
    dayName: 'Monday',
    rite: {
      roman: 'II', name: 'Ventris', subtitle: 'Yielding Stomach',
      latinSubtitle: 'Rite the Second.', latinNote: 'A triple offering, performed with a friend.',
      dropLetter: 'T', isKey: true,
      lede: 'he anchor day. Pancakes-til-you-tap-out at noon. A canal-side walk to convince your body it was a good idea. A paper cone of kibbeling at the wharf. Two games of bowling that you will lose with grace. A walk home through a city that smells faintly of fryer oil and old water. The full triple rite is in section iii.',
      body: "If only one day of this trip survives the months ahead in memory, it will be this one. Don't crowd it with anything else.",
      meta: { sunset: '22:02', temp: '21° / 12°', mode: 'Eat · throw · sleep', worth: 'everything' },
    },
    schedule: [
      { time: '10:30', title: 'Meet the friend.',               desc: 'Coffee on a wharf. Catch up before sugar takes over.' },
      { time: '12:00', title: 'Pannenkoeken, all-you-can-eat.', desc: 'Two plates is a meal. Three is hubris.' },
      { time: '14:30', title: 'Walk · required by physics.',    desc: 'Down the canal toward the museum quarter you will not enter.' },
      { time: '16:30', title: 'Kibbeling cone.',                desc: 'Paper, lemon, garlic sauce. Eat standing. Lean over the canal.' },
      { time: '19:30', title: 'Bowling, two games.',            desc: 'Loser pays the next round of fries.' },
      { time: '22:30', title: 'Goodbyes.',                      desc: 'You will smell like fryer grease and like it.' },
    ],
  },

  {
    date: '2026-07-07',
    dayName: 'Tuesday',
    rite: {
      roman: 'III', name: 'Exitus', subtitle: 'The Train Out',
      latinSubtitle: 'Rite the Third.', latinNote: 'A small leaving, a guaranteed return.',
      dropLetter: 'L',
      lede: 'eave Utrecht for the day to remember why you came to Utrecht. The Dutch rail network is so dense that any decent town is under an hour from the platform — pick a line from section iv. Aim to be back in your bed by midnight at the latest. The point is contrast, not distance.',
      body: 'Window seat, podcast off, look at the polders go by. Nothing on this train requires you. Whatever is waiting at home can wait an hour longer.',
      meta: { sunset: '22:01', temp: '22° / 13°', mode: 'Look · taste · return', worth: 'a small joy' },
    },
    schedule: [
      { time: '09:00', title: 'Breakfast at base.',        desc: "Yesterday's groceries. Tidy the room — future you wants it." },
      { time: '09:45', title: 'Walk to UT Centraal.',      desc: 'OV-chipkaart or contactless. NS trains.' },
      { time: '10:15', title: 'Train out.',                desc: 'Window seat. Polders. Wind turbines.' },
      { time: '11:00', title: 'Arrive · coffee · wander.', desc: 'Slow.' },
      { time: '13:00', title: 'Sit-down regional lunch.',  desc: 'Whatever the place is famous for.' },
      { time: '17:00', title: 'Train back.',               desc: 'Quiet evening near the apartment. Bread, cheese, a book.' },
    ],
  },

  {
    date: '2026-07-08',
    dayName: 'Wednesday',
    rite: {
      roman: 'IV', name: 'Otium', subtitle: 'Slow Return',
      latinSubtitle: 'Rite the Fourth.', latinNote: 'In which the city is permitted to do nothing to you.',
      dropLetter: 'C',
      lede: 'limb the Dom Tower while your legs still respect you. Wander Twijnstraat and Schoutenstraat for small shops, small bookshops, small cheese. Lie down in a park for an hour. End at a wharf-level table with the canal turning gold-then-navy. The day asks nothing of you.',
      body: 'The Dom Tower has 465 steps, cut by careful hands a long time ago. The view at the top is the same view they wanted you to have. Climb slowly. Take it.',
      meta: { sunset: '22:00', temp: '23° / 14°', mode: 'Look · sit · sit · sit', worth: 'the climb' },
    },
    schedule: [
      { time: '09:30', title: 'Dom Tower · 465 steps.',  desc: 'Book the slot the day before.' },
      { time: '11:30', title: 'Coffee & pastry.',         desc: 'A side-street café, not a chain.' },
      { time: '12:30', title: 'Shop loop.',               desc: 'Twijnstraat → Vismarkt → Schoutenstraat. One small thing.' },
      { time: '15:00', title: 'Park hour.',               desc: 'Wilhelminapark or Griftpark. Lie down. Read. Nap.' },
      { time: '19:00', title: 'Wharf-level dinner.',      desc: 'Slow plates. Canal gold to navy.' },
      { time: '22:00', title: 'Pack.',                    desc: "Tired-tomorrow-you absolutely exists. Don't argue." },
    ],
  },

  {
    date: '2026-07-09',
    dayName: 'Thursday',
    rite: {
      roman: 'V', name: 'Finis', subtitle: 'The Going Home',
      latinSubtitle: 'Rite the Fifth.', latinNote: 'A small ending. They are all small endings.',
      dropLetter: 'D', isFinal: true,
      lede: "on't add anything to today. Allow an unreasonable buffer at the station. Buy one stroopwafel for the train. Look out the window the whole way. You came here without a strong reason and you are leaving with a few small ones — that's a fair trade for ninety-six hours.",
      body: 'The canal will keep running. The Dom Tower will keep standing. The kibbeling stand will keep frying. You will keep the memory of all three. Take it home gently.',
      meta: { sunset: '21:59', temp: '22° / 14°', mode: 'Go quietly', worth: 'a soft landing' },
    },
    schedule: [
      { time: '08:30', title: 'Last breakfast.',  desc: 'Whatever is left, with the window open.' },
      { time: '10:00', title: 'Check out.',       desc: "Photograph the meter readings if it's a flat." },
      { time: '10:30', title: 'One last walk.',   desc: 'Thirty minutes, no phone, just the canal.' },
      { time: '11:30', title: 'UT Centraal.',     desc: "Snack. Board. Leave. Don't look back." },
    ],
  },
]

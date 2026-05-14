/**
 * Trip meta & note data — edit this file to update trip details,
 * dates, hero text, or the triple-rite note block.
 */

export interface TripMetaData {
  id:   string
  meta: {
    title:        string
    destination:  string
    romanYear:    string
    travelerMode: string
    heroSubtext:  string
  }
  dateRange: {
    arrival:    string   // YYYY-MM-DD
    departure:  string   // YYYY-MM-DD
  }
  tripleNote: {
    quoteStart:    string
    quoteEmphasis: string
    quoteEnd:      string
    details: Array<{ key: string; value: string }>
  }
}

export const TRIP_META: TripMetaData = {
  id: 'utrecht-july-2026',

  meta: {
    title:        'Almanac for four quiet days, slowly, in Utrecht.',
    destination:  'Utrecht, NL',
    romanYear:    'MMXXVI',
    travelerMode: 'walk & rail',
    heroSubtext:
      "Nothing is required of you for ninety-six hours. The canals run quietly past whoever's looking. " +
      'The Dom Tower has stood for six centuries and is in no hurry to do anything else. You are here to ' +
      'eat plates of thin pancakes, throw heavy balls down a wooden floor, and watch the sun set at ten ' +
      'at night. Anything more ambitious than that is just stress wearing a holiday costume.',
  },

  dateRange: {
    arrival:   '2026-07-05',
    departure: '2026-07-09',
  },

  tripleNote: {
    quoteStart:    'The good days are ',
    quoteEmphasis: 'simple food',
    quoteEnd:      ' with someone you like.',
    details: [
      { key: 'All-in budget',  value: '€55–70 per person. Card terminals are everywhere — cash optional.' },
      { key: 'Pay it forward', value: 'Cover one of the three. Your friend chose the day; you pay the round that surprises him.' },
      { key: 'Rain plan',      value: 'Skip the walk between i and ii. Move to a café. Play a card game. The day still holds.' },
      { key: 'Photograph',     value: 'Almost nothing. One shot of the kibbeling cone, if you must. The day is not for the grid.' },
    ],
  },
}

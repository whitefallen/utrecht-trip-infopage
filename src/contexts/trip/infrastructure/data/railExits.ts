/**
 * Rail exits data — edit this file to add, remove, or update day-trip options.
 * Each entry describes one destination reachable by train from Utrecht Centraal.
 */

export interface RailExitData {
  code:       string   // single letter displayed as the exit label
  cityPrefix: string
  citySuffix: string
  travelTime: string
  fare:       string
  why:        string   // one-sentence case for visiting
}

export const RAIL_EXITS: RailExitData[] = [
  {
    code: 'A', cityPrefix: 'Amers',  citySuffix: 'foort',
    travelTime: '15 min', fare: '€8',
    why: 'A miniature medieval centre. The Koppelpoort watergate looks like a storybook drew it. Walkable in two hours; quiet.',
  },
  {
    code: 'B', cityPrefix: 'Gouda ', citySuffix: '(the cheese)',
    travelTime: '50 min', fare: '€11',
    why: 'Thursday cheese market, syrup-waffle origin town, fifteenth-century town hall. Eat one warm stroopwafel at the source.',
  },
  {
    code: 'C', cityPrefix: 'Den ',   citySuffix: 'Bosch',
    travelTime: '60 min', fare: '€13',
    why: 'Bossche bol cream pastries, a Gothic cathedral that humbles you, southern accents, a market square locals defend.',
  },
  {
    code: 'D', cityPrefix: 'Rotter', citySuffix: 'dam',
    travelTime: '40 min', fare: '€12',
    why: 'Architectural opposite of Utrecht. Cube houses, Markthal, a skyline that does not apologise. Big-city day, home by night.',
  },
  {
    code: 'E', cityPrefix: 'The ',   citySuffix: 'Hague',
    travelTime: '35 min', fare: '€13',
    why: 'Binnenhof courtyard, Plein cafés, a short tram to Scheveningen for sea-air without setting foot on a vessel.',
  },
  {
    code: 'F', cityPrefix: 'Lei',    citySuffix: 'den',
    travelTime: '30 min', fare: '€11',
    why: 'A canal town that feels like Amsterdam if Amsterdam had calmed down. Bookshops, wall-poems, long café terraces.',
  },
]

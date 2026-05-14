import { NavSection } from '../domain/NavSection'

/**
 * Static content for the shell — marquee text and nav sections.
 * Lives in infrastructure because it's configuration, not domain logic.
 */
export const NAV_SECTIONS: NavSection[] = [
  NavSection.of('wheel',     'Wheel'),
  NavSection.of('rites',     'Rites'),
  NavSection.of('triple',    'Triple'),
  NavSection.of('exits',     'Exits'),
  NavSection.of('evenings',  'Vigils'),
  NavSection.of('forbidden', 'Forbidden'),
  NavSection.of('inventory', 'Inventory'),
]

export const TOP_MARQUEE_ITEMS = [
  'ALMANAC FOR FOUR QUIET DAYS',
  'UTRECHT · MMXXVI',
  '05.VII — 09.VII',
  'PAX I · SOLO · SOBER · SLOW',
  'THE TOWER IS PATIENT · SO ARE WE',
  'BED BY XXIII:00',
]

export const BOTTOM_MARQUEE_ITEMS = [
  'NO MUSEUMS · NO CRUISES · NO 6AM ALARMS',
  'EAT THE PANCAKE WITH BOTH HANDS',
  'THE STOMACH IS SACRED',
  'THE BOWLING ALLEY IS A TEMPLE',
  'THE CANAL RUNS · WE WALK BESIDE IT',
]

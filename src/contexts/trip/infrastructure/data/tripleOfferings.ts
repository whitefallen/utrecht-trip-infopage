/**
 * Triple offerings data — edit this file to update the three Rite II activities.
 * glyph must be one of: 'pancakes' | 'kibbeling' | 'bowling'
 */

export interface OfferingSpecData {
  label: string
  value: string
}

export interface TripleOfferingData {
  glyph:         string   // 'pancakes' | 'kibbeling' | 'bowling'
  number:        string
  offeringLabel: string
  title:         string
  titleEmphasis: string
  latin:         string
  description:   string
  specs:         OfferingSpecData[]
  isBlood?:      boolean
}

export const TRIPLE_OFFERINGS: TripleOfferingData[] = [
  {
    glyph: 'pancakes', number: 'i', offeringLabel: 'offering i · lunch',
    title: 'The Plate of', titleEmphasis: 'Plates.',
    latin: '— pannenkoeken, all-you-can-eat —',
    description:
      'Thin, plate-wide, savoury before sweet. Cheese & bacon, then apple & cinnamon. ' +
      'One of each rather than two of the same; the deal is variety, not volume.',
    specs: [
      { label: 'Hour',   value: '12:00' },
      { label: 'Cost',   value: '€20' },
      { label: 'Tactic', value: 'One each' },
      { label: 'Risk',   value: 'Stupor' },
    ],
  },
  {
    glyph: 'kibbeling', number: 'ii', offeringLabel: 'offering ii · snack',
    title: 'The Cone of', titleEmphasis: 'Cod.',
    latin: '— kibbeling, at the wharf —',
    description:
      'Battered cod, fried hot, eaten standing from a paper cone. Order knoflooksaus on the side. ' +
      'The default white sauce is bland. Lean over the canal when you bite. Splatter is part of it.',
    isBlood: true,
    specs: [
      { label: 'Hour',   value: '16:30' },
      { label: 'Cost',   value: '€7' },
      { label: 'Sauce',  value: 'Garlic' },
      { label: 'Stance', value: 'Stand' },
    ],
  },
  {
    glyph: 'bowling', number: 'iii', offeringLabel: 'offering iii · evening',
    title: 'Two Games of', titleEmphasis: 'Wood.',
    latin: '— bowling, until the legs go —',
    description:
      "Indoor, cheap, weather-immune. Two games is plenty; fries and a soft drink between. " +
      "House shoes are mandatory — bring socks you wouldn't mind throwing out. Monday is usually walk-in.",
    specs: [
      { label: 'Hour', value: '19:30' },
      { label: 'Cost', value: '€25' },
      { label: 'Pace', value: '2 max' },
      { label: 'Socks', value: 'Bring' },
    ],
  },
]

/**
 * Vigils data — edit this file to add or update optional evening activities.
 * Each vigil is a numbered recommendation for slow, unhurried time.
 */

export interface VigilData {
  number:        string
  titleMain:     string
  titleEmphasis: string
  description:   string
}

export const VIGILS: VigilData[] = [
  {
    number: 'i', titleMain: 'Wharf-level', titleEmphasis: 'dinner',
    description:
      'The Oudegracht has a lower level — old loading wharves now hosting water-level terraces. ' +
      'Book 19:00. Watch the canal turn green to gold to navy.',
  },
  {
    number: 'ii', titleMain: 'Trajectum', titleEmphasis: 'lumen',
    description:
      'Free self-guided light-art walk after dark. Fourteen installations tucked in alleys and on church walls. ' +
      'About ninety minutes; map at the tourist office.',
  },
  {
    number: 'iii', titleMain: 'One', titleEmphasis: 'quiet pint',
    description:
      'Café Olivier (a converted church) or Café Belgica. A Tripel, a corner, a slow read. ' +
      'Leave by 22:30 and you have still won the day.',
  },
  {
    number: 'iv', titleMain: 'Botanical', titleEmphasis: 'gardens',
    description:
      "Utrecht University's gardens close around 17:00. Go late afternoon — greenhouses, a butterfly walk, " +
      'almost no tourists. Then dinner.',
  },
  {
    number: 'v', titleMain: 'Bookshop', titleEmphasis: 'browse',
    description:
      'Steven Sterk on Oudegracht is multi-storey and open until 21:00 weekdays. ' +
      'Buy nothing. Look at everything. Leave smarter.',
  },
  {
    number: 'vi', titleMain: 'Park bench', titleEmphasis: 'sunset',
    description:
      'Sunset is around 22:00 in July. Lepelenburg or Wilhelminapark. ' +
      'Take a snack. Leave the headphones in your bag.',
  },
]

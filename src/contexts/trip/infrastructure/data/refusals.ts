/**
 * Refusals data — edit this file to update the list of things this trip explicitly does not do.
 * Each entry names a temptation and gives the reason it is declined.
 */

export interface RefusalData {
  number:  string
  subject: string
  reason:  string
}

export const REFUSALS: RefusalData[] = [
  {
    number: 'i', subject: 'Canal cruise',
    reason:
      "Boats and your stomach disagree, on the record. The wharf dinner gets the view without the rocking. " +
      "Do not let anyone talk you into \"but it's a small boat.\"",
  },
  {
    number: 'ii', subject: 'Pannenkoekenboot',
    reason:
      'Yes, a literal pancake-cruise boat exists. Yes, it sounds delightful. See above. ' +
      'The land version on Monday is the better play.',
  },
  {
    number: 'iii', subject: 'Museums',
    reason:
      'Centraal, Spoorweg, Rietveld-Schröder — all genuinely good. None on this trip. ' +
      'Walking and eating earn the holiday better.',
  },
  {
    number: 'iv', subject: 'Club nights',
    reason:
      "TivoliVredenburg is a landmark; daytime tour is fine. The 3am circuit is not this trip's shape. " +
      'Bed by eleven is the brief.',
  },
  {
    number: 'v', subject: 'A second day-trip',
    reason:
      'One is plenty. Two means you rented an apartment in Utrecht to barely sleep in it. ' +
      'Stay home Wednesday and earn the city back.',
  },
  {
    number: 'vi', subject: 'A 6am alarm',
    reason:
      "You are 30, not 19, not 60. The decade where you sleep eight hours and don't apologise for it. " +
      'The tower will still be there at 09:30.',
  },
]

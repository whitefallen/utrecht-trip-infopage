/**
 * Practicals data — edit this file to update the quick-reference info block.
 * Displayed in the inventory section alongside the packing list.
 */

export interface PracticalData {
  key:   string
  value: string
}

export const PRACTICALS: PracticalData[] = [
  {
    key:   'Currency',
    value: 'Euro (€). Cards everywhere. Some viskraam stalls are oddly card-only.',
  },
  {
    key:   'Transport',
    value: 'Walk mostly. Trams & buses use OV-chipkaart or contactless. Trains run by NS.',
  },
  {
    key:   'From airport',
    value: 'Schiphol → Utrecht Centraal, direct intercity, ~35 min, every 15.',
  },
  {
    key:   'Weather (Jul)',
    value: '22° / 13°. Long days. Sunset 22:00. Pack a sweater and a rain shell anyway — this is the Netherlands.',
  },
  {
    key:   'Bikes',
    value: "Don't, if nervous. Locals are fast and unforgiving. Walk. Rent only Wednesday if the mood is right.",
  },
  {
    key:   'Tipping',
    value: 'Round up · ~5–10%. Service is included. Cash on the table.',
  },
  {
    key:   'Language',
    value: 'English fine. A "dank je wel" buys goodwill. "Lekker" deploys after the kibbeling.',
  },
  {
    key:   'SIM/data',
    value: 'EU roaming. Your home plan works without extra cost.',
  },
  {
    key:   'Emergency',
    value: '112 for all services · Apotheek for pharmacy · Huisartsenpost for after-hours doctor.',
  },
]

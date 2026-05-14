/**
 * Packing items data — edit this file to add, remove, or rename items on the list.
 * index is the roman numeral label shown in the UI.
 */

export interface PackingItemData {
  id:    string
  index: string
  label: string
}

export const PACKING_ITEMS: PackingItemData[] = [
  { id: 'p0',  index: 'i',    label: 'Passport / ID' },
  { id: 'p1',  index: 'ii',   label: 'Rain shell, windproof' },
  { id: 'p2',  index: 'iii',  label: 'One warm layer' },
  { id: 'p3',  index: 'iv',   label: 'Walking shoes, broken in' },
  { id: 'p4',  index: 'v',    label: 'Socks for bowling night' },
  { id: 'p5',  index: 'vi',   label: 'Sunglasses' },
  { id: 'p6',  index: 'vii',  label: 'Charger + EU plug adapter' },
  { id: 'p7',  index: 'viii', label: 'Power bank' },
  { id: 'p8',  index: 'ix',   label: 'Card + a little cash' },
  { id: 'p9',  index: 'x',    label: 'Reusable water bottle' },
  { id: 'p10', index: 'xi',   label: 'Book — the trip-feel one' },
  { id: 'p11', index: 'xii',  label: 'Ginger sweets · anti-seasick, just in case' },
  { id: 'p12', index: 'xiii', label: 'Tiny first-aid + paracetamol' },
  { id: 'p13', index: 'xiv',  label: "Friend's phone number, on paper" },
]

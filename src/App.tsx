/**
 * App — composition root.
 *
 * Assembles bounded contexts into a page. No logic lives here;
 * it only wires together components from their respective contexts.
 *
 * Cross-context coordination (e.g. Hero using trip data, Inventory
 * combining trip reference + packing manifest) happens at this layer.
 */

// Shell context
import { Marquee }     from './contexts/shell/presentation/components/Marquee'
import { Nav }         from './contexts/shell/presentation/components/Nav'
import { Hero }        from './contexts/shell/presentation/components/Hero'
import { Benediction } from './contexts/shell/presentation/components/Benediction'

// Trip context
import { WheelSection }      from './contexts/trip/presentation/components/WheelSection'
import { RitesList }         from './contexts/trip/presentation/components/RitesList'
import { TripleRiteSection } from './contexts/trip/presentation/components/TripleRiteSection'
import { ExitsList }         from './contexts/trip/presentation/components/ExitsList'
import { VigilsGrid }        from './contexts/trip/presentation/components/VigilsGrid'
import { ForbiddenGrid }     from './contexts/trip/presentation/components/ForbiddenGrid'
import { InventoryReference } from './contexts/trip/presentation/components/InventoryReference'

// Packing context
import { PackingManifest } from './contexts/packing/presentation/components/PackingManifest'

// Shell content
import {
  TOP_MARQUEE_ITEMS,
  BOTTOM_MARQUEE_ITEMS,
} from './contexts/shell/infrastructure/shellContent'

// Trip CSS (all trip domain presentation styles)
import './contexts/trip/presentation/components/trip.css'

export default function App() {
  return (
    <>
      <Marquee items={TOP_MARQUEE_ITEMS} />
      <Nav />
      <Hero />
      <Marquee items={BOTTOM_MARQUEE_ITEMS} variant="fast" />
      <WheelSection />
      <RitesList />
      <TripleRiteSection />
      <ExitsList />
      <VigilsGrid />
      <ForbiddenGrid />

      {/* Inventory section — composed from two bounded contexts */}
      <section id="inventory" className="standard">
        <div className="wrap">
          <div className="sec-head">
            <div className="tag">vii · the inventory</div>
            <h2>Boring, <em>important.</em></h2>
            <div className="seal">Read once · then forget</div>
          </div>
          <div className="inventory">
            <InventoryReference />
            <PackingManifest />
          </div>
        </div>
      </section>

      <Benediction />
    </>
  )
}

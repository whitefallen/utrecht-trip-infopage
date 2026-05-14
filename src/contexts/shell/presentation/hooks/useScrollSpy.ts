import { useState, useEffect } from 'react'
import { ScrollObserver }      from '../../infrastructure/ScrollObserver'
import type { NavSection }     from '../../domain/NavSection'

/**
 * Presentation hook — bridges ScrollObserver (infrastructure) into React state.
 * Depends on the domain's NavSection value objects, not raw strings.
 */
export function useScrollSpy(sections: NavSection[], offset = 110): string {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '')

  useEffect(() => {
    const observer = new ScrollObserver()
    const ids      = sections.map(s => s.id)
    return observer.observe(ids, offset, setActiveId)
  }, [sections, offset])

  return activeId
}

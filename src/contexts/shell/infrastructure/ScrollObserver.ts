/**
 * Infrastructure service — observes scroll position and calls back
 * with the id of the section currently in view.
 *
 * Returns a cleanup function suitable for use in useEffect.
 * Has no knowledge of React; purely a DOM utility.
 */
export class ScrollObserver {
  observe(
    sectionIds: string[],
    offset:     number,
    onChange:   (activeId: string) => void,
  ): () => void {
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const handler = () => {
      const y = window.scrollY + offset
      let active = sections[0]?.id ?? ''
      for (const section of sections) {
        if (section.offsetTop <= y) active = section.id
      }
      onChange(active)
    }

    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }
}

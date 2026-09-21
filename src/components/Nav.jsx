import { useEffect, useState } from 'react'
import { useScrollSpy } from '../hooks'

/**
 * Sticky top navigation.
 * @param {{name: string, sections: {id: string, label: string}[]}} props
 */
export default function Nav({ name, sections }) {
  const ids = sections.map((section) => section.id)
  const activeId = useScrollSpy(ids)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${isScrolled ? 'is-scrolled' : ''}`}>
      <a className="nav__name" href="#top">
        {name}
      </a>

      <button
        className="nav__toggle"
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      <nav className={`nav__links ${isOpen ? 'is-open' : ''}`} aria-label="Sections">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={activeId === section.id ? 'is-active' : ''}
            aria-current={activeId === section.id ? 'true' : undefined}
            onClick={() => setIsOpen(false)}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

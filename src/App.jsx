import { useCallback } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useMediaQuery } from './hooks'
import {
  profile,
  contact,
  projects,
  skillGroups,
  approach,
  credentials,
  sections,
} from './data/portfolio'

export default function App() {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  const scrollToWork = useCallback(() => {
    document.getElementById('work')?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }, [prefersReducedMotion])

  return (
    <>
      <a className="skip" href="#work">
        Skip to the work
      </a>

      <Nav name={`${profile.firstName} ${profile.lastName}`} sections={sections} />

      <main>
        <Hero profile={profile} onViewWork={scrollToWork} />
        <Work projects={projects} />
        <About profile={profile} approach={approach} />
        <Skills groups={skillGroups} credentials={credentials} />
        <Contact contact={contact} />
      </main>

      <Footer
        name={`${profile.firstName} ${profile.lastName}`}
        location={profile.location}
      />
    </>
  )
}

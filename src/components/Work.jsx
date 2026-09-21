import { useMemo } from 'react'
import ProjectCase from './ProjectCase'
import Lightbox from './Lightbox'
import SectionHeading from './SectionHeading'
import { useLightbox } from '../hooks'

export default function Work({ projects }) {
  const allMedia = useMemo(
    () => projects.flatMap((project) => project.media),
    [projects]
  )

  const offsets = useMemo(() => {
    let running = 0
    return projects.map((project) => {
      const start = running
      running += project.media.length
      return start
    })
  }, [projects])

  const lightbox = useLightbox(allMedia)

  return (
    <section className="section work" id="work">
      <SectionHeading
        title="Selected work"
        lede="Three projects — a wellness brand, a salon rebrand, and a set of posters."
      />

      {projects.map((project, index) => (
        <ProjectCase
          key={project.id}
          project={project}
          mediaOffset={offsets[index]}
          onOpenImage={lightbox.open}
        />
      ))}

      <Lightbox
        item={lightbox.item}
        isOpen={lightbox.isOpen}
        onClose={lightbox.close}
        onNext={lightbox.next}
        onPrevious={lightbox.previous}
        position={lightbox.index === null ? 0 : lightbox.index + 1}
        total={allMedia.length}
      />
    </section>
  )
}

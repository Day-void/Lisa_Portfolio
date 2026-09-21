import BeforeAfter from './BeforeAfter'
import Gallery from './Gallery'
import Tag from './Tag'

/**
 * One case study: sticky description column beside the work itself.
 * @param {{project: object, onOpenImage: (index: number) => void, mediaOffset: number}} props
 */
export default function ProjectCase({ project, onOpenImage, mediaOffset }) {
  return (
    <article className={`case case--${project.accent}`} id={project.id}>
      <div className="case__meta">
        <p className="case__number">{project.number}</p>
        <h3 className="case__name">{project.name}</h3>
        <p className="case__kind">{project.kind}</p>
        <p className="case__lede">{project.lede}</p>

        {project.body.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="case__body">
            {paragraph}
          </p>
        ))}

        <p className="case__role">{project.role}</p>

        <div className="case__tags">
          {project.tags.map((tag) => (
            <Tag key={tag} tone={project.accent}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>

      <div className="case__work">
        {project.beforeAfter ? <BeforeAfter {...project.beforeAfter} /> : null}
        <Gallery items={project.media} onOpen={onOpenImage} offset={mediaOffset} />
      </div>
    </article>
  )
}

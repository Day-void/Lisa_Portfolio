import Tag from './Tag'

/**
 * One labelled cluster of skills.
 * @param {{title: string, items: string[], tone?: string}} props
 */
export default function SkillGroup({ title, items, tone = 'ink' }) {
  return (
    <div className="skill-group">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <Tag tone={tone}>{item}</Tag>
          </li>
        ))}
      </ul>
    </div>
  )
}

import Tag from './Tag'

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

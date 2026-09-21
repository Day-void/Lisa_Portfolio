import SectionHeading from './SectionHeading'
import SkillGroup from './SkillGroup'

export default function Skills({ groups, credentials }) {
  return (
    <section className="section skills" id="skills">
      <SectionHeading title="What I work with" />

      <div className="skills__grid">
        {groups.map((group, index) => (
          <SkillGroup
            key={group.id}
            title={group.title}
            items={group.items}
            tone={index === 0 ? 'plum' : 'brass'}
          />
        ))}

        <div className="skill-group">
          <h3>Study</h3>
          <ul className="credentials">
            {credentials.map((credential) => (
              <li key={credential.title}>
                <span className="credentials__title">{credential.title}</span>
                <span className="credentials__meta">
                  {credential.issuer}
                  <em
                    className={
                      credential.status === 'Completed' ? 'is-done' : 'is-pending'
                    }
                  >
                    {credential.status}
                  </em>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

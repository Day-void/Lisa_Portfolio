import SectionHeading from './SectionHeading'

/**
 * Short introduction, plus the four-step working method.
 * @param {{profile: object, approach: {step: string, detail: string}[]}} props
 */
export default function About({ profile, approach }) {
  return (
    <section className="section about" id="about">
      <SectionHeading
        title="Hello"
        lede="Designer in Harare, working across identity, print and product."
      />

      <div className="about__grid">
        <div className="about__copy">
          {profile.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <ol className="approach">
          {approach.map((item, index) => (
            <li key={item.step}>
              <span className="approach__index">{index + 1}</span>
              <h3>{item.step}</h3>
              <p>{item.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

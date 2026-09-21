/**
 * Closing section with the ways to reach Lisa.
 * @param {{contact: object}} props
 */
export default function Contact({ contact }) {
  const links = [
    { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    {
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s/g, '')}`,
    },
    { label: 'LinkedIn', value: contact.linkedin, href: contact.linkedinUrl },
  ]

  return (
    <section className="section contact" id="contact">
      <div className="contact__copy">
        <h2>
          Let’s work
          <br />
          together
        </h2>
        <p className="contact__note">{contact.note}</p>

        <ul className="contact__list">
          {links.map((link) => (
            <li key={link.label}>
              <span>{link.label}</span>
              <a href={link.href}>{link.value}</a>
            </li>
          ))}
        </ul>
      </div>

      <figure className="contact__art">
        <img src={contact.portrait} alt={contact.portraitAlt} loading="lazy" />
      </figure>
    </section>
  )
}

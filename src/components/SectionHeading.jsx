/**
 * Shared section title with an optional short standfirst.
 * @param {{title: string, lede?: string, id?: string}} props
 */
export default function SectionHeading({ title, lede, id }) {
  return (
    <div className="heading">
      <h2 id={id}>{title}</h2>
      {lede ? <p className="heading__lede">{lede}</p> : null}
    </div>
  )
}


export default function SectionHeading({ title, lede, id }) {
  return (
    <div className="heading">
      <h2 id={id}>{title}</h2>
      {lede ? <p className="heading__lede">{lede}</p> : null}
    </div>
  )
}

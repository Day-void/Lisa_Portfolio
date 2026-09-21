/**
 * A single piece of work. Clicking opens it in the lightbox.
 * @param {{item: {src: string, alt: string, caption?: string, span?: string}, onOpen: () => void}} props
 */
export default function Figure({ item, onOpen }) {
  return (
    <figure className={`figure figure--${item.span ?? 'half'}`}>
      <button type="button" className="figure__button" onClick={onOpen}>
        <img src={item.src} alt={item.alt} loading="lazy" />
        <span className="figure__zoom">View</span>
      </button>
      {item.caption ? <figcaption>{item.caption}</figcaption> : null}
    </figure>
  )
}

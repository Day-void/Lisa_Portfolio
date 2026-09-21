import Figure from './Figure'

/**
 * Grid of project images.
 * @param {{items: object[], onOpen: (index: number) => void, offset?: number}} props
 */
export default function Gallery({ items, onOpen, offset = 0 }) {
  return (
    <div className="gallery">
      {items.map((item, index) => (
        <Figure key={item.src} item={item} onOpen={() => onOpen(offset + index)} />
      ))}
    </div>
  )
}

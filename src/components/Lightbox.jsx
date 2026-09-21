
export default function Lightbox({
  item,
  isOpen,
  position,
  total,
  onClose,
  onNext,
  onPrevious,
}) {
  if (!isOpen || !item) return null

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.alt}>
      <button className="lightbox__scrim" type="button" onClick={onClose} aria-label="Close" />

      <div className="lightbox__panel">
        <img src={item.src} alt={item.alt} />

        <div className="lightbox__bar">
          <p>
            {item.caption ?? item.alt}
            <span>
              {position} / {total}
            </span>
          </p>

          <div className="lightbox__controls">
            <button type="button" onClick={onPrevious} aria-label="Previous image">
              &#8592;
            </button>
            <button type="button" onClick={onNext} aria-label="Next image">
              &#8594;
            </button>
            <button type="button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

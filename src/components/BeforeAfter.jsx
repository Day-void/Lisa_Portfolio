import { useBeforeAfter } from '../hooks'

export default function BeforeAfter({
  before,
  after,
  beforeAlt,
  afterAlt,
  caption,
  startAt = 52,
}) {
  const { containerRef, position, setPosition, handlers, onKeyDown, isDragging } =
    useBeforeAfter(startAt)

  return (
    <figure className="compare">
      <div
        className={`compare__frame ${isDragging ? 'is-dragging' : ''}`}
        ref={containerRef}
        {...handlers}
      >
        <img className="compare__image" src={after} alt={afterAlt} />

        <div
          className="compare__clip"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img className="compare__image" src={before} alt={beforeAlt} />
        </div>

        <span className="compare__label compare__label--before">Before</span>
        <span className="compare__label compare__label--after">After</span>

        <div className="compare__handle" style={{ left: `${position}%` }} aria-hidden="true">
          <span />
        </div>

        <input
          className="compare__input"
          type="range"
          min="0"
          max="100"
          step="1"
          value={Math.round(position)}
          onChange={(event) => setPosition(Number(event.target.value))}
          onKeyDown={onKeyDown}
          aria-label="Reveal more of the original sign"
        />
      </div>

      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}

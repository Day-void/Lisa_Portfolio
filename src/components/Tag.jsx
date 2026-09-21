
export default function Tag({ children, tone = 'ink' }) {
  return <span className={`tag tag--${tone}`}>{children}</span>
}

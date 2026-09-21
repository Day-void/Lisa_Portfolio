/**
 * Small pill used for skills and project tags.
 * @param {{children: React.ReactNode, tone?: 'plum'|'brass'|'ink'}} props
 */
export default function Tag({ children, tone = 'ink' }) {
  return <span className={`tag tag--${tone}`}>{children}</span>
}

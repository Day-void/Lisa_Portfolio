
export default function Footer({ name, location }) {
  return (
    <footer className="footer">
      <p>
        {name} — {location}
      </p>
      <p>Designed and built {new Date().getFullYear()}</p>
    </footer>
  )
}

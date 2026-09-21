
export default function Hero({ profile, onViewWork }) {
  return (
    <section className="hero" id="top">
      <div className="hero__type">
        <p className="hero__role">
          {profile.role} — {profile.location}
        </p>
        <h1 className="hero__name">
          <span>{profile.firstName}</span>
          <span className="hero__last">{profile.lastName}</span>
        </h1>
        <p className="hero__tagline">{profile.tagline}</p>
        <button className="button" type="button" onClick={onViewWork}>
          See the work
        </button>
      </div>

      <figure className="hero__art">
        <img src={profile.portrait} alt={profile.portraitAlt} width="736" height="736" />
      </figure>
    </section>
  )
}

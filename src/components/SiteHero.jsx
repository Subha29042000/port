export default function SiteHero() {
  return (
    <section id="home" className="section hero-grid" style={{ paddingTop: "2rem" }}>
      <div className="reveal">
        <p style={{ color: "var(--muted)" }}>MERN Stack Developer • Chennai</p>
        <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 4.4rem)", lineHeight: 1.05, marginTop: "0.4rem" }}>
          Building Scalable
          <br />
          <span style={{ background: "var(--rgb-gradient)", WebkitBackgroundClip: "text", color: "transparent" }}>Web Experiences</span>
        </h1>
        <p style={{ color: "var(--muted)", marginTop: "1rem", maxWidth: 640 }}>
          2 years of experience in React, Node, Express, and MongoDB.
          Built CRM, HRMS, and e-commerce style apps.
        </p>
        <div style={{ marginTop: "1.4rem", display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
          <a href="#projects" className="glass" style={{ padding: "0.65rem 1rem", textDecoration: "none", color: "white" }}>View Projects</a>
          <a href="#contact" className="glass" style={{ padding: "0.65rem 1rem", textDecoration: "none", color: "white" }}>Contact Me</a>
        </div>
      </div>
      <div className="glass reveal" style={{ padding: "1rem", justifySelf: "end", width: "100%", maxWidth: 320 }}>
        <img
          src="https://ui-avatars.com/api/?name=Subhashree+G&background=0D1117&color=7c3aed&size=512&bold=true"
          alt="Subhashree G profile"
          style={{ width: "100%", borderRadius: 12 }}
        />
      </div>
    </section>
  );
}

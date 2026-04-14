const links = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Contact", "contact"],
];

export default function SiteNavbar() {
  return (
    <header className="section" style={{ paddingTop: "1.2rem", paddingBottom: "1.2rem", position: "sticky", top: 0, zIndex: 40 }}>
      <nav className="glass" style={{ padding: "0.8rem 1rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        <a href="#home" style={{ fontWeight: 800, letterSpacing: "0.06em", textDecoration: "none", color: "white" }}>
          SUBHASHREE G
        </a>
        <div style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.9rem" }}>
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default function SiteFooter() {
  return (
    <footer className="section" style={{ paddingTop: "1rem", paddingBottom: "2.5rem" }}>
      <div className="glass" style={{ padding: "1rem", textAlign: "center", color: "var(--muted)" }}>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} Subhashree G • MERN Stack Developer</p>
      </div>
    </footer>
  );
}

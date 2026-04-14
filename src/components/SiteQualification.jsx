const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    college: "Dr. G.R. Damodaran College of Science, Bharathiar University",
    location: "Coimbatore, Tamil Nadu",
    year: "2024",
  },
  {
    degree: "Bachelor of Science in Information Technology (B.Sc IT)",
    college: "Vellalar College For Women, Bharathiar University",
    location: "Erode, Tamil Nadu",
    year: "2021",
  },
];

export default function SiteQualification() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education <span>Background</span></h2>
      <div style={{ display: "grid", gap: "1rem" }}>
        {education.map((item) => (
          <article key={item.degree} className="glass reveal" style={{ padding: "1rem" }}>
            <h3 style={{ fontSize: "1.03rem" }}>{item.degree}</h3>
            <p style={{ color: "var(--muted)", margin: "0.3rem 0" }}>{item.college}</p>
            <p style={{ color: "#b0f4e6", margin: 0, fontSize: "0.9rem" }}>{item.location} • {item.year}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

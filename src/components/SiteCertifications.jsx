const certifications = [
  "Master in UI/UX Design - Adoro Institute of Multimedia",
  "MERN Stack - Besant Technologies",
];

export default function SiteCertifications() {
  return (
    <section id="certifications" className="section">
      <h2 className="section-title">Certifications <span>& Learning</span></h2>
      <div style={{ display: "grid", gap: "0.8rem" }}>
        {certifications.map((cert) => (
          <div key={cert} className="glass reveal" style={{ padding: "1rem" }}>
            <p style={{ margin: 0 }}>{cert}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

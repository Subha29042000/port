const groups = [
  ["Frontend", "React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, Responsive Design"],
  ["Backend", "Node.js, Express.js, RESTful APIs, Python (basic)"],
  ["Database", "MongoDB, SQL (basic)"],
  ["AI & Tools", "GitHub Copilot, LLM APIs, Prompt Engineering, RAG Concepts"],
  ["DevOps & Extras", "Docker/Kubernetes awareness, Git, GitHub, VS Code, Postman"],
];

export default function SiteSkills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical <span>Skills</span></h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1rem" }}>
        {groups.map(([title, desc]) => (
          <article key={title} className="glass reveal" style={{ padding: "1rem" }}>
            <h3 style={{ fontSize: "1rem", marginBottom: "0.6rem" }}>{title}</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.6 }}>{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

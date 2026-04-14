const projects = [
  {
    title: "E-commerce Payment Transfer System (Sandbox)",
    desc: "Payment sandbox app with order, status tracking, and webhook-style updates.",
    stack: "MERN, Sandbox Payment APIs",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Zomato Website Clone",
    desc: "Food delivery app with restaurant listing, menu, auth, and ordering.",
    stack: "MongoDB, Express.js, React.js, Node.js",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "CRM Dashboard Application",
    desc: "CRM dashboard with KPI cards, tables, and API-based filters.",
    stack: "React.js, Node.js, REST APIs",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "HRMS Dashboard",
    desc: "HRMS dashboard with employee search, filters, and API integration.",
    stack: "React.js, REST APIs",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "APD India NGO Contribution Module",
    desc: "Donation module with contributor form, admin list, and API flow.",
    stack: "React.js, Tailwind CSS, REST APIs",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function SiteProjects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured <span>Projects</span></h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1rem" }}>
        {projects.map((project) => (
          <article key={project.title} className="glass reveal" style={{ overflow: "hidden" }}>
            <img src={project.image} alt={project.title} style={{ width: "100%", height: 160, objectFit: "cover" }} />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ fontSize: "1.03rem", marginBottom: "0.4rem" }}>{project.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>{project.desc}</p>
              <p style={{ marginTop: "0.8rem", color: "#78d7ff", fontSize: "0.82rem" }}>{project.stack}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

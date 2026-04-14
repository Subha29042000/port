const jobs = [
  {
    company: "RR IT Solutions",
    role: "Frontend Developer",
    location: "Chennai, Tamil Nadu",
    period: "Mar 2025 - Present",
    points: [
      "Built CRM modules with React and REST APIs.",
      "Created reusable components and improved performance.",
      "Designed responsive dashboards for sales and customer data.",
    ],
  },
  {
    company: "Cloute Technologies Pvt. Ltd.",
    role: "Associate Frontend Developer",
    location: "Bangalore, Karnataka",
    period: "Jan 2024 - Jul 2024",
    points: [
      "Developed responsive UI for HRMS and NGO platforms.",
      "Integrated API-driven dashboards with real-time filters.",
      "Improved Lighthouse score with UI and bundle optimization.",
    ],
  },
];

export default function SiteExperience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Work <span>Experience</span></h2>
      <div style={{ display: "grid", gap: "1rem" }}>
        {jobs.map((job) => (
          <article key={job.company} className="glass reveal" style={{ padding: "1rem 1.1rem" }}>
            <h3 style={{ fontSize: "1.1rem" }}>{job.role}</h3>
            <p style={{ margin: "0.25rem 0", color: "#bfa9ff" }}>{job.company} • {job.location}</p>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.9rem" }}>{job.period}</p>
            <ul style={{ marginTop: "0.8rem", color: "var(--muted)", lineHeight: 1.6 }}>
              {job.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

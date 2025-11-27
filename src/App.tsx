import "./tailwind.css";
import Card from "./components/Card";

export default function App() {
  const projects = [
    {
      id: "p1",
      title: "Personal Portfolio",
      description:
        "A fast, accessible portfolio built with React + Tailwind and Vite.",
      tags: ["React", "Tailwind", "Vite"],
      repo: "#",
      demo: "#",
    },
    {
      id: "p2",
      title: "Task Manager",
      description:
        "Full‑stack task manager with realtime updates and a focus on UX.",
      tags: ["Node", "React", "WebSocket"],
      repo: "#",
      demo: "#",
    },
    {
      id: "p3",
      title: "Design System",
      description:
        "Reusable UI components and tokens for consistent product design.",
      tags: ["Design", "React"],
      repo: "#",
      demo: "#",
    },
  ];

  const experience = [
    {
      id: "e1",
      role: "Frontend Engineer",
      company: "Acme Corp",
      period: "2022 — Present",
      summary:
        "Built reusable component library, improved performance and accessibility across multiple products.",
    },
    {
      id: "e2",
      role: "Frontend Developer",
      company: "Startup XYZ",
      period: "2019 — 2022",
      summary:
        "Led front‑end efforts for the customer dashboard, implemented design system and automated tests.",
    },
  ];

  const education = [
    {
      id: "ed1",
      institution: "University of Somewhere",
      degree: "B.Sc. Computer Science",
      period: "2015 — 2019",
      details: "Focus: Web development, HCI",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-stretch text-textColor theme-solarized">
      {/* Header */}
      <header className="sticky top-0 backdrop-blur-sm">
        <div className="site flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="text-lg font-semibold">Your Name</div>
          </div>

          <nav className="hidden lg:flex gap-6 text-sm">
            {["About", "Experience", "Education", "Projects", "Contact"].map(
              (link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="">
                  {link}
                </a>
              )
            )}
          </nav>

          <a href="/cv.pdf" className="px-3 py-1 rounded-md">
            Download CV
          </a>
        </div>
      </header>

      {/* Main content */}

      <div className="flex justify-center">
        <main className="px-6 py-12 text-center max-w-3xl">
          {/* Hero */}
          <section className="mb-12 mx-20">
            <div className="col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Hi — I'm Your Name
              </h1>
              <p className="text-primary">
                I build fast, accessible and delightful web applications using
                modern tools. I focus on front‑end engineering, design systems,
                and shipping production quality code.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {["React", "Tailwind", "TypeScript", "Vite", "Node"].map(
                  (t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-sm rounded-full border text-primary">
                      {t}
                    </span>
                  )
                )}
              </div>
              <div className="mt-6 flex justify-center gap-4 flex-wrap">
                <a
                  href="#projects"
                  className="bg-primary text-dark px-4 py-2 rounded-md font-medium shadow hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-primary/50">
                  View projects
                </a>
                <a
                  href="#contact"
                  className="text-sm px-4 py-2 rounded-md border border-white/10 text-textColor hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary/50">
                  Contact
                </a>
              </div>
            </div>
          </section>
          {/* About */}
          <section id="about" className="mt-12 w-full">
            <Card
              className="p-6 bg-white/3 rounded-lg border border-white/6"
              title="About me">
              <p>
                I'm a developer focused on performant front-ends and great UX. I
                collaborate with designers and backend engineers to ship
                features that delight users.
              </p>
            </Card>
          </section>
          {/* Experience */}
          <section id="experience" className="mt-12 w-full">
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <Card
                  key={exp.id}
                  title={exp.role}
                  subtitle={exp.company}
                  period={exp.period}
                  className="p-4 bg-white/3 rounded-lg border border-white/6">
                  {exp.summary}
                </Card>
              ))}
            </div>
          </section>
          {/* Education */}
          <section id="education" className="mt-12 w-full">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="space-y-4">
              {education.map((ed) => (
                <Card
                  key={ed.id}
                  title={ed.degree}
                  subtitle={ed.institution}
                  period={ed.period}
                  className="p-4 bg-white/3 rounded-lg border border-white/6">
                  {ed.details}
                </Card>
              ))}
            </div>
          </section>
          {/* Projects */}
          <section id="projects" className="mt-12 w-full">
            <h2 className="text-2xl font-semibold mb-4">Selected Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((p) => (
                <Card
                  key={p.id}
                  title={p.title}
                  className="p-4 bg-white/4 rounded-lg border border-white/6"
                  tags={p.tags}
                  actions={
                    <>
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm px-3 py-1 rounded bg-white/6 hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-primary/50">
                          Repo
                        </a>
                      )}
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm px-3 py-1 rounded bg-primary text-dark hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-primary/50">
                          Live
                        </a>
                      )}
                    </>
                  }>
                  <p className="mt-2 text-slate-200 text-sm line-clamp-2">
                    {p.description}
                  </p>
                </Card>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-black/30 border-t border-white/6 mt-12">
        <div className="site px-6 py-8 flex flex-col items-center justify-between">
          <div className="text-sm text-slate-300">
            © {new Date().getFullYear()} Your Name
          </div>
          <div className="mt-3 md:mt-0 flex gap-4">
            {["Twitter", "GitHub", "Email"].map((link) => (
              <a
                key={link}
                href={link === "Email" ? "mailto:you@example.com" : "#"}
                className="text-slate-200 hover:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

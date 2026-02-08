import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const education = [
  {
    degree: "Artificial Intelligence and Digital Transformation",
    school: "ENSAH",
    period: "2022 - 2027",
    highlights: [
    ],
  },
]

const experience = [
  {
    role: "AI Intern",
    company: "ATTIJARIWAFA BANK",
    period: "July 2025",
    bullets: [
      "An AI assistant that uses the Mistral API for intelligent conversation and ElevenLabs TTS for a natural human-like voice.",
      
    ],
  },
]

const skillGroups = [
  {
    title: "Programming Languages",
    subtitle: "Languages, libraries and framewoks I've mastered",
    items: ["Python","Java","JavaScript","Matlab","PHP","Spring Boot","HTML/CSS","React","Laravel"],
  },
  {
    title: "Development Environments and Tools",
    subtitle: "Tools used in development",
    items: ["XAMPP","Linux",
"Git",
"GitHub",
"GitLab"],
  },
  {
    title: "Database Technologies",
    subtitle: "Database tools and technologies",
    items: ["MySQL","PostgreSQL","SQL Server","MongoDB"],
  },
  {
    title: "Cloud Computing",
    subtitle: "Cloud platforms and tools",
    items: ["Azure","Fast API"],
  },
  {
    title: "AI Tools",
    subtitle: "Artificial Intelligence tools",
    items: ["Agent IA","Crew IA","RAG","LLMs","n8n"],
  },
  {
    title: "Big Data & Data Science",
    subtitle: "Big Data tools & Data Science frameworks",
    items: ["NumPy","Pandas","Hadoop",
"Kafka",
"Apache Spark",
"Data Mining",
"ELT/ETL",
"Prompt Engineering",
],
  },
  {
    title: "Tools & Data Visualization",
    subtitle: "Tools for visualizing data insights",
    items: ["Power BI","Excel"],
  },
  {
    title: "DevOps & Containerization",
    subtitle: "Tools for DevOps and container management",
    items: ["Docker"],
  },
]

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 pt-28">
        <section className="space-y-4 animate-fade-up">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Profile</p>
          <h1 className="text-3xl font-semibold text-foreground md:text-4xl">
            Education, Experience, and Skills
          </h1>
        </section>

        <section className="grid items-center gap-8 rounded-2xl border border-border bg-card/70 p-6 md:grid-cols-[240px,1fr] animate-fade-up-delay-1">
          <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-2xl border border-border bg-secondary shadow-lg">
            <img
              src="/M.jpeg"
              alt="Portrait of Maroua"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-3 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Hi, I am Maroua</h2>
            <p>
I'm an AI Engineering student at ENSAH, currently deepening my knowledge in Generative AI and Large Language Models and exploring their deployment through modern cloud platforms.
            </p>
          </div>
        </section>

        <section className="space-y-6 animate-fade-up-delay-1" id="education">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Education</h2>
            <p className="text-sm text-muted-foreground">Academic background and achievements.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <article key={item.degree} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{item.degree}</h3>
                  <span className="text-sm text-muted-foreground">{item.period}</span>
                </div>
                <p className="text-sm text-primary">{item.school}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {item.highlights.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6 animate-fade-up-delay-1" id="experience">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Professional Experience</h2>

          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {experience.map((item) => (
              <article key={item.role} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                  <span className="text-sm text-muted-foreground">{item.period}</span>
                </div>
                <p className="text-sm text-primary">{item.company}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {item.bullets.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6 animate-fade-up-delay-1" id="skills">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Skills: Mastered & Discovered</h2>

          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-border bg-primary/15 p-6"
              >
                <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {group.subtitle}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

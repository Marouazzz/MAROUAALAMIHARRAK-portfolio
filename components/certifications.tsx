import { Award, ExternalLink } from "lucide-react"

const certifications = [
  {
    name: "Version Control",
    platform: "Coursera",
    issuer: "Meta",
    year: "2025",
  },
  {
    name: "Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate",
    platform: "Oracle",
    issuer: "Oracle University",
    year: "2024",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    platform: "Oracle",
    issuer: "Oracle University",
    year: "2025",
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    platform: "AWS",
    issuer: "Amazon Web Services",
    year: "2025",
  },
  {
    name: "Programming with JavaScript",
    platform: "Coursera",
    issuer: "Meta",
    year: "2025",
  },

  {
    name: "Introduction to Front-End Developement",
    platform: "Coursera",
    issuer: "Meta",
    year: "2025",
  },   
  {
    name: "Certificate of Achievement in Web Scraping and API Fundamentals in Python",
    platform: "365 Data Science",
    issuer: "365 Data Science",
    year: "2024",
  }, 
    {
    name: "Certificate of Completion in Introduction to Digital Business Skills",
    platform: "HP",
    issuer: "HP",
    year: "2024",
  }, 
]

const platformStyles: Record<string, string> = {
  Coursera: "border-[#0056D2]/30 text-[#0056D2]",
  "Google Cloud": "border-[#4285F4]/30 text-[#4285F4]",
  Oracle: "border-[#F80000]/30 text-[#F80000]",
  AWS: "border-[#FF9900]/30 text-[#FF9900]",
}

export function Certifications() {
  return (
    <section id="certifications" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-center">
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            Credentials
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Certifications
          </h2>
        </div>
        <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
          Continuous learning is a core part of my journey. Here are some of
          the certifications I have earned along the way.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40 hover:bg-secondary/50"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                    platformStyles[cert.platform] || "border-border text-muted-foreground"
                  }`}
                >
                  {cert.platform}
                </span>
              </div>
              <h3 className="mb-1 text-base font-semibold text-foreground">
                {cert.name}
              </h3>
              <p className="mb-3 text-sm text-muted-foreground">
                {cert.issuer}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {cert.year}
                </span>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GithubSection() {
  return (
    <section id="github" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-center">
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            Open Source
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            GitHub Profile
          </h2>
        </div>
        <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
          Explore my work on GitHub. I believe in building in the open and
          sharing knowledge with the community.
        </p>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <a
              href="https://github.com/Marouazzz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View GitHub
              <ExternalLink className="ml-2 h-3.5 w-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20"
    >
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      <div className="relative z-10 mx-auto max-w-3xl text-center animate-fade-up">
        <p className="mb-4 font-mono text-sm tracking-widest text-primary uppercase animate-fade-up-delay-1">
          Engineering Student
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance animate-fade-up-delay-1">
          Turning Curiosity Into{" "}
          <span className="text-primary">Impact</span>
        </h1>

        <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg animate-fade-up-delay-2">
          I started my tech journey with a simple habit: asking why things work
          the way they do. That curiosity evolved into a real passion for AI,
          cloud computing, and digital innovation  a passion that pushes me
          every day to learn more, experiment more, and challenge myself through
          new ideas.
        </p>

        <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg animate-fade-up-delay-2">
          Today, I explore exciting domains like AI, IoT, cloud architectures,
          machine learning, and modern web development (Java - springboot -springai). Every project, no matter
          how big or small, teaches me something valuable and strengthens my
          confidence in what I can build.
        </p>

        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg animate-fade-up-delay-2">
          Beyond technology, my roles in clubs, teamwork, and leadership helped
          me grow as a communicator, a collaborator, and someone who genuinely
          enjoys connecting with others toward shared goals.
        </p>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              {"Let's Collaborate"}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#projects">
              View Projects
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/Marouazzz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:maroua2005alami@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to projects"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}

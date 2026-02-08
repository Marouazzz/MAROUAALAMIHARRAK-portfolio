"use client"

import React from "react"

import { useState } from "react"
import { ExternalLink, Brain, BarChart3, Code2, Cloud } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Category = "all" | "ai" | "data" | "dev" | "cloud"

interface Project {
  title: string
  description: string
  technologies: string[]
  github: string
  category: Category
}

const categories: { key: Category; label: string; icon: React.ReactNode }[] = [
  { key: "all", label: "All", icon: null },
  { key: "ai", label: "AI & ML", icon: <Brain className="h-4 w-4" /> },
  { key: "data", label: "Data Science", icon: <BarChart3 className="h-4 w-4" /> },
  { key: "dev", label: "Development", icon: <Code2 className="h-4 w-4" /> },
  { key: "cloud", label: "Cloud & DevOps", icon: <Cloud className="h-4 w-4" /> },
]

const projects: Project[] = [
  {
    title: "Fake News Detection Project with BERT Fine-tuning",
    description:
      "This is a fake news detection project that uses BERT (a pre-trained transformer model) to classify news titles as real or fake based on a labeled dataset.",
    technologies: ["Python", "Transformers","BERT"],
    github: "https://github.com/Marouazzz",
    category: "ai",
  },
  /*
  {
    title: "Image Classification Pipeline",
    description:
      "Deep learning pipeline for image classification using CNNs with transfer learning, achieving high accuracy on custom datasets.",
    technologies: ["TensorFlow", "Keras", "Python", "OpenCV"],
    github: "https://github.com/Marouazzz",
    category: "ai",
  },
  {
    title: "Sales Forecasting Dashboard",
    description:
      "Interactive dashboard for sales forecasting using time series analysis and statistical modeling with real-time visualizations.",
    technologies: ["Python", "Pandas", "Plotly", "Streamlit"],
    github: "https://github.com/Marouazzz",
    category: "data",
  },

  {
    title: "Task Management App",
    description:
      "Full-stack task management application with real-time collaboration, authentication, and responsive UI built with modern frameworks.",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/Marouazzz",
    category: "dev",
  },
/*
  {
    title: "CI/CD Pipeline Automation",
    description:
      "Automated CI/CD pipeline with containerized deployments, infrastructure as code, and monitoring for cloud-native applications.",
    technologies: ["Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    github: "https://github.com/Marouazzz",
    category: "cloud",
  },
  {
    title: "Cloud Infrastructure Monitor",
    description:
      "Real-time monitoring dashboard for cloud infrastructure with alerting, logging, and resource optimization recommendations.",
    technologies: ["AWS", "Grafana", "Prometheus", "Python"],
    github: "https://github.com/Marouazzz",
    category: "cloud",
  },*/
     { title: "Cloud-IoT Platform",
    description:
      "Real-time Cloud-IoT weather telemetry Platform ,fully simulated and deployed on Microsoft Azure with edge-to-cloud architecture.",
    technologies: ["Azure", "PowerBI", "Python","Docker","PowerBI"],
    github: "https://github.com/Marouazzz",
    category: "cloud",
  },
    {
    title: "Portfolio Website",
    description:
      "Modern personal portfolio website with smooth animations, responsive design, and optimized performance built with Next.js.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/Marouazzz",
    category: "dev",
  },
    {
    title: "O&M GALL web app",
    description:
      "Using Laravel with Vite, PHP, JavaScript, HTML, CSS, Bootstrap and SQLite for database management , we created a platform where users can upload and manage posts, like and save content, comment, follow others, search by tags, message each other, and personalize their profiles.",
    technologies: ["PHP", "Laravel", "JavaScript", "HTML", "CSS", "Bootstrap","SQLite"],
    github: "https://github.com/Marouazzz",
    category: "dev",
  },  {
    title: " API for Breast Cancer Prediction",
    description:
      "End-to-End Deep Learning Project: API for Breast Cancer Prediction",
    technologies: ["Python", "PyTorch", "Scikit-learn", "FastAPI","Docker"],
    github: "https://github.com/Marouazzz",
    category: "data",
  },
      {
    title: "Smart Research Assistant",
    description: "This project involves developing an intelligent browser extension that summarizes selected web content in real-time using the Gemini model via Spring AI, with a Spring Boot backend and a note-taking feature for generated summaries.",
    technologies: ["SPRING BOOT", "SPRING AI", "GEMINI API","POSTMAN"],
    github: "https://github.com/Marouazzz",
    category: "dev",
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40 hover:bg-secondary/50">
      <h3 className="mb-2 text-lg font-semibold text-foreground">
        {project.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="font-mono text-xs"
          >
            {tech}
          </Badge>
        ))}
      </div>
      <Button asChild variant="outline" size="sm" className="w-fit bg-transparent">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="mr-2 h-3.5 w-3.5" />
          View on GitHub
        </a>
      </Button>
    </div>
  )
}

export function Projects() {
  const [active, setActive] = useState<Category>("all")

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-center">
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Featured Projects
          </h2>
        </div>
        <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
          A selection of projects across AI, data science, web development, and
          cloud computing.
        </p>

        {/* Category filters */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActive(cat.key)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                active === cat.key
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

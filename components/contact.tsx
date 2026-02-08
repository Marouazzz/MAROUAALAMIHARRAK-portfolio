"use client"

import { useState } from "react"
import { Send, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-center">
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            Get in Touch
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {"Let's Connect"}
          </h2>
        </div>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Whether you have a project idea, want to collaborate, or just want to
          say hello — I would love to hear from you. Feel free to reach out
          through the form below or connect on social media.
        </p>

        <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-5">
          {/* Contact form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-lg border border-primary/30 bg-primary/5 p-12 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Send className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Message Sent!
                </h3>
                <p className="text-sm text-muted-foreground">
                  Thank you for reaching out. I will get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="flex flex-col gap-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="bg-card"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="bg-card"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What is this about?"
                    required
                    className="bg-card"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your idea or project..."
                    rows={5}
                    required
                    className="resize-none bg-card"
                  />
                </div>
                <Button type="submit" size="lg" className="w-fit">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Contact info sidebar */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 text-sm font-semibold text-foreground uppercase tracking-wider">
                Connect with me
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="https://github.com/Marouazzz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                  github.com/Marouazzz
                </a>
                <a
                  href="https://www.linkedin.com/in/maroua-alami-harrak-7a0017188/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn Profile
                </a>
                <a
                  href="mailto:maroua2005alami@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-5 w-5" />
                  maroua2005alami@gmail.com
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-3 text-sm font-semibold text-foreground uppercase tracking-wider">
                Availability
              </h3>
              <div className="mb-3 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm text-foreground">
                  Open to opportunities
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                I am currently looking for internships, collaborations, and
                exciting tech projects to contribute to.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

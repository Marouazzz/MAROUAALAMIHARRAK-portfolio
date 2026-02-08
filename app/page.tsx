import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { GithubSection } from "@/components/github-section"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <GithubSection />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

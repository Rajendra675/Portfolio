import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { NavBar } from './components/NavBar'
import { Projects } from './components/Projects'
import { TechStack } from './components/TechStack'
import { GradientBackground } from './components/ui/GradientBackground'
import { ScrollProgress } from './components/ui/ScrollProgress'

function App() {
  return (
    <div className="relative bg-surface text-on-surface">
      <GradientBackground />
      <ScrollProgress />
      <NavBar />
      <main className="pt-20">
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

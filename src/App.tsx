import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Skills } from "@/components/Skills"
import { lazy, Suspense } from "react"

// Lazy load components that are not immediately visible
const Projects = lazy(() => import("@/components/Projects").then(module => ({ default: module.Projects })))
const Contact = lazy(() => import("@/components/Contact").then(module => ({ default: module.Contact })))
const Footer = lazy(() => import("@/components/Footer").then(module => ({ default: module.Footer })))
const ScrollToTop = lazy(() => import("@/components/ScrollToTop").then(module => ({ default: module.ScrollToTop })))

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Suspense fallback={<div className="py-20 text-center">Cargando...</div>}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div className="py-20 text-center">Cargando...</div>}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="py-8 bg-slate-900 text-center text-white">Cargando...</div>}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <ScrollToTop />
      </Suspense>
    </div>
  )
}

export default App

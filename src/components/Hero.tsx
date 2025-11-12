import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4 font-text-regular">
            Desarrollador Backend
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 bg-linear-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent font-display-bold leading-tight">
            Brayan Salazar
            <br />
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed font-text-regular">
            Desarrollo APIs robustas y escalables con tecnologías modernas.
            Especializado en backend con Node.js, Python, bases de datos y soluciones cloud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 cursor-pointer font-nav-semibold">
              Ver mis proyectos
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 cursor-pointer font-nav-semibold">
              Descargar CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
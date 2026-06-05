import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/hooks/use-language"
import { scrollToSection } from "@/lib/utils"
import ShapeGrid from "@/components/ShapeGrid"
import { useEffect, useState } from "react"

export function Hero() {
  const { t, language } = useLanguage()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }
    checkTheme()

    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })
    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-white to-white dark:from-slate-900 dark:to-slate-800">
      <div className="absolute inset-0 z-0 opacity-70">
        <ShapeGrid 
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor={isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(15, 23, 42, 0.08)"}
          hoverFillColor={isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(15, 23, 42, 0.04)"}
          shape="square"
          hoverTrailAmount={1}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-slate-900 dark:via-slate-900/80 pointer-events-none z-5" />
      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4 font-text-regular">
            {t("hero.badge")}
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 bg-linear-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent font-display-bold leading-tight">
            {t("hero.title")}
            <br />
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed font-text-regular">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 cursor-pointer font-nav-semibold"
              onClick={() => scrollToSection("projects")}
            >
              {t("hero.viewProjects")}
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 cursor-pointer font-nav-semibold" asChild>
              <a
                href={language === "es" ? "/docs/cv_brayan_salazar_es.pdf" : "/docs/cv_brayan_salazar_en.pdf"}
                download={`cv_brayan_salazar_${language}.pdf`}
              >
                {t("hero.downloadCv")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/hooks/use-language"
import { scrollToSection } from "@/lib/utils"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16 text-center">
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
            <Button variant="outline" size="lg" className="text-lg px-8 cursor-pointer font-nav-semibold">
              {t("hero.downloadCv")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
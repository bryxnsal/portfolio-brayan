import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { LanguageToggle } from "@/components/LanguageToggle"
import { Menu, X } from "lucide-react"
import { scrollToSection as scrollToSectionUtil } from "@/lib/utils"
import { useLanguage } from "@/hooks/use-language"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    scrollToSectionUtil(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-sm"
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-display-bold text-xl leading-tight select-none">
            Brayan Salazar<span className="text-primary">.</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors cursor-pointer font-nav-regular select-none"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => scrollToSection("backend-skills")}
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors cursor-pointer font-nav-regular select-none"
            >
              {t("nav.skills")}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors cursor-pointer font-nav-regular select-none"
            >
              {t("nav.projects")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors cursor-pointer font-nav-regular select-none"
            >
              {t("nav.contact")}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden cursor-pointer transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-90' : 'rotate-0'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="hidden md:inline-flex cursor-pointer font-nav-medium"
            >
              {t("nav.contactBtn")}
            </Button>
          </div>
        </div>
      </div>

      <div className={`md:hidden border-t border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? `max-h-96 opacity-100 ${isScrolled ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-white/90 dark:bg-slate-900/90'}` : 'max-h-0 opacity-0'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-left text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors cursor-pointer py-2 font-nav-regular select-none"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => scrollToSection("backend-skills")}
              className="text-left text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors cursor-pointer py-2 font-nav-regular select-none"
            >
              {t("nav.skills")}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-left text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors cursor-pointer py-2 font-nav-regular select-none"
            >
              {t("nav.projects")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors cursor-pointer py-2 font-nav-regular select-none"
            >
              {t("nav.contact")}
            </button>
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full cursor-pointer font-nav-medium"
              >
                {t("nav.contactBtn")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
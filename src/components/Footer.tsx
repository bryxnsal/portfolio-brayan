import { GithubLogoIcon, LinkedinLogoIcon, XLogoIcon, InstagramLogoIcon } from "@phosphor-icons/react";
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils"
import { useLanguage } from "@/hooks/use-language"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4 font-display-semibold select-none">
              Brayan Salazar<span className="text-primary">.</span>
            </h3>
            <p className="text-slate-400 mb-4 font-text-regular">
              {t("footer.desc")}
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild className="text-slate-400 hover:text-white cursor-pointer select-none">
                <a href="https://github.com/bryxnsal" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil de GitHub de Brayan Salazar">
                  <GithubLogoIcon className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-slate-400 hover:text-white cursor-pointer select-none">
                <a href="https://linkedin.com/in/brayan-salazar-salazar/" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil de LinkedIn de Brayan Salazar">
                  <LinkedinLogoIcon className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-slate-400 hover:text-white cursor-pointer select-none">
                <a href="https://x.com/bryxn_alv" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil de X de Brayan Salazar">
                  <XLogoIcon className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-slate-400 hover:text-white cursor-pointer select-none">
                <a href="https://instagram.com/bryxn.py" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil de Instagram de Brayan Salazar">
                  <InstagramLogoIcon className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-nav-medium">{t("footer.links")}</h4>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => scrollToSection("hero")} className="hover:text-white transition-colors cursor-pointer font-nav-regular select-none">{t("nav.home")}</button></li>
              <li><button onClick={() => scrollToSection("backend-skills")} className="hover:text-white transition-colors cursor-pointer font-nav-regular select-none">{t("nav.skills")}</button></li>
              <li><button onClick={() => scrollToSection("projects")} className="hover:text-white transition-colors cursor-pointer font-nav-regular select-none">{t("nav.projects")}</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors cursor-pointer font-nav-regular select-none">{t("nav.contact")}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-nav-medium">{t("nav.contact")}</h4>
            <ul className="space-y-2 text-slate-400 font-text-regular">
              <li><a href="mailto:salazar.br04@gmail.com" className="hover:text-white transition-colors">salazar.br04@gmail.com</a></li>
              <li><a href="tel:+51904196955" className="hover:text-white transition-colors">+51 904 196 955</a></li>
              <li>Lima, Perú</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p className="flex items-center justify-center gap-2 font-text-regular">
            {t("footer.madeWith")} <Heart className="w-4 h-4 text-red-500" /> {t("footer.by")}
          </p>
          <p className="mt-2 font-text-regular">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
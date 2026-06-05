import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <Button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 p-0 shadow-lg cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
      }`}
      size="icon"
      aria-label={t("scroll.ariaLabel") || "Volver al inicio de la página"}
    >
      <ChevronUp className="w-6 h-6 transition-transform duration-200" />
    </Button>
  )
}
import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/hooks/use-language"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="cursor-pointer font-nav-semibold text-xs flex items-center gap-1.5 h-9 px-3">
          <Languages className="h-[1rem] w-[1rem]" />
          <span className="uppercase">{language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")} className="select-none flex justify-between items-center gap-4 cursor-pointer">
          <span>English</span>
          {language === "en" && <span className="text-xs text-primary font-bold">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("es")} className="select-none flex justify-between items-center gap-4 cursor-pointer">
          <span>Español</span>
          {language === "es" && <span className="text-xs text-primary font-bold">✓</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

import { Moon, Sun, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="cursor-pointer relative flex items-center justify-center overflow-hidden"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <Sun 
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ease-in-out transform 
          ${theme === "light" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0 absolute"}
        `} 
      />
      <Moon 
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ease-in-out transform absolute 
          ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}
        `} 
      />
      <Monitor 
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ease-in-out transform absolute 
          ${theme === "system" ? "scale-100 translate-y-0 opacity-100" : "scale-0 translate-y-2 opacity-0"}
        `} 
      />
    </Button>
  )
}
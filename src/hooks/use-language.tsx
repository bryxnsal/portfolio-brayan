import { createContext, useContext, useState, useEffect } from "react"

export type Language = "es" | "en"

type LanguageProviderProps = {
  children: React.ReactNode
  defaultLanguage?: Language
  storageKey?: string
}

type LanguageProviderState = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "nav.contactBtn": "Contactar",
    "nav.closeMenu": "Cerrar menú",
    "nav.openMenu": "Abrir menú",

    // Hero
    "hero.badge": "Desarrollador Backend",
    "hero.title": "Brayan Salazar",
    "hero.subtitle": "Desarrollo APIs robustas y escalables con tecnologías modernas. Especializado en backend con Node.js, Python, bases de datos, soluciones cloud e Inteligencia Artificial.",
    "hero.viewProjects": "Ver mis proyectos",
    "hero.downloadCv": "Descargar CV",

    // Skills
    "skills.title": "Tecnologías Backend",
    "skills.subtitle": "Tecnologías y herramientas backend que domino para construir APIs robustas y escalables",
    "skills.backend": "Backend",
    "skills.devops": "DevOps & Cloud",
    "skills.tools": "Herramientas",
    "skills.ai": "IA & Automatización",

    // Projects
    "projects.title": "Proyectos Destacados",
    "projects.subtitle": "Una selección de mis trabajos más recientes y desafiantes",
    "projects.view": "Ver proyecto",
    "projects.code": "Código",
    "projects.others": "Otros Proyectos",
    "projects.telegram.title": "Telegram Bot",
    "projects.telegram.desc": "Bot de Telegram inteligente con integración de proxies para consumir APIs externas. Implementa webhooks para procesamiento en tiempo real de mensajes y comandos.",
    "projects.sales.title": "Sistema de Ventas Interno",
    "projects.sales.desc": "Sistema completo de gestión de ventas desarrollado con .NET Framework. Incluye interfaz de usuario moderna, base de datos SQL Server y ORM para manejo eficiente de datos.",
    "projects.portfolio.title": "Portfolio Personal",
    "projects.portfolio.desc": "Portafolio personal desarrollado con tecnologías modernas de frontend. Incluye diseño responsivo, optimización SEO y modo oscuro.",

    // Contact
    "contact.title": "Contacto",
    "contact.subtitle": "¿Tienes un proyecto en mente? Hablemos sobre cómo podemos trabajar juntos",
    "contact.infoTitle": "Información de Contacto",
    "contact.infoDesc": "Ponte en contacto conmigo a través de cualquiera de estos medios",
    "contact.socials": "Sígueme en redes sociales",
    "contact.formTitle": "Envíame un mensaje",
    "contact.formDesc": "Completa el formulario y me pondré en contacto contigo lo antes posible",
    "contact.nameLabel": "Nombre",
    "contact.namePlaceholder": "Tu nombre completo",
    "contact.messageLabel": "Mensaje",
    "contact.messagePlaceholder": "Cuéntame sobre tu proyecto...",
    "contact.sendBtn": "Enviar mensaje",
    "contact.waText": "Hola Brayan, mi nombre es {name} y necesito ponerme en contacto contigo acerca de {message}",

    // Footer
    "footer.desc": "Desarrollador Backend apasionado por crear experiencias digitales excepcionales.",
    "footer.links": "Enlaces Rápidos",
    "footer.madeWith": "Hecho con",
    "footer.by": "por Brayan Salazar",
    "footer.rights": `© ${new Date().getFullYear()} Todos los derechos reservados`,
    "scroll.ariaLabel": "Volver al inicio de la página",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.contactBtn": "Contact me",
    "nav.closeMenu": "Close menu",
    "nav.openMenu": "Open menu",

    // Hero
    "hero.badge": "Backend Developer",
    "hero.title": "Brayan Salazar",
    "hero.subtitle": "I build robust and scalable APIs using modern technologies. Specialized in backend development with Node.js, Python, databases, cloud solutions, and Artificial Intelligence.",
    "hero.viewProjects": "View my work",
    "hero.downloadCv": "Download CV",

    // Skills
    "skills.title": "Backend Technologies",
    "skills.subtitle": "Backend technologies and tools I use to build robust and scalable APIs",
    "skills.backend": "Backend",
    "skills.devops": "DevOps & Cloud",
    "skills.tools": "Tools",
    "skills.ai": "AI & Automation",

    // Projects
    "projects.title": "Featured Projects",
    "projects.subtitle": "A selection of my most recent and challenging work",
    "projects.view": "View project",
    "projects.code": "Code",
    "projects.others": "Other Projects",
    "projects.telegram.title": "Telegram Bot",
    "projects.telegram.desc": "Intelligent Telegram bot with proxy integration to consume external APIs. Implements webhooks for real-time message and command processing.",
    "projects.sales.title": "Internal Sales System",
    "projects.sales.desc": "Complete sales management system developed with .NET Framework. Includes modern user interface, SQL Server database and ORM for efficient data handling.",
    "projects.portfolio.title": "Personal Portfolio",
    "projects.portfolio.desc": "Personal portfolio developed with modern frontend technologies. Includes responsive design, SEO optimization and dark mode.",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Have a project in mind? Let's talk about how we can work together",
    "contact.infoTitle": "Contact Information",
    "contact.infoDesc": "Get in touch with me through any of these channels",
    "contact.socials": "Follow me on social media",
    "contact.formTitle": "Send me a message",
    "contact.formDesc": "Fill out the form and I will get in touch with you as soon as possible",
    "contact.nameLabel": "Name",
    "contact.namePlaceholder": "Your full name",
    "contact.messageLabel": "Message",
    "contact.messagePlaceholder": "Tell me about your project...",
    "contact.sendBtn": "Send message",
    "contact.waText": "Hello Brayan, my name is {name} and I need to contact you regarding {message}",

    // Footer
    "footer.desc": "Backend Developer passionate about creating exceptional digital experiences.",
    "footer.links": "Quick Links",
    "footer.madeWith": "Made with",
    "footer.by": "by Brayan Salazar",
    "footer.rights": `© ${new Date().getFullYear()} All rights reserved`,
    "scroll.ariaLabel": "Scroll to top",
  }
}

const LanguageProviderContext = createContext<LanguageProviderState | undefined>(undefined)

export function LanguageProvider({
  children,
  defaultLanguage = "en",
  storageKey = "portfolio-language",
  ...props
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    const path = window.location.pathname
    if (path.startsWith("/es")) return "es"
    if (path.startsWith("/en")) return "en"

    const stored = localStorage.getItem(storageKey) as Language
    if (stored === "es" || stored === "en") return stored

    if (navigator.language.startsWith("es")) return "es"

    return defaultLanguage
  })

  useEffect(() => {
    const path = window.location.pathname
    const expectedPath = `/${language}`

    if (!path.startsWith(expectedPath)) {
      const newPath = expectedPath + window.location.search + window.location.hash
      window.history.replaceState({ lang: language }, "", newPath)
    }

    document.documentElement.setAttribute("lang", language)
  }, [language])

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname
      if (path.startsWith("/es") && language !== "es") {
        setLanguage("es")
      } else if (path.startsWith("/en") && language !== "en") {
        setLanguage("en")
      }
    }

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [language])

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "lang") {
          const currentLangAttr = document.documentElement.getAttribute("lang")

          if (
            window.location.pathname.startsWith("/en") &&
            currentLangAttr === "es"
          ) {
            observer.disconnect()
            const newPath = "/es" + window.location.search + window.location.hash
            window.location.href = newPath
          }
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    })

    return () => observer.disconnect()
  }, [])

  const t = (key: string): string => {
    const langDict = translations[language]
    return langDict[key as keyof typeof langDict] || key
  }

  const value = {
    language,
    setLanguage: (lang: Language) => {
      localStorage.setItem(storageKey, lang)
      setLanguage(lang)

      const expectedPath = `/${lang}`
      if (!window.location.pathname.startsWith(expectedPath)) {
        const newPath = expectedPath + window.location.search + window.location.hash
        window.history.pushState({ lang }, "", newPath)
      }
    },
    t,
  }

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext)

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider")

  return context
}

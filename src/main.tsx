import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './hooks/use-theme'
import { LanguageProvider } from './hooks/use-language'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <LanguageProvider defaultLanguage="en" storageKey="portfolio-language">
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display-bold">Contacto</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Hablemos sobre cómo podemos trabajar juntos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-nav-semibold">Información de Contacto</CardTitle>
                <CardDescription className="font-text-regular">
                  Ponte en contacto conmigo a través de cualquiera de estos medios
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-text-medium">Email</p>
                    <p className="font-text-regular text-sm text-slate-600 dark:text-slate-400">
                      <a href="mailto:salazar.br04@gmail.com" className="hover:text-primary transition-colors font-text-regular">
                        salazar.br04@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-text-medium">Teléfono</p>
                    <p className="font-text-regular text-sm text-slate-600 dark:text-slate-400">
                      <a href="tel:+51904196955" className="hover:text-primary transition-colors">
                        +51 904 196 955
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-text-medium">Ubicación</p>
                    <p className="font-text-regular text-sm text-slate-600 dark:text-slate-400">Lima, Perú</p>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="font-nav-medium mb-4">Sígueme en redes sociales</p>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" asChild className="cursor-pointer select-none">
                      <a href="https://github.com/bryxnsal" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild className="cursor-pointer select-none">
                      <a href="https://linkedin.com/in/brayan-salazar-salazar/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild className="cursor-pointer select-none">
                      <a href="https://twitter.com/bryxn_alv" target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild className="cursor-pointer select-none">
                      <a href="https://instagram.com/bryxn.py" target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-nav-semibold">Envíame un mensaje</CardTitle>
                <CardDescription className="font-text-regular">
                  Completa el formulario y me pondré en contacto contigo lo antes posible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="mb-2 font-text-medium">Nombre</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Tu nombre completo"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="mb-2 font-text-medium">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="mb-2 font-text-medium">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Cuéntame sobre tu proyecto..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full cursor-pointer font-nav-bold select-none">
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
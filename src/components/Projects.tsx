import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { GithubLogoIcon } from "@phosphor-icons/react"

const projects = [
	{
		title: "Telegram Bot",
		description:
			"Bot de Telegram inteligente con integración de proxies para consumir APIs externas. Implementa webhooks para procesamiento en tiempo real de mensajes y comandos.",
		image: "/api/placeholder/400/250",
		technologies: ["Python", "Telegram API", "Proxies", "Webhooks", "APIs Externas"],
		liveUrl: "#",
		githubUrl: "#",
		featured: true,
	},
	{
		title: "Sistema de Ventas Interno",
		description:
			"Sistema completo de gestión de ventas desarrollado con .NET Framework. Incluye interfaz de usuario moderna, base de datos SQL Server y ORM para manejo eficiente de datos.",
		image: "/api/placeholder/400/250",
		technologies: [".NET Framework 4.7.2", "SQL Server", "WinForms", "Entity Framework"],
		liveUrl: "#",
		githubUrl: "#",
		featured: true,
	},
	{
		title: "Portfolio Personal",
		description:
			"Portafolio personal desarrollado con tecnologías modernas de frontend. Incluye diseño responsivo, optimización SEO y modo oscuro.",
		image: "/api/placeholder/400/250",
		technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
		liveUrl: "#",
		githubUrl: "#",
		featured: false,
	},
]

export function Projects() {
	const featuredProjects = projects.filter((project) => project.featured)
	const otherProjects = projects.filter((project) => !project.featured)

	return (
		<section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						<span className="font-display-bold">Proyectos Destacados</span>
					</h2>
					<p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-text-regular">
						Una selección de mis trabajos más recientes y desafiantes
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
					{featuredProjects.map((project, index) => (
						<Card
							key={index}
							className="overflow-hidden hover:shadow-xl transition-shadow"
						>
							<div className="aspect-video bg-slate-200/15 dark:bg-slate-700/15 flex items-center justify-center">
								<span className="text-slate-500 select-none">Project Image</span>
							</div>
							<CardHeader>
								<CardTitle className="text-xl font-nav-semibold">{project.title}</CardTitle>
								<CardDescription className="text-base font-text-regular">
									{project.description}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="font-text-regular flex flex-wrap gap-2 mb-4">
									{project.technologies.map((tech) => (
										<Badge key={tech} variant="outline">
											{tech}
										</Badge>
									))}
								</div>
								<div className="flex gap-3">
									<Button
										size="sm"
										className="flex-1 cursor-pointer font-nav-medium"
									>
										<ExternalLink className="w-4 h-4 mr-2" />
										Ver proyecto
									</Button>
									<Button
										variant="outline"
										size="sm"
										className="flex-1 cursor-pointer font-nav-medium"
									>
										<GithubLogoIcon className="w-4 h-4 mr-2" />
										Código
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="text-center mb-12">
					<h3 className="text-2xl font-bold mb-4 font-nav-semibold">
						Otros Proyectos
					</h3>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-md mx-auto">
					{otherProjects.map((project, index) => (
						<Card key={index} className="hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-slate-200/15 dark:bg-slate-700/15 flex items-center justify-center">
								<span className="text-slate-500 select-none">Project Image</span>
							</div>
							<CardHeader>
								<CardTitle className="text-lg font-nav-semibold">{project.title}</CardTitle>
								<CardDescription className="text-sm font-text-regular">
									{project.description}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="font-text-regular flex flex-wrap gap-1 mb-3">
									{project.technologies.map((tech) => (
										<Badge key={tech} variant="outline" className="text-xs">
											{tech}
										</Badge>
									))}
								</div>
								<div className="flex gap-2">
									<Button
										size="sm"
										variant="outline"
										className="flex-1 text-xs cursor-pointer font-nav-medium"
									>
										<ExternalLink className="w-3 h-3 mr-1" />
										Ver Proyecto
									</Button>
									<Button
										size="sm"
										variant="outline"
										className="flex-1 text-xs cursor-pointer font-nav-medium"
									>
										<GithubLogoIcon className="w-3 h-3 mr-1" />
										Código
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
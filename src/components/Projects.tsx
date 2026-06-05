import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { GithubLogoIcon } from "@phosphor-icons/react"
import { useLanguage } from "@/hooks/use-language"

const projects = [
	{
		titleKey: "projects.telegram.title",
		descriptionKey: "projects.telegram.desc",
		image: "/api/placeholder/400/250",
		technologies: ["Python", "Telegram API", "Proxies", "Webhooks", "External APIs"],
		liveUrl: "#",
		githubUrl: "#",
		featured: true,
	},
	{
		titleKey: "projects.sales.title",
		descriptionKey: "projects.sales.desc",
		image: "/api/placeholder/400/250",
		technologies: [".NET Framework 4.7.2", "SQL Server", "WinForms", "Entity Framework"],
		liveUrl: "#",
		githubUrl: "#",
		featured: true,
	},
	{
		titleKey: "projects.portfolio.title",
		descriptionKey: "projects.portfolio.desc",
		image: "/api/placeholder/400/250",
		technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
		liveUrl: "#",
		githubUrl: "#",
		featured: false,
	},
]

export function Projects() {
	const { t } = useLanguage()
	const featuredProjects = projects.filter((project) => project.featured)
	const otherProjects = projects.filter((project) => !project.featured)

	return (
		<section id="projects" className="relative py-20 bg-slate-50 dark:bg-slate-800">
			<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-slate-900 dark:via-slate-900/80 pointer-events-none" />
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						<span className="font-display-bold">{t("projects.title")}</span>
					</h2>
					<p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-text-regular">
						{t("projects.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
					{featuredProjects.map((project, index) => (
						<Card
							key={index}
							className="overflow-hidden hover:shadow-xl transition-shadow"
						>
							{/* <div className="aspect-video bg-slate-200/15 dark:bg-slate-700/15 flex items-center justify-center">
								<span className="text-slate-500 select-none">Project Image</span>
							</div> */}
							<CardHeader>
								<CardTitle className="text-xl font-nav-semibold">{t(project.titleKey)}</CardTitle>
								<CardDescription className="text-base font-text-regular">
									{t(project.descriptionKey)}
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
										{t("projects.view")}
									</Button>
									<Button
										variant="outline"
										size="sm"
										className="flex-1 cursor-pointer font-nav-medium"
									>
										<GithubLogoIcon className="w-4 h-4 mr-2" />
										{t("projects.code")}
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="text-center mb-12">
					<h3 className="text-2xl font-bold mb-4 font-nav-semibold">
						{t("projects.others")}
					</h3>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-md mx-auto">
					{otherProjects.map((project, index) => (
						<Card key={index} className="hover:shadow-lg transition-shadow">
							{/* <div className="aspect-video bg-slate-200/15 dark:bg-slate-700/15 flex items-center justify-center">
								<span className="text-slate-500 select-none">Project Image</span>
							</div> */}
							<CardHeader>
								<CardTitle className="text-lg font-nav-semibold">{t(project.titleKey)}</CardTitle>
								<CardDescription className="text-sm font-text-regular">
									{t(project.descriptionKey)}
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
										{t("projects.view")}
									</Button>
									<Button
										size="sm"
										variant="outline"
										className="flex-1 text-xs cursor-pointer font-nav-medium"
									>
										<GithubLogoIcon className="w-3 h-3 mr-1" />
										{t("projects.code")}
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
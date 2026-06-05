import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Cloud, Bot } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const skillCategories = [
	{
		titleKey: "skills.backend",
		icon: Database,
		skills: [
			"Node.js",
			"Python",
			"SQL Server",
			"PostgreSQL",
			"MongoDB",
			"Express",
			"FastAPI",
			"Flask",
			".NET",
		],
	},
	{
		titleKey: "skills.devops",
		icon: Cloud,
		skills: ["AWS", "Linux", "Gitlab", "GitHub Actions", "Docker", "Dokploy", "Vercel"],
	},
	{
		titleKey: "skills.tools",
		icon: Code,
		skills: ["Git", "Antigravity", "VS Code", "Obsidian", "Bruno", "Vitest"],
	},
	{
		titleKey: "skills.ai",
		icon: Bot,
		skills: ["MCPs", "Spec Driven Development (SDD)", "Harness Engineering", "OpenCode", "Gemini", "Claude", "GitHub Copilot"],
	},
]

export function Skills() {
	const { t } = useLanguage()

	return (
		<section id="backend-skills" className="relative py-20 bg-white dark:bg-slate-900">
			<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent dark:from-slate-800 dark:via-slate-800/80 pointer-events-none" />
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4 font-display-bold">
						{t("skills.title")}
					</h2>
					<p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-text-regular">
						{t("skills.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
					{skillCategories.map((category) => {
						const IconComponent = category.icon
						return (
							<Card
								key={category.titleKey}
								className="hover:shadow-lg transition-shadow"
							>
								<CardHeader>
									<CardTitle className="flex items-center gap-3 font-nav-semibold">
										<IconComponent className="w-6 h-6 text-primary" />
										{t(category.titleKey)}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="font-text-regular flex flex-wrap gap-2">
										{category.skills.map((skill) => (
											<Badge key={skill} variant="secondary">
												{skill}
											</Badge>
										))}
									</div>
								</CardContent>
							</Card>
						)
					})}
				</div>
			</div>
		</section>
	)
}
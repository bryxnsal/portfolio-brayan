import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Cloud, Bot } from "lucide-react"

const skillCategories = [
	{
		title: "Backend",
		icon: Database,
		skills: [
			"Node.js",
			"Python",
			"PostgreSQL",
			"MongoDB",
			"Express",
            "FastAPI",
		],
	},
	{
		title: "DevOps & Cloud",
		icon: Cloud,
		skills: ["AWS", "Docker", "CI/CD", "Vercel", "Linux"],
	},
	{
		title: "Herramientas",
		icon: Code,
		skills: ["Git", "VS Code", "Obsidian", "Postman", "Jest"],
	},
	{
		title: "IA & Automatización",
		icon: Bot,
		skills: ["MCPs", "Claude", "ChatGPT", "GitHub Copilot", "Cursor", "GitHub Actions"],
	},
]

export function Skills() {
	return (
		<section id="backend-skills" className="py-20 bg-white dark:bg-slate-900">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4 font-display-bold">
						Tecnologías Backend
					</h2>
					<p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-text-regular">
						Tecnologías y herramientas backend que domino para construir APIs
						robustas y escalables
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
					{skillCategories.map((category) => {
						const IconComponent = category.icon
						return (
							<Card
								key={category.title}
								className="hover:shadow-lg transition-shadow"
							>
								<CardHeader>
									<CardTitle className="flex items-center gap-3 font-nav-semibold">
										<IconComponent className="w-6 h-6 text-primary" />
										{category.title}
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
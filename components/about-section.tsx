import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const AboutSection = () => {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Rust", "PostgreSQL", "Actix"] },
    { category: "Blockchain", items: ["Anchor", "Solidity", "Solana", "Ether.js"] },
    { category: "DevOps", items: ["Docker", "AWS", "Vercel", "CI/CD"] },
  ]

  const techStack = [
    "Solidity",
    "TypeScript",
    "Rust",
    "Solana",
    "Ethereum",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Express.js",
    "Prisma ORM",
    "Tailwind CSS",

  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Full-Stack Blockchain Developer with expertise in building scalable and secure
              decentralized applications. With a strong foundation in both traditional web development and blockchain
              technologies, I bridge the gap between Web2 and Web3.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in blockchain development has led me to work extensively with Solana and Ethereum ecosystems,
              creating innovative solutions that push the boundaries of what's possible in decentralized finance and
              applications.
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category} className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-lg">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="text-muted-foreground">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

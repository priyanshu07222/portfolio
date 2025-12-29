import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const ProjectsSection = () => {
  const projects = [
    {
      title: "Movr",
      description:
        "Compete. Trade. Win., an on-chain paper trading platform on Solana, enabling users to participate in live, real-time trading duels with a small contest entry fee. Built using Solana, Anchor, MagicBlock, and Next.js. Designed contest-based trading mechanics with real-time updates. Focused on low-latency execution and seamless on-chain/off-chain coordination for live trading experiences.",
      tech: ["Solana", "Anchor", "MagicBlock", "Pyth", "Next.js"],
      github: "https://github.com/Fahad-Dezloper/Movr",
      demo: "https://www.movr.fun/",
      badges: ["Solana", "DeFi"],
    },
    {
      title: "NOYEAH",
      description:
        "Noyeah is a decentralized opinion trading platform built on Solana. Users can participate in prediction contests by staking SOL and selecting an outcome. Winners are rewarded based on a bonding curve pricing model and correct predictions.",
      tech: ["Solana", "Rust", "Next.js", "TypeScript", "Anchor"],
      github: "https://github.com/priyanshu07222/noyeah-contract",
      demo: "https://noyeah.priyanshu.pro/",
      badges: ["Solana", "DeFi"],
    },
    {
      title: "Capsulr",
      description:
        "Capsulr is a TimeCapsule app build on EVM. Capsulr lets you lock messages, memories, or surprises on-chain and reveal them in the future based on timeStamps, or block number. It's your personal blockchain time machine built for nostalgia, storytelling, and meaningful digital moments.",
      tech: ["Ethereum", "Solidity", "Next.js", "Foundry"],
      github: "https://github.com/adityajha2005/TImeCapsuleMONAD",
      demo: "https://t-ime-capsule-monad.vercel.app/",
      badges: ["Ethereum", "NFT"],
    },
    {
      title: "OnlyNerds",
      description: "Decentralized learning & NFT-based certification. OnlyNerds is a platform that allows you to learn, create, fork courses and earn NFTs for your achievements.",
      tech: [ "Solidity", "TypeScript", "Next.js", "Foundry", "Binance Smart Chain"],
      github: "https://github.com/adityajha2005/OnlyNerds",
      demo: "https://onlynerds-rose.vercel.app/",
      badges: ["Cross-Chain", "Security"],
    },
    {
      title: "ParalleME",
      description:
      "ParalleMe is a creative AI-powered app that analyzed your Twitter personality to reveal your alternate universe identity along with your chaotic-cute cosmic partner, generating a unique cartoon story and image based on your tweets.",
      tech: [ "Next.js", "TypeScript", "TailwindCSS", "Gemini", "RapidAPI"],
      github: "https://github.com/priyanshu07222/paralleMe",
      demo: "https://paralleme.priyanshu.pro/",
      badges: [ "AI"],
    }, 
    {
        title: "Solert",
        description: 
        "Solert is platform to track whale activity on Solana Blockchain. It let you stay ahead of Whale moves on Solana by providing a real-time notification for large transactions or activity on specific solana address or groups of addresses.",
        tech: ["Next.js", "@solana/web3.js", "Helius", "Express"],
        github: "https://github.com/priyanshu07222/traceWhale",
        demo: "https://solert.vercel.app/",
        badges: ["Solana"]
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my blockchain and full-stack development projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="flex gap-1">
                    {project.badges.map((badge) => (
                      <Badge key={badge} variant="secondary" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

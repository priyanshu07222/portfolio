import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Building Secure Smart Contracts on Solana",
      excerpt: "A comprehensive guide to developing secure and efficient smart contracts using Anchor framework.",
      date: "2024-01-15",
      category: "Blockchain",
      readTime: "8 min read",
      slug: "secure-smart-contracts-solana",
    },
    {
      title: "Cross-Chain Development Best Practices",
      excerpt: "Essential patterns and security considerations when building applications across multiple blockchains.",
      date: "2024-01-10",
      category: "Security",
      readTime: "12 min read",
      slug: "cross-chain-best-practices",
    },
    {
      title: "Optimizing DeFi Protocol Performance",
      excerpt:
        "Techniques for improving gas efficiency and transaction throughput in decentralized finance applications.",
      date: "2024-01-05",
      category: "DeFi",
      readTime: "10 min read",
      slug: "optimizing-defi-performance",
    },
  ]

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights and tutorials on blockchain development, security, and emerging technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString()}
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <Badge variant="secondary" className="w-fit mb-3">
                  {post.category}
                </Badge>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors mb-2">{post.title}</h3>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <Button variant="ghost" size="sm" asChild className="p-0 h-auto">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-2 text-primary hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default BlogSection

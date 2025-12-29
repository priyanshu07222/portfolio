"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground">My professional journey in blockchain and full-stack development</p>
        </div>

        <Card className="p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h3 className="text-2xl font-bold">Fullstack Blockchain Engineer</h3>
                <p className="text-xl text-muted-foreground mt-1">Grumble Studio</p>
                <p className="text-sm text-muted-foreground mt-2">Aug 2025 - Dec 2025</p>
              </div>
              <Badge variant="outline" className="w-fit">Remote</Badge>
            </div>

            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="min-w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground leading-relaxed">
                    Led end-to-end development of a real-time world map game — designed system architecture, built the Next.js frontend, and implemented a NestJS + Prisma + PostgreSQL + Redis backend optimized for performance, scalability, and low-latency interactions.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="min-w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground leading-relaxed">
                    Shipped room-based real-time chat using Supabase Realtime, Redis Streams for message queuing, and background workers for persistence and data seeding, ensuring high reliability under real-time load.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="min-w-2 h-2 rounded-full bg-primary mt-2" />
                  <div className="text-muted-foreground leading-relaxed">
                    <p className="mb-2">Built RugRumble, a Web3 gaming platform, where I:</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Designed and implemented upgradeable EVM smart contracts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Developed the fullstack application using Next.js, NestJS, and Supabase</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Implemented on-chain data indexing using The Graph (subgraphs) for efficient querying and real-time updates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Handled complete smart contract ↔ backend ↔ frontend integration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">NestJS</Badge>
                <Badge variant="secondary">Prisma</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">Redis</Badge>
                <Badge variant="secondary">Supabase</Badge>
                <Badge variant="secondary">Smart Contracts</Badge>
                <Badge variant="secondary">The Graph</Badge>
                <Badge variant="secondary">Web3</Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default ExperienceSection

import { CodeXmlIcon } from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "flute-fruite",
    companyName: "Flute Fruite",
    positions: [
      {
        id: "1",
        title: "Blockchain Engineer (Contract)",
        employmentPeriod: {
          start: "01.2026",
          end: "02.2026",
        },
        employmentType: "Remote · India",
        icon: <CodeXmlIcon />,
        description: `- Built and optimized transaction execution logic for a memecoin trading terminal, ensuring fast and reliable on-chain trade execution using Rust and Jito bundles.

- Integrated wallet interactions (Turnkey) and blockchain transaction flows to support low-latency trading operations.`,
        skills: ["Rust", "Jito", "Turnkey", "Web3", "Solana"],
        isExpanded: true,
      },
    ],
  },
  {
    id: "grumble",
    companyName: "Grumble Studio",
    positions: [
      {
        id: "1",
        title: "Fullstack Blockchain Engineer",
        employmentPeriod: {
          start: "08.2025",
          end: "12.2025",
        },
        employmentType: "Remote",
        icon: <CodeXmlIcon />,
        description: `- Led end-to-end development of a real-time world map game — designed system architecture, built the Next.js frontend, and implemented a NestJS + Prisma + PostgreSQL + Redis backend optimized for performance, scalability, and low-latency interactions.

- Shipped room-based real-time chat using Supabase Realtime, Redis Streams for message queuing, and background workers for persistence and data seeding, ensuring high reliability under real-time load.

- Built RugRumble, a Web3 gaming platform, where I:
  - Designed and implemented upgradeable EVM smart contracts
  - Developed the fullstack application using Next.js, NestJS, and Supabase
  - Implemented on-chain data indexing using The Graph (subgraphs) for efficient querying and real-time updates
  - Handled complete smart contract ↔ backend ↔ frontend integration`,
        skills: [
          "Next.js",
          "NestJS",
          "Prisma",
          "PostgreSQL",
          "Redis",
          "Supabase",
          "Smart Contracts",
          "The Graph",
          "Web3",
        ],
        isExpanded: false,
      },
    ],
  },
]

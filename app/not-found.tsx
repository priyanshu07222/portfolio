"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl sm:text-8xl font-bold">404</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold">Block Not Found</h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Looks like this page got lost in the blockchain. The transaction couldn't be verified on this network.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}


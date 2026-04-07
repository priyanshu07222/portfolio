"use client"

import { Send } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { UTM_PARAMS } from "@/config/site"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"
import { addQueryParams } from "@/utils/url"

import {
  Panel,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
} from "./panel"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:priyanshu16181389@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`
    window.location.href = mailtoLink
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Panel id="contact">
      <PanelHeader>
        <PanelTitle>Get In Touch</PanelTitle>
        <PanelDescription>
          Let&apos;s discuss your next blockchain project or collaboration
          opportunity
        </PanelDescription>
      </PanelHeader>

      <PanelContent className="space-y-8 px-4 pb-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-lg font-semibold">Send a Message</h3>
              <p className="text-sm text-muted-foreground">
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
              />
              <Button type="submit" className="w-full gap-2">
                <Send className="size-4" />
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={addQueryParams(link.href, UTM_PARAMS)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-line bg-muted/20 p-3 text-sm font-medium transition-colors hover:bg-muted/40"
                  >
                    <Image
                      src={link.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="size-6 shrink-0 rounded-md"
                      unoptimized
                    />
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-line bg-muted/30 p-4">
              <h3 className="mb-2 text-lg font-semibold">
                Let&apos;s Build Together
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                I&apos;m always interested in discussing new opportunities,
                innovative projects, and potential collaborations in the
                blockchain space.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Smart Contract Development</li>
                <li>• DeFi Protocol Architecture</li>
                <li>• Cross-Chain Solutions</li>
                <li>• Technical Consulting</li>
              </ul>
            </div>
          </div>
        </div>
      </PanelContent>
    </Panel>
  )
}

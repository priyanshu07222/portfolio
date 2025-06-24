"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Twitter, Mail, Send, Instagram } from "lucide-react"
import Link from "next/link"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    const mailtoLink = `mailto:priyanshu16181389@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/priyanshu07222",
      label: "View my code repositories",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/priyanshueth",
      label: "Connect on LinkedIn",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/priyanshudotsol",
      label: "Follow on Twitter",
    },
    {
        name: "Instagram",
        icon: Instagram,
        href: "https://www.instagram.com/priyanshuu.eth/",
        label: "Follow on Instagram",
      },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:priyanshu16181389@gmail.com",
      label: "Send me an email",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next blockchain project or collaboration opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background/50"
                  />
                </div>
                <Button type="submit" className="w-full bg-white text-black cursor-pointer hover:bg-gray-200">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors group"
                    >
                      <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{social.name}</span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Let's Build Together</h3>
                <p className="text-muted-foreground mb-4">
                  I'm always interested in discussing new opportunities, innovative projects, and potential
                  collaborations in the blockchain space.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Smart Contract Development</li>
                  <li>• DeFi Protocol Architecture</li>
                  <li>• Cross-Chain Solutions</li>
                  <li>• Technical Consulting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

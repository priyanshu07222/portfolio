import { SITE_INFO } from "@/config/site"
import { getAllDocs } from "@/features/doc/data/documents"

const allPosts = getAllDocs()

const content = `# ${SITE_INFO.name}

> ${SITE_INFO.description}

- [About](${SITE_INFO.url}/about.md): Introduction, tech stack, and how to connect.
- [Experience](${SITE_INFO.url}/experience.md): Work history and roles.
- [Projects](${SITE_INFO.url}/projects.md): Selected projects.
- [Awards](${SITE_INFO.url}/awards.md): Awards and honors.
- [Certifications](${SITE_INFO.url}/certifications.md): Credentials.

## Blog

${allPosts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/blog/${item.slug}.mdx): ${item.metadata.description}`).join("\n")}

---

Full index: [llms-full.txt](${SITE_INFO.url}/llms-full.txt)
`

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}

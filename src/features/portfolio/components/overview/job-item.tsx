import { BriefcaseBusinessIcon, CodeXmlIcon, LightbulbIcon } from "lucide-react"

import { UTM_PARAMS } from "@/config/site"
import { addQueryParams } from "@/utils/url"

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item"

type JobItemProps = {
  title: string
  company: string
  website: string
  experienceId?: string
  /** Highlights this row as a role you’ve already left. */
  isPast?: boolean
}

export function JobItem({
  title,
  company,
  website,
  experienceId,
  isPast,
}: JobItemProps) {
  return (
    <IntroItem
      {...(isPast
        ? {
            "aria-label": `Former role: ${title} at ${company}`,
          }
        : {})}
    >
      <IntroItemIcon>{getJobIcon(title)}</IntroItemIcon>

      <IntroItemContent className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1">
        <span>
          {title} @
          <IntroItemLink
            className="ml-0.5 font-medium"
            {...(experienceId
              ? {
                  href: `#experience-${experienceId}`,
                  target: "_self",
                  rel: "",
                }
              : {
                  href: addQueryParams(website, UTM_PARAMS),
                })}
          >
            {company}
          </IntroItemLink>
        </span>
        {isPast ? (
          <span
            className="shrink-0 rounded-md border border-line bg-muted/40 px-1.5 py-px font-mono text-[10px] tracking-wide text-muted-foreground uppercase"
            title="No longer in this role"
          >
            Former
          </span>
        ) : null}
      </IntroItemContent>
    </IntroItem>
  )
}

function getJobIcon(title: string) {
  if (/(developer|engineer)/i.test(title)) {
    return <CodeXmlIcon />
  }

  if (/(founder|co-founder)/i.test(title)) {
    return <LightbulbIcon />
  }

  return <BriefcaseBusinessIcon />
}

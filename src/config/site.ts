import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://priyanshutiwari.dev",
  ogImage: USER.ogImage,
  description:
    "Building scalable and secure decentralized applications. Experienced in Solana, Ethereum, Rust, TypeScript, and modern web technologies.",
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#fafafa",
  dark: "#0c1220",
}

export const MAIN_NAV: NavItem[] = []

export const MOBILE_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
]

export const X_USERNAME = "@priyanshudotsol"
export const GITHUB_USERNAME = "priyanshudotsol"
export const SOURCE_CODE_GITHUB_REPO = "priyanshudotsol/noyeah-contract"
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/priyanshudotsol/noyeah-contract"

export const SPONSORSHIP_URL = "https://github.com/sponsors/priyanshudotsol"

/** Empty so outbound links stay clean (no `?utm_source=...`). */
export const UTM_PARAMS: Record<string, string> = {}

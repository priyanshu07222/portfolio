"use client"

import { CopyIcon } from "lucide-react"
import { toast } from "sonner"

import { copyText } from "@/utils/copy"

import { PortfolioMark } from "./portfolio-mark"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu"

export function BrandContextMenu({ children }: { children: React.ReactNode }) {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-fit">
        <ContextMenuItem
          onClick={() => {
            copyText("PT")
            toast.success("Copied")
          }}
        >
          <CopyIcon className="size-4" />
          Copy initials
        </ContextMenuItem>

        <ContextMenuItem
          onClick={() => {
            const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 48"><text x="0" y="36" font-family="ui-monospace,monospace" font-size="36" font-weight="700">PT</text></svg>`
            copyText(svg)
            toast.success("SVG copied")
          }}
        >
          <PortfolioMark
            coverMarkId={false}
            className="pointer-events-none h-6 w-12 text-sm"
          />
          Copy mark as SVG
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

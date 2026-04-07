import { cn } from "@/lib/utils"

export function PortfolioMark(
  props: React.ComponentProps<"div"> & { coverMarkId?: string | false }
) {
  const { className, coverMarkId = "js-cover-mark", ...rest } = props
  return (
    <div
      {...(coverMarkId ? { id: coverMarkId } : {})}
      className={cn(
        "font-mono text-3xl font-bold tracking-tighter sm:text-4xl",
        className
      )}
      {...rest}
    >
      PT
    </div>
  )
}

export function PortfolioMarkHeader(props: React.ComponentProps<"div">) {
  const { className, ...rest } = props
  return (
    <div
      className={cn(
        "font-mono text-xl font-bold tracking-tighter sm:text-2xl",
        className
      )}
      {...rest}
    >
      PT
    </div>
  )
}

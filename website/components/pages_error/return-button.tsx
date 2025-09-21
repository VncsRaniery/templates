"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import type { ComponentProps } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface ReturnButtonProps extends ComponentProps<typeof Button> {
  short?: boolean
}

export function ReturnButton({ variant = "ghost", short = false, children, className, ...props }: ReturnButtonProps) {
  const router = useRouter()

  return (
    <Button
      variant={variant}
      onClick={() => router.back()}
      className={cn(
        "group transition-all duration-200 hover:scale-105",
        variant === "ghost" && "hover:bg-accent/50",
        className,
      )}
      {...props}
    >
      <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform duration-200" />
      {short ? null : children || "Retornar"}
    </Button>
  )
}

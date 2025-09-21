"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface CopyButtonProps {
  text: string
  className?: string
}

export default function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <Button
      onClick={handleCopy}
      variant="outline"
      size="sm"
      className={cn(
        "font-mono text-xs transition-all duration-200 hover:bg-accent/10",
        copied && "bg-green-50 border-green-200 text-green-700",
        className,
      )}
    >
      {copied ? (
        <>
          <Check className="w-3 h-3 mr-2" />
          Copiado!
        </>
      ) : (
        <>
          <Copy className="w-3 h-3 mr-2" />
          {text}
        </>
      )}
    </Button>
  )
}


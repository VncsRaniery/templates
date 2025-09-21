"use client"

import { Construction, Wrench, Hammer, Cog, Code, ArrowRight } from "lucide-react"
import { ReturnButton } from "@/components/pages_error/return-button"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Error501({
  description = "Esta funcionalidade ainda não foi implementada. Estamos trabalhando nisso!",
}: {
  description?: string
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [commandText, setCommandText] = useState("")
  const [progress, setProgress] = useState(0)
  const fullCommand = "npm run build --feature"

  useEffect(() => {
    setIsVisible(true)

    // Animação de digitação do comando
    let i = 0
    const typeCommand = () => {
      if (i < fullCommand.length) {
        setCommandText(fullCommand.slice(0, i + 1))
        i++
        setTimeout(typeCommand, 110)
      }
    }

    // Simulação de progresso de desenvolvimento
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1))
    }, 100)

    setTimeout(typeCommand, 1000)

    return () => clearInterval(progressInterval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-background via-background to-yellow-500/5">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div
        className={`relative z-10 max-w-2xl mx-auto text-center space-y-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Ícone principal com animação */}
        <div className="relative">
          <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl border border-yellow-500/20 backdrop-blur-sm">
            <Construction className="w-10 h-10 text-yellow-500 animate-bounce" />
          </div>

          {/* Partículas flutuantes */}
          <div className="absolute -top-2 -right-2">
            <Wrench className="w-5 h-5 text-yellow-500/60 animate-pulse" />
          </div>
          <div className="absolute -bottom-1 -left-1">
            <Hammer className="w-4 h-4 text-orange-500/60 animate-bounce delay-500" />
          </div>
        </div>

        {/* Título principal */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3 text-yellow-500/80">
            <Cog className="w-5 h-5 animate-spin" />
            <span className="text-sm font-mono tracking-wider uppercase">Em desenvolvimento</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Funcionalidade
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              em construção
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-md mx-auto text-balance">{description}</p>
        </div>

        {/* Terminal simulado */}
        <div className="bg-card/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <span className="text-xs text-muted-foreground ml-2">development.log</span>
          </div>

          <div className="font-mono text-sm space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-yellow-500">$</span>
              <span className="text-foreground">{commandText}</span>
              <span className="w-2 h-4 bg-yellow-500 animate-pulse" />
            </div>

            {/* Barra de progresso */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-yellow-500/70">
                <span>Implementando...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-muted/50 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sugestões de ação */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <ReturnButton className="group bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2.5 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg">
            <span>Voltar</span>
          </ReturnButton>

          <Button
            variant="outline"
            className="group px-6 py-2.5 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:bg-yellow-500/10 bg-transparent border-yellow-500/20"
          >
            <Code className="w-4 h-4 mr-2 group-hover:animate-pulse" />
            Ver Roadmap
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Código de erro estilizado */}
        <div className="pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 rounded-full text-sm text-yellow-500/70 font-mono">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
            ERROR_501_NOT_IMPLEMENTED
          </div>
        </div>
      </div>
    </div>
  )
}

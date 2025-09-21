"use client";

import {
  Terminal,
  Package,
  Download,
  Sparkles,
  Code2,
  ArrowRight,
} from "lucide-react";
import { ReturnButton } from "@/components/pages_error/return-button";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function NotFoundPage({
  description = "O template que você procura pode ter sido movido ou não existe mais.",
}: {
  description?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [commandText, setCommandText] = useState("");
  const fullCommand = "npx create-templates-vncsraniery@latest";

  useEffect(() => {
    setIsVisible(true);

    // Animação de digitação do comando
    let i = 0;
    const typeCommand = () => {
      if (i < fullCommand.length) {
        setCommandText(fullCommand.slice(0, i + 1));
        i++;
        setTimeout(typeCommand, 100);
      }
    };

    setTimeout(typeCommand, 1000);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-background via-background to-muted/20">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div
        className={`relative z-10 max-w-2xl mx-auto text-center space-y-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Ícone principal com animação */}
        <div className="relative">
          <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border/50 backdrop-blur-sm">
            <Package className="w-10 h-10 text-primary animate-bounce" />
          </div>

          {/* Partículas flutuantes */}
          <div className="absolute -top-2 -right-2">
            <Sparkles className="w-5 h-5 text-primary/60 animate-pulse" />
          </div>
          <div className="absolute -bottom-1 -left-1">
            <Code2 className="w-4 h-4 text-accent/60 animate-pulse delay-500" />
          </div>
        </div>

        {/* Título principal */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3 text-primary/80">
            <Terminal className="w-5 h-5" />
            <span className="text-sm font-mono tracking-wider uppercase">
              Template não encontrado
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Ops! Este template
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              não existe
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-md mx-auto text-balance">
            {description}
          </p>
        </div>

        {/* Terminal simulado */}
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <span className="text-xs text-muted-foreground ml-2">terminal</span>
          </div>

          <div className="font-mono text-sm">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <span className="text-primary">$</span>
              <span className="text-foreground">{commandText}</span>
              <span className="w-2 h-4 bg-primary animate-pulse" />
            </div>
            <div className="text-xs text-muted-foreground">
              Experimente nossos templates disponíveis
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
            className="group px-6 py-2.5 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:bg-accent/50 bg-transparent"
          >
            <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
            Explorar Templates
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Código de erro estilizado */}
        <div className="pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full text-sm text-muted-foreground font-mono">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            ERROR_404_TEMPLATE_NOT_FOUND
          </div>
        </div>
      </div>
    </div>
  );
}

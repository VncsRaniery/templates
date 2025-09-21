"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";
import { TEMPLATES } from "@/utils/constants/templates";

export function Footer() {
  // Obter os 4 templates mais recentes baseados na data de lastUpdated
  const recentTemplates = TEMPLATES
    .sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
    .slice(0, 4);

  return (
    <footer className="bg-gradient-to-t from-muted/30 to-background border-t border-border/50">
      <MaxWidthWrapper>
        <div className="py-12">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full"
            >
              <Heart className="h-4 w-4" />
              Conecte-se Comigo
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-primary mb-4">
                QuickStart UI - Templates
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md text-pretty leading-relaxed">
                Crie seus projetos de forma simples e eficiente. Templates de
                alta qualidade e totalmente personalizáveis.
              </p>
              <div className="flex gap-2">
                <Link
                  href="https://github.com/vncsraniery"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary/5 border-border/50 bg-transparent"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/viniciusraniey/"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary/5 border-border/50 bg-transparent"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </Link>
                <Link
                  href="mailto:viniciusraniey@outlook.com"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary/5 border-border/50 bg-transparent"
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Templates Recentes</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {recentTemplates.map((template) => (
                  <li key={template.id}>
                    <Link
                      href={`/template/${template.id}`}
                      className="hover:text-primary transition-colors"
                    >
                      {template.title}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    href="/templates"
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    Ver todos os templates →
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Páginas</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/termos"
                    className="hover:text-primary transition-colors"
                  >
                    Termos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacidade"
                    className="hover:text-primary transition-colors"
                  >
                    Privacidade
                  </Link>
                </li>
                <li>
                  <Link
                    href="/documentacao"
                    className="hover:text-primary transition-colors"
                  >
                    Documentação
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} VncsRaniery. Todos os direitos
              reservados.
            </p>

            <div className="flex items-center gap-6">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}

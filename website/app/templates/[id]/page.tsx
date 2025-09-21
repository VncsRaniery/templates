"use client";

import { notFound, useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Download,
  Eye,
  Code,
  Palette,
  Star,
  Calendar,
  Users,
  Zap,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import Container from "@/components/global/animation-container";
import CopyButton from "@/components/ui/copy-button";
import { TEMPLATES } from "@/utils";

export default function TemplatePage() {
  const params = useParams();
  const router = useRouter();
  const template = TEMPLATES.find((t) => t.id === params.id);

  if (!template) {
    notFound();
  }

  const handleBackClick = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-muted/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-muted/2 rounded-full blur-3xl" />
      </div>

      <MaxWidthWrapper className="relative z-10">
        <Container>
          {/* Back Navigation */}
          <div className="pt-8 pb-4">
            <button
              onClick={handleBackClick}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm font-medium">Voltar</span>
            </button>
          </div>

          {/* Hero Section */}
          <div className="py-8 lg:py-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Template Info */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="px-3 py-1 text-xs font-medium"
                    >
                      {template.category}
                    </Badge>
                    {template.featured && (
                      <Badge
                        variant="outline"
                        className="px-2 py-1 text-xs font-medium"
                      >
                        <Star className="w-3 h-3 mr-1" />
                        Destaque
                      </Badge>
                    )}
                  </div>

                  <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                    {template.name}
                  </h1>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {template.description}
                  </p>
                </div>

                {/* Template Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="bg-card border rounded-lg p-3 text-center">
                    <div className="flex items-center justify-center w-6 h-6 bg-muted rounded-md mx-auto mb-2">
                      <Calendar className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      Atualizado
                    </p>
                    <p className="text-sm font-medium">
                      {template.lastUpdated}
                    </p>
                  </div>

                  <div className="bg-card border rounded-lg p-3 text-center">
                    <div className="flex items-center justify-center w-6 h-6 bg-muted rounded-md mx-auto mb-2">
                      <Zap className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      Dificuldade
                    </p>
                    <p className="text-sm font-medium">{template.difficulty}</p>
                  </div>

                  <div className="bg-card border rounded-lg p-3 text-center">
                    <div className="flex items-center justify-center w-6 h-6 bg-muted rounded-md mx-auto mb-2">
                      <CheckCircle className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">Preço</p>
                    <p className="text-sm font-medium">{template.price}</p>
                  </div>

                  <div className="bg-card border rounded-lg p-3 text-center">
                    <div className="flex items-center justify-center w-6 h-6 bg-muted rounded-md mx-auto mb-2">
                      <Users className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      Tecnologias
                    </p>
                    <p className="text-sm font-medium">
                      {template.tags.length}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Tecnologias utilizadas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {template.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="px-2 py-1 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="flex-1" asChild>
                    <a
                      href={template.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      Ver Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={template.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Code className="w-4 h-4" />
                      Ver Código
                    </a>
                  </Button>
                </div>
              </div>

              {/* Template Preview */}
              <div className="h-full">
                <div className="relative group h-full">
                  <div className="mx-auto rounded-[40px] border p-2 shadow-sm h-full">
                    <div className="relative overflow-hidden rounded-[38px] border bg-background shadow-sm h-full">
                      <div className="h-full min-h-[400px] relative">
                        <Image
                          src={template.image || "/placeholder.svg"}
                          alt={template.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="bg-white/90 text-black hover:bg-white"
                              asChild
                            >
                              <Link
                                href={template.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Eye className="w-4 h-4 mr-1" />
                                Demo
                              </Link>
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                              asChild
                            >
                              <Link
                                href={template.codeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Code className="w-4 h-4 mr-1" />
                                Código
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Install Command Section */}
          <div className="py-8">
            <div className="bg-card border rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-muted-foreground" />
                <h3 className="font-medium">Instalação</h3>
              </div>

              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <div className="min-w-0">
                  <CopyButton
                    text={template.installCommand}
                    className="w-full justify-start text-sm font-mono whitespace-nowrap"
                  />
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                Execute o comando acima no seu terminal para criar um novo
                projeto com este template.
              </p>
            </div>
          </div>

          {/* Detailed Description Section */}
          <div className="py-12 border-t">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold text-foreground">
                  Sobre este template
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  {template.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-card border rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Palette className="w-4 h-4 text-muted-foreground" />
                    <h3 className="font-medium">Recursos inclusos</h3>
                  </div>

                  <ul className="space-y-3">
                    {template.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Additional Info Card */}
                <div className="bg-muted/50 border rounded-lg p-4">
                  <h4 className="font-medium text-sm text-muted-foreground mb-3">
                    Informações do template
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Categoria
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {template.category}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Dificuldade
                      </span>
                      <span className="text-sm font-medium">
                        {template.difficulty}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Preço
                      </span>
                      <span className="text-sm font-medium">
                        {template.price}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Tecnologias
                      </span>
                      <span className="text-sm font-medium">
                        {template.tags.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </MaxWidthWrapper>
    </main>
  );
}
import Container from "@/components/global/animation-container";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CircleQuestionMark,
  Eye,
  Sparkles,
  Star,
} from "lucide-react";
import React from "react";
import DecorativeElements from "@/components/ui/decorative-elements";
import LogoDevelopers from "@/components/ui/logo-developers";
import Features from "@/components/features";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FAQS, TEMPLATES } from "@/utils";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      {/* Seção Hero  */}
      <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
        <MaxWidthWrapper className="text-center relative z-10 flex flex-col items-center justify-center min-h-screen py-20">
          <Container delay={0.1}>
            <div className="mb-8">
              <Badge
                variant="secondary"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full"
              >
                <Sparkles className="h-4 w-4" />
                Alta qualidade e versatilidade
              </Badge>
            </div>
          </Container>

          <Container delay={0.2}>
            <div className="mb-8">
              <h1
                id="main-title"
                className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              >
                Crie <strong>projetos</strong> <span>&</span> <br />
                <strong>webistes</strong>{" "}
                <em className="italic">de maneira simples</em>
              </h1>
            </div>
          </Container>

          <Container delay={0.3}>
            <div className="mb-12">
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Navegue pelos templates e crie seus projetos de forma simples e
                eficiente. Templates de alta qualidade e totalmente
                personalizáveis.
              </p>
            </div>
          </Container>

          <Container delay={0.4}>
            <div className="flex flex-col items-center gap-6 mb-16">
              {/* Decorative Elements */}
              <DecorativeElements />

              {/* Get started button */}
              <div className="flex items-center justify-center">
                <Link href="/templates">
                  <div className="group cursor-pointer border border-border bg-card gap-2 h-[60px] flex items-center p-[10px] rounded-full">
                    <div className="border border-border bg-secondary/70 h-[40px] rounded-full flex items-center justify-center text-secondary-foreground">
                      <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-globe animate-spin"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                        Explorar Templates
                      </p>
                    </div>
                    <div className="text-muted-foreground group-hover:ml-4 ease-in-out transition-all size-[24px] flex items-center justify-center rounded-full border-2 border-border">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right group-hover:rotate-180 ease-in-out transition-all"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </Container>

          <Container delay={0.5}>
            <div className="mt-auto">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-6">
                  Feito através das seguintes tecnologias
                </p>
                <LogoDevelopers />
              </div>
            </div>
          </Container>
        </MaxWidthWrapper>
      </section>

      {/* Seção Sobre */}
      <section
        id="sobre"
        className="text-foreground relative overflow-hidden py-12 sm:py-16 md:py-20 bg-background"
      >
        <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none"></div>
        <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent transition-all ease-in-out"></div>
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <MaxWidthWrapper className="relative z-10">
          <Container delay={0.1}>
            <div className="text-center mb-16">
              <div className="text-center mb-12">
                <Badge
                  variant="secondary"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full"
                >
                  <Sparkles className="h-4 w-4" />
                  Sobre
                </Badge>
              </div>
              <h2 className="via-foreground mb-8 bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]">
                Simplificando o <em className="italic">desenvolvimento</em>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Conectamos desenvolvedores aos melhores templates da comunidade, 
                organizados e prontos para uso.
              </p>
            </div>
          </Container>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Conteúdo principal */}
            <Container delay={0.2}>
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      Qualidade garantida
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Cada template passa por curadoria rigorosa, garantindo código limpo, 
                      design moderno e compatibilidade com as melhores práticas.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      Totalmente gratuito
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Todos os templates são open source e gratuitos para uso pessoal e comercial.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm font-medium text-foreground">Código Limpo</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm font-medium text-foreground">Design Moderno</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm font-medium text-foreground">Open Source</span>
                  </div>
                </div>
              </div>
            </Container>

            {/* Cards de estatísticas */}
            <Container delay={0.3}>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center border border-border/20 shadow-sm bg-card/40 backdrop-blur-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">1+</div>
                  <div className="text-sm text-muted-foreground">Templates</div>
                </Card>
                <Card className="p-6 text-center border border-border/20 shadow-sm bg-card/40 backdrop-blur-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                  <div className="text-sm text-muted-foreground">Em desenvolvimento</div>
                </Card>
                <Card className="p-6 text-center border border-border/20 shadow-sm bg-card/40 backdrop-blur-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-sm text-muted-foreground">Gratuito</div>
                </Card>
                <Card className="p-6 text-center border border-border/20 shadow-sm bg-card/40 backdrop-blur-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                  <div className="text-sm text-muted-foreground">Tecnologias</div>
                </Card>
              </div>
            </Container>
          </div>

          {/* Valores simplificados */}
          <Container delay={0.4}>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-8">
                Por que escolher nossa plataforma?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">Qualidade</h4>
                  <p className="text-muted-foreground text-sm">
                    Templates otimizados e testados.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">Comunidade</h4>
                  <p className="text-muted-foreground text-sm">
                    Suporte ativo e colaboração entre desenvolvedores.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">Inovação</h4>
                  <p className="text-muted-foreground text-sm">
                    Tecnologias modernas e tendências atualizadas.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </MaxWidthWrapper>
      </section>

      {/* Seção de Features */}
      <section className="text-foreground relative overflow-hidden py-12 sm:py-16 md:py-20 bg-background">
        <MaxWidthWrapper>
          <Features />
        </MaxWidthWrapper>
      </section>

      {/* Seção de Templates */}
      <section
        id="templates"
        className="text-foreground relative overflow-hidden py-12 sm:py-16 md:py-20 bg-background"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <MaxWidthWrapper className="relative z-10">
          <Container delay={0.1}>
            <div className="text-center mb-20">
              <div className="text-center mb-12">
                <Badge
                  variant="secondary"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full"
                >
                  <Star className="h-4 w-4" />
                  Templates em Destaque
                </Badge>
              </div>
              <h2 className="via-foreground mb-8 bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]">
                Templates <em className="italic">disponíveis</em>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Coleção curada de templates profissionais, cada um projetado com
                precisão e atenção aos detalhes para elevar seus projetos ao
                próximo nível.
              </p>
            </div>
          </Container>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
            {TEMPLATES.slice(0, 6).map((template, index) => (
              <Container key={template.id} delay={0.1 + index * 0.1}>
                <Card className="group hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border border-border/20 shadow-sm bg-card/40 backdrop-blur-sm overflow-hidden p-0">
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] relative w-full">
                      <Image
                        src={template.image || "/placeholder.svg"}
                        alt={template.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        width={500}
                        height={500}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link href={`/templates/${template.id}`}>
                          <Button
                            size="sm"
                            className="backdrop-blur-md bg-white/20 border-white/30 text-white hover:bg-white/30"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Ver
                          </Button>
                        </Link>
                      </div>
                      <Badge className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-white border-0 text-xs">
                        {template.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-5">
                    <div className="space-y-3">
                      <div>
                        <Link
                          href={`/templates/${template.id}`}
                          className="group-hover:text-primary transition-colors duration-300"
                        >
                          <h3 className="font-semibold text-lg mb-1 line-clamp-1">
                            {template.title}
                          </h3>
                        </Link>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {template.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {template.tags.slice(0, 2).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs border-border/30 bg-muted/20 px-2 py-0.5"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {template.tags.length > 2 && (
                          <Badge
                            variant="outline"
                            className="text-xs border-border/30 bg-muted/20 px-2 py-0.5"
                          >
                            +{template.tags.length - 2}
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>Atualizado em:</span>
                          <span className="font-medium text-foreground">
                            {new Date(template.lastUpdated).toLocaleDateString('pt-BR')}
                          </span>
                        </div>
                        <Link href={`/templates/${template.id}`}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-primary hover:text-primary/80 hover:bg-primary/5 text-xs h-7 px-3"
                          >
                            Explorar
                            <ArrowRight className="w-3 h-3 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Container>
            ))}
          </div>

          <Container delay={0.8}>
            <div className="flex items-center justify-center">
              <Link href="/templates">
                <div className="group cursor-pointer border border-border bg-card gap-2 h-[60px] flex items-center p-[10px] rounded-full">
                  <div className="border border-border bg-secondary/70 h-[40px] rounded-full flex items-center justify-center text-secondary-foreground">
                    <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-globe animate-spin"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      Ver Todos os Templates
                    </p>
                  </div>
                  <div className="text-muted-foreground group-hover:ml-4 ease-in-out transition-all size-[24px] flex items-center justify-center rounded-full border-2 border-border">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right group-hover:rotate-180 ease-in-out transition-all"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </Container>
        </MaxWidthWrapper>
      </section>

      {/* FAQs Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <MaxWidthWrapper>
        <Container delay={0.1}>
          <div id="faqs" className="text-center mb-20">
            <div className="text-center mb-12">
              <Badge
                variant="secondary"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full"
              >
                <CircleQuestionMark className="h-4 w-4" />
                FAQs
              </Badge>
            </div>
            <h2 className="via-foreground mb-8 bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]">
              Perguntas Frequentes
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Respostas rápidas para as suas principais dúvidas sobre nossa
              plataforma.
            </p>
          </div>
        </Container>
        <Container delay={0.2} className="mt-12">
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-3xl mx-auto space-y-4"
          >
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border/50 rounded-xl px-6 py-2 bg-card/60 backdrop-blur-lg shadow-md hover:bg-card/80 transition-colors duration-300"
              >
                <AccordionTrigger className="text-lg md:text-xl text-left font-medium text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
        </MaxWidthWrapper>
      </section>

      {/* CTA */}
      <section
        id="cta"
        className="py-12 sm:py-16 md:py-20 w-full bg-background"
      >
        <MaxWidthWrapper>
          <div className="mx-auto max-w-4xl rounded-[40px] border p-2 shadow-sm">
            <div className="relative mx-auto h-[400px] max-w-4xl overflow-hidden rounded-[38px] border bg-background p-2 shadow-sm">
              {/* Subtle radial glow from center */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255, 64, 23, 0.1), transparent 70%)",
                }}
              />
              {/* Film grain overlay */}
              <div className="relative z-10">
                <div className="mt-8 text-center">
                  <h2 className="text-4xl font-bold text-foreground mb-6">
                    Construa. Personalize. Implante rapidamente.
                  </h2>
                  <p className="text-foreground/60 mb-8">
                    Construído para manter você preso.
                  </p>
                  <svg
                    width="100"
                    height="50"
                    viewBox="0 0 100 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-foreground mx-auto mb-4"
                  >
                    <path d="M68.6958 5.40679C67.3329 12.7082 68.5287 20.1216 68.5197 27.4583C68.5189 29.5382 68.404 31.6054 68.1147 33.682C67.9844 34.592 69.4111 34.751 69.5414 33.8411C70.5618 26.5016 69.2488 19.104 69.4639 11.7325C69.5218 9.65887 69.7222 7.6012 70.0939 5.56265C70.1638 5.1949 69.831 4.81112 69.4601 4.76976C69.0891 4.72841 68.7689 5.01049 68.6958 5.40679Z"></path>
                    <path d="M74.0117 26.1349C73.2662 27.1206 72.5493 28.1096 72.0194 29.235C71.5688 30.167 71.2007 31.137 70.7216 32.0658C70.4995 32.5033 70.252 32.9091 69.9475 33.3085C69.8142 33.4669 69.6779 33.654 69.5161 33.8093C69.4527 33.86 68.9199 34.2339 68.9167 34.2624C68.9263 34.1768 69.0752 34.3957 69.0055 34.2434C68.958 34.1515 68.8534 34.0531 68.8058 33.9612C68.6347 33.6821 68.4637 33.403 68.264 33.1208L67.1612 31.3512C66.3532 30.0477 65.5199 28.7126 64.7119 27.4093C64.5185 27.0699 63.9701 27.0666 63.7131 27.2979C63.396 27.5514 63.4053 27.9858 63.6018 28.2966C64.3845 29.5683 65.1956 30.8431 65.9783 32.1149L67.1572 33.9796C67.5025 34.5093 67.8225 35.2671 68.428 35.5368C69.6136 36.0446 70.7841 34.615 71.3424 33.7529C71.9992 32.786 72.4085 31.705 72.9035 30.6336C73.4842 29.3116 74.2774 28.1578 75.1306 26.9818C75.7047 26.2369 74.5573 25.3868 74.0117 26.1349ZM55.1301 12.2849C54.6936 18.274 54.6565 24.3076 55.0284 30.3003C55.1293 31.987 55.2555 33.7056 55.4419 35.4019C55.5431 36.3087 56.9541 36.0905 56.8529 35.1837C56.2654 29.3115 56.0868 23.3982 56.2824 17.4978C56.3528 15.8301 56.4263 14.1339 56.5537 12.4725C56.6301 11.5276 55.2034 11.3686 55.1301 12.2849Z"></path>
                    <path d="M59.2642 30.6571C58.8264 31.475 58.36 32.2896 57.9222 33.1075C57.7032 33.5164 57.4843 33.9253 57.2369 34.3311C57.0528 34.6861 56.8656 35.0697 56.6278 35.3898C56.596 35.4152 56.5611 35.4691 56.5294 35.4944C56.4881 35.6054 56.5041 35.4627 56.5548 35.5261C56.7481 35.6055 56.8337 35.6151 56.7545 35.5484L56.6784 35.4533C56.6023 35.3581 56.5263 35.263 56.4534 35.1393C56.1778 34.7619 55.8734 34.3814 55.5946 34.0324C55.0146 33.2744 54.4315 32.545 53.8515 31.787C53.2685 31.0576 52.1584 31.945 52.7415 32.6744C53.4229 33.5592 54.1042 34.4441 54.7888 35.3004C55.1184 35.7127 55.4321 36.2677 55.8569 36.6039C56.3069 36.9719 56.884 36.9784 57.3533 36.6551C57.7624 36.3542 57.9845 35.9167 58.2067 35.4792C58.4636 34.9878 58.746 34.5282 59.003 34.0369C59.5423 33.0859 60.0563 32.1032 60.5957 31.1522C60.7765 30.8257 60.5104 30.3627 60.2092 30.2135C59.8161 30.112 59.4451 30.3305 59.2642 30.6571ZM44.5918 10.1569L42.2324 37.5406C42.0032 40.1151 41.8057 42.6641 41.5764 45.2386C41.5032 46.1549 42.9299 46.314 43.0032 45.3977L45.3626 18.014C45.5918 15.4396 45.7893 12.8905 46.0186 10.316C46.1235 9.37433 44.6968 9.21532 44.5918 10.1569Z"></path>
                    <path d="M48.101 37.7616C46.7404 38.8232 45.8267 40.2814 44.9163 41.7109C44.0407 43.0866 43.1365 44.4592 41.738 45.3434C42.1247 45.5019 42.5146 45.6321 42.9014 45.7908C42.1324 41.8051 41.04 37.8699 39.6781 34.0203C39.545 33.6589 39.0695 33.5191 38.7365 33.6553C38.3719 33.817 38.2385 34.2353 38.3716 34.5969C39.7209 38.3007 40.7404 42.1121 41.4904 46.009C41.6012 46.5703 42.1877 46.7512 42.6539 46.4565C45.5462 44.6124 46.3877 40.9506 49.0169 38.8748C49.7178 38.2884 48.8304 37.1784 48.101 37.7616ZM25.9671 13.1014C25.7028 16.2497 26.0758 19.3824 26.5091 22.4929C26.9645 25.6636 27.4166 28.863 27.872 32.0337C28.1346 33.8253 28.3971 35.6167 28.631 37.4051C28.7607 38.3151 30.1717 38.0968 30.042 37.1868C29.5866 34.016 29.1281 30.8738 28.7012 27.7062C28.2647 24.6242 27.7396 21.5612 27.449 18.4666C27.2943 16.7449 27.2283 15.0042 27.3653 13.2572C27.4671 12.3442 26.0404 12.1851 25.9671 13.1014Z"></path>
                    <path d="M30.5625 27.3357C29.9525 30.7343 29.3425 34.133 28.704 37.5284C29.1225 37.4018 29.5411 37.2751 29.9882 37.1516C28.6034 35.0617 27.2504 32.9465 25.8655 30.8565C25.6406 30.5425 25.1523 30.517 24.8669 30.7451C24.5497 30.9987 24.5305 31.4299 24.7555 31.7439C26.1403 33.8338 27.4933 35.9491 28.8781 38.039C29.2489 38.6003 30.0417 38.2265 30.1624 37.6621C30.7724 34.2635 31.3824 30.8648 32.0209 27.4694C32.0908 27.1016 31.758 26.7178 31.3871 26.6765C30.9559 26.6573 30.6324 26.9679 30.5625 27.3357Z"></path>
                  </svg>
                  <div className="flex items-center justify-center">
                    <Link href="/newsletter">
                      <div className="group border-border bg-secondary/70 flex h-[64px] cursor-pointer items-center gap-2 rounded-full border p-[11px] mt-10">
                        <div className="border-border bg-background flex h-[43px] items-center justify-center rounded-full border">
                          <p className="mr-3 ml-2 flex items-center justify-center gap-2 font-medium tracking-tight text-foreground">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-globe animate-spin"
                              aria-hidden="true"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                              <path d="M2 12h20"></path>
                            </svg>
                            Fique por dentro das novidades
                          </p>
                        </div>
                        <div className="border-border flex size-[26px] items-center justify-center rounded-full border-2 transition-all ease-in-out group-hover:ml-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-right transition-all ease-in-out group-hover:rotate-45"
                            aria-hidden="true"
                          >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}

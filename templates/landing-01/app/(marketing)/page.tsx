import AnimationContainer from "@/components/global/animation-container";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { RECURSOS } from "@/utils/constants/recursos";
import MagicBadge from "@/components/ui/magic-badge";
import { MagicCard } from "@/components/ui/magic-card";

export default function Home() {
  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      {/* Seção Hero  */}
      <MaxWidthWrapper>
        <div
          id="home"
          className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background"
        >
          <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
            <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
              <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/20"></span>
              <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1">
                ✨ Plataforma Premium Global
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </span>
            </button>
            <h1 className="text-foreground text-center py-6 text-5xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">
              Transforme sua{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-block">
                Experiência
              </span>
            </h1>
            <p className="mb-8 tracking-tight text-muted-foreground text-base text-balance">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br className="hidden md:block" />
              <span className="hidden md:block">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris.
              </span>
            </p>
            <div className="flex items-center justify-center whitespace-nowrap gap-4 z-50">
              <Button asChild>
                <Link href="#recursos" className="flex items-center">
                  Comece agora mesmo
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </AnimationContainer>

          <AnimationContainer
            delay={0.2}
            className="relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full"
          >
            <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>
            <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
              <Image
                src="/placeholder.svg"
                alt="Dashboard"
                width={1200}
                height={1200}
                quality={100}
                className="rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border"
              />
              {/* <BorderBeam size={250} duration={12} delay={9} /> */}
              <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40"></div>
              <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50"></div>
            </div>
          </AnimationContainer>
        </div>
      </MaxWidthWrapper>

      {/* Seção Sobre */}
      <MaxWidthWrapper className="py-20">
        <AnimationContainer delay={0.1}>
          <div
            id="sobre"
            className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-4xl mx-auto"
          >
            <MagicBadge title="Sobre nós" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p className="mt-6 text-center lg:text-center text-base text-muted-foreground max-w-3xl">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium.
            </p>
          </div>
        </AnimationContainer>
      </MaxWidthWrapper>

      {/* Seção de Recursos */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div
            id="recursos"
            className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto"
          >
            <MagicBadge title="Nossos recursos" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Recursos Exclusivos
              <br /> para{" "}
              <span className="font-subheading italic">seu sucesso</span>
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
          {RECURSOS.map((process, id) => (
            <AnimationContainer delay={0.2 * id} key={id}>
              <MagicCard
                gradientFrom="#38bdf8"
                gradientTo="#3b82f6"
                className="p-4 lg:p-6 lg:rounded-3xl"
                gradientColor="rgba(59,130,246,0.1)"
              >
                <div className="flex flex-col items-start justify-center w-full">
                  <process.icon
                    strokeWidth={1.5}
                    className="w-10 h-10 text-foreground"
                  />
                  <div className="flex flex-col relative items-start">
                    <span className="absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
                      {id + 1}
                    </span>
                    <h3 className="text-base mt-6 font-medium text-foreground">
                      {process.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {process.description}
                    </p>
                  </div>
                </div>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Seção de Contatos */}
      <MaxWidthWrapper>
        <div
          id="contato"
          className="relative flex flex-col items-center justify-center w-full py-20"
        >
          <AnimationContainer className="py-20 max-w-6xl mx-auto w-full">
            <div className="relative flex flex-col items-center justify-center py-12 lg:py-20 px-6 sm:px-8 rounded-2xl lg:rounded-3xl bg-background/20 text-center border border-foreground/20 overflow-hidden">
              {/* Efeito de fundo gradiente */}
              <div
                className="absolute -bottom-1/4 left-1/2 -translate-x-1/2 w-full max-w-md h-44 lg:h-52 rounded-full blur-[7rem] lg:blur-[12rem] -z-10"
                style={{
                  background:
                    "conic-gradient(from 0deg at 50% 50%, #a855f7 0deg, #3b82f6 180deg, #06b6d4 360deg)",
                }}
              />
              <div className="z-10 flex flex-col items-center gap-6 md:gap-8 w-full">
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium !leading-tight">
                    Newsletter Global
                  </h2>
                  <p className="text-sm md:text-lg text-accent-foreground/80 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="flex flex-col gap-3 w-full max-w-lg mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Seu melhor e-mail"
                      className="flex-1 px-4 h-12 text-base border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                    />
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground h-12"
                    >
                      Inscrever-se
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Enviamos apenas conteúdo de qualidade. Sem spam, prometido.
                  </p>
                </div>
              </div>
            </div>
          </AnimationContainer>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

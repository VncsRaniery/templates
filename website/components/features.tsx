"use client";

import type React from "react";

import { useTheme } from "next-themes";
import Earth from "@/components/ui/globe";
import ScrambleHover from "@/components/ui/scramble";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { motion, useInView } from "framer-motion";
import { Suspense, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Blocks } from "lucide-react";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { theme } = useTheme();
  const [isHovering, setIsHovering] = useState(false);
  const [isCliCardHovering, setIsCliCardHovering] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [baseColor, setBaseColor] = useState<[number, number, number]>([
    0.906, 0.541, 0.325,
  ]); // #e78a53 in RGB normalized
  const [glowColor, setGlowColor] = useState<[number, number, number]>([
    0.906, 0.541, 0.325,
  ]); // #e78a53 in RGB normalized

  const [dark, setDark] = useState<number>(theme === "dark" ? 1 : 0);

  useEffect(() => {
    setBaseColor([0.906, 0.541, 0.325]); // #e78a53
    setGlowColor([0.906, 0.541, 0.325]); // #e78a53
    setDark(theme === "dark" ? 1 : 0);
  }, [theme]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setInputValue("");
    }
  };

  return (
    <section
      id="recursos"
      className="text-foreground relative py-12 sm:py-24 md:py-32"
    >
      {/* <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none"></div>
      <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent transition-all ease-in-out"></div> */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="container mx-auto flex flex-col items-center gap-6 sm:gap-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-20">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full"
            >
              <Blocks className="h-4 w-4" />
              Recursos Interativos
            </Badge>
          </div>
          <h2 className="via-foreground mb-8 bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]">
            Recursos
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Recursos interativos para melhorar sua experiência de uso para
            projetos Next.js e outras tecnologias. Templates de alta qualidade e
            totalmente personalizáveis.
          </p>
        </div>
        <FollowerPointerCard
          title={
            <div className="flex items-center gap-2">
              <span>✨</span>
              <span>Recursos interativos</span>
            </div>
          }
          className="w-full"
        >
          <div className="cursor-none">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 max-w-7xl mx-auto">
              {/* Global */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(231, 138, 83, 0.6)",
                  boxShadow: "0 0 30px rgba(231, 138, 83, 0.2)",
                }}
                style={{ transition: "all 0.3s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">
                    Utilizável globalmente
                  </h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Os templates estão disponíveis em todos os lugares, mas os
                      nossos são os melhores. Use-os em seu framework favorito
                      ou até mesmo em HTML puro.
                    </p>
                  </div>
                </div>
                <div className="flex min-h-[300px] grow items-start justify-center select-none">
                  <h1 className="mt-8 text-center text-5xl leading-[100%] font-semibold sm:leading-normal lg:mt-12 lg:text-6xl">
                    <span className='bg-background relative mt-3 inline-block w-fit rounded-md border px-1.5 py-0.5 before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-full before:bg-[url("/")] before:opacity-[0.09] before:content-[""]'>
                      <ScrambleHover
                        text="template-01"
                        scrambleSpeed={50}
                        maxIterations={15}
                        useOriginalCharsOnly={false}
                        className="cursor-pointer bg-gradient-to-t from-[#e78a53] to-[#e78a53] bg-clip-text text-transparent transition-all duration-300"
                        isHovering={isHovering}
                        setIsHovering={setIsHovering}
                        characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;':\,./<>?"
                      />
                    </span>
                  </h1>
                  <div className="absolute top-64 z-10 flex items-center justify-center">
                    <div className="w-[400px] h-[400px]">
                      <Suspense
                        fallback={
                          <div className="bg-secondary/20 h-[400px] w-[400px] animate-pulse rounded-full"></div>
                        }
                      >
                        <Earth
                          baseColor={baseColor}
                          markerColor={[0, 0, 0]}
                          glowColor={glowColor}
                          dark={dark}
                        />
                      </Suspense>
                    </div>
                  </div>
                  <div className="absolute top-1/2 w-full translate-y-20 scale-x-[1.2] opacity-70 transition-all duration-1000 group-hover:translate-y-8 group-hover:opacity-100">
                    <div className="from-primary/50 to-primary/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                    <div className="from-primary/30 to-primary/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                  </div>
                </div>
              </motion.div>

              {/* Layouts Dinâmicos */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: 1.0 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(231, 138, 83, 0.6)",
                  boxShadow: "0 0 30px rgba(231, 138, 83, 0.2)",
                }}
                style={{ transition: "all 0.3s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">
                    Layouts Dinâmicos
                  </h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Layouts responsivos que transformam e se adaptam
                      simplismente em todos os tamanhos de dispositivo.
                    </p>
                  </div>
                </div>
                <div className="flex grow items-center justify-center select-none relative min-h-[300px] p-4">
                  <div className="relative w-full max-w-sm">
                    <Image
                      src="/layout-dinamicos.jpg"
                      alt="Layouts Dinâmicos"
                      className="w-full h-auto rounded-lg shadow-lg"
                      width={1000}
                      height={1000}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </motion.div>

              {/* Componentes Inteligentes */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: 1.0 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(231, 138, 83, 0.6)",
                  boxShadow: "0 0 30px rgba(231, 138, 83, 0.2)",
                }}
                style={{ transition: "all 0.3s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">
                    Componentes Inteligentes
                  </h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Componentes inteligentes que se adaptam às suas necessidades com
                      animações e interações embutidas.
                    </p>
                  </div>
                </div>
                <div className="flex grow items-center justify-center select-none relative min-h-[300px] p-4">
                  <div className="w-full max-w-lg">
                    <div className="relative rounded-2xl border border-border bg-background backdrop-blur-sm">
                      <div className="p-4">
                        <Textarea
                          className="w-full min-h-[100px] bg-transparent border-none text-foreground placeholder:text-foreground/50 resize-none focus:outline-none text-base leading-relaxed"
                          placeholder="Pesquise pelo template..."
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyDown={handleKeyDown}
                        />
                      </div>
                      <div className="flex items-center justify-between px-4 pb-4">
                        <div className="flex items-center gap-3">
                          <button className="p-2 rounded-full transition-colors bg-background/50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-foreground/70"
                            >
                              <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                            </svg>
                          </button>
                          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#e78a53] hover:bg-[#e78a53]/90 transition-colors text-foreground font-medium">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                              <path d="M2 12h20"></path>
                            </svg>
                            Search
                          </button>
                        </div>
                        <button className="p-2 rounded-full bg-background hover:bg-background/20 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-foreground/70"
                          >
                            <path d="m22 2-7 20-4-9-9-4Z"></path>
                            <path d="M22 2 11 13"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Instalação CLI */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out"
                onMouseEnter={() => setIsCliCardHovering(true)}
                onMouseLeave={() => setIsCliCardHovering(false)}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: 1.5 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(231, 138, 83, 0.6)",
                  boxShadow: "0 0 30px rgba(231, 138, 83, 0.2)",
                }}
                style={{ transition: "all 0.3s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">
                    Instalação via CLI
                  </h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Baixe e configure templates rapidamente usando nossa CLI.
                      Instale com um simples comando e comece a desenvolver.
                    </p>
                  </div>
                </div>
                <div className="flex grow items-center justify-center select-none relative min-h-[300px] p-4">
                  <div className="w-full max-w-2xl">
                    <div className="bg-black/90 rounded-lg p-6 font-mono text-sm overflow-hidden">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex gap-1">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-xs">Terminal</span>
                      </div>
                      
                      <div className="space-y-3">
                        <motion.div
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <span className="text-green-400">$</span>
                          <motion.span 
                            className="text-white"
                            animate={isCliCardHovering ? { 
                              color: ["#ffffff", "#e78a53", "#ffffff"] 
                            } : {}}
                            transition={{ 
                              duration: 2, 
                              repeat: isCliCardHovering ? Infinity : 0 
                            }}
                          >
                            npx create-templates-vncsraniery@latest
                          </motion.span>
                        </motion.div>
                        
                        <motion.div
                          className="text-gray-400 text-xs ml-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 }}
                        >
                          <motion.span
                            animate={isCliCardHovering ? { 
                              color: ["#9ca3af", "#10b981", "#9ca3af"] 
                            } : {}}
                            transition={{ 
                              duration: 1.5, 
                              repeat: isCliCardHovering ? Infinity : 0 
                            }}
                          >
                            ✓ Baixando templates...
                          </motion.span>
                        </motion.div>
                        
                        <motion.div
                          className="text-gray-400 text-xs ml-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.2 }}
                        >
                          <motion.span
                            animate={isCliCardHovering ? { 
                              color: ["#9ca3af", "#10b981", "#9ca3af"] 
                            } : {}}
                            transition={{ 
                              duration: 1.5, 
                              delay: 0.5,
                              repeat: isCliCardHovering ? Infinity : 0 
                            }}
                          >
                            ✓ Instalando dependências...
                          </motion.span>
                        </motion.div>
                        
                        <motion.div
                          className="text-gray-400 text-xs ml-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.4 }}
                        >
                          <motion.span
                            animate={isCliCardHovering ? { 
                              color: ["#9ca3af", "#10b981", "#9ca3af"] 
                            } : {}}
                            transition={{ 
                              duration: 1.5, 
                              delay: 1,
                              repeat: isCliCardHovering ? Infinity : 0 
                            }}
                          >
                            ✓ Configurando projeto...
                          </motion.span>
                        </motion.div>
                        
                        <motion.div
                          className="flex items-center gap-2 mt-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.6 }}
                        >
                          <span className="text-green-400">$</span>
                          <span className="text-white">cd meu-projeto</span>
                        </motion.div>
                        
                        <motion.div
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.8 }}
                        >
                          <span className="text-green-400">$</span>
                          <motion.span 
                            className="text-white"
                            animate={isCliCardHovering ? { 
                              color: ["#ffffff", "#e78a53", "#ffffff"] 
                            } : {}}
                            transition={{ 
                              duration: 2, 
                              delay: 0.5,
                              repeat: isCliCardHovering ? Infinity : 0 
                            }}
                          >
                            npm run dev
                          </motion.span>
                        </motion.div>
                        
                        <motion.div
                          className="text-green-400 text-xs ml-4 mt-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2 }}
                        >
                          <motion.span
                            animate={isCliCardHovering ? { 
                              scale: [1, 1.05, 1] 
                            } : {}}
                            transition={{ 
                              duration: 2, 
                              repeat: isCliCardHovering ? Infinity : 0 
                            }}
                          >
                            🚀 Servidor rodando em http://localhost:3000
                          </motion.span>
                        </motion.div>
                      </div>
                      
                      {/* Cursor animado */}
                      <motion.div
                        className="inline-block w-2 h-4 bg-green-400 ml-1"
                        animate={isCliCardHovering ? { 
                          opacity: [1, 0, 1],
                          scale: [1, 1.1, 1]
                        } : { opacity: [1, 0, 1] }}
                        transition={{ 
                          duration: isCliCardHovering ? 0.8 : 1, 
                          repeat: Infinity 
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </FollowerPointerCard>
      </motion.div>
    </section>
  );
}

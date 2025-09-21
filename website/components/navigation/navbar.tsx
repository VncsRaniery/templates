"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "system");
    root.classList.add("dark");
  }, []);

  // Efeito para lidar com scroll automático quando chegamos na página inicial com hash
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const elementId = window.location.hash.substring(1); // Remove o #
      setTimeout(() => {
        scrollToSection(elementId);
      }, 100);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = 100; // Account for fixed header height + margin
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  const navigateToSection = (elementId: string) => {
    // Se não estivermos na página inicial, redirecionamos primeiro
    if (pathname !== "/") {
      router.push(`/#${elementId}`);
    } else {
      // Se já estivermos na página inicial, apenas fazemos scroll
      scrollToSection(elementId);
    }
  };

  const handleNavClick = (elementId: string) => {
    if (elementId === "/") {
      // Para o botão "Início", sempre vai para a página inicial
      router.push("/");
    } else {
      navigateToSection(elementId);
    }
  };

  const handleMobileNavClick = (elementId: string) => {
    setIsMobileMenuOpen(false);
    
    if (elementId === "/") {
      // Para o botão "Início", sempre vai para a página inicial
      router.push("/");
    } else {
      // Para outras seções, navega e depois faz scroll
      setTimeout(() => {
        navigateToSection(elementId);
      }, 100);
    }
  };

  return (
    <div>
      {/* Desktop Header */}
      <header
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] hidden w-full flex-row items-center justify-between self-start rounded-full bg-background/80 md:flex backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-500 ease-out ${
          isScrolled
            ? "max-w-3xl px-2 py-2 scale-95"
            : "max-w-5xl px-4 py-3 scale-100"
        }`}
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          perspective: "1000px",
        }}
      >
        <Link
          className="group relative flex items-center justify-center gap-2 transition-all duration-300"
          href="/"
          aria-label="Voltar para a página inicial"
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-all duration-300 group-hover:scale-105"
          >
            {/* Fundo do logo, agora com cantos arredondados */}
            <rect x="5" y="5" width="40" height="40" rx="10" fill="#333333" />

            {/* Elementos internos mais simples e minimalistas */}
            {/* Um "C" estilizado para um design mais limpo */}
            <path
              d="M25 15C30.5228 15 35 19.4772 35 25C35 30.5228 30.5228 35 25 35"
              stroke="#E0E0E0"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Uma linha vertical sutil no centro */}
            <line
              x1="25"
              y1="15"
              x2="25"
              y2="35"
              stroke="#E0E0E0"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </Link>

        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-muted-foreground transition duration-200 hover:text-foreground md:flex md:space-x-2">
          <button
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer hover:scale-105"
            onClick={() => handleNavClick("/")}
          >
            <span className="relative z-20">Início</span>
          </button>
          <button
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer hover:scale-105"
            onClick={() => handleNavClick("sobre")}
          >
            <span className="relative z-20">Sobre</span>
          </button>
          <button
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer hover:scale-105"
            onClick={() => handleNavClick("recursos")}
          >
            <span className="relative z-20">Recursos</span>
          </button>
          <button
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer hover:scale-105"
            onClick={() => handleNavClick("templates")}
          >
            <span className="relative z-20">Templates</span>
          </button>
          <button
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer hover:scale-105"
            onClick={() => handleNavClick("faqs")}
          >
            <span className="relative z-20">FAQs</span>
          </button>
          <button
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer hover:scale-105"
            onClick={() => handleNavClick("cta")}
          >
            <span className="relative z-20">CTA</span>
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className={`fixed top-4 left-4 right-4 z-[9999] flex w-auto flex-row items-center justify-between rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg md:hidden px-4 py-3 transition-all duration-500 ease-out ${
          isScrolled ? "scale-95" : "scale-100"
        }`}
      >
        <Link
          className="flex items-center justify-center gap-2"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-all duration-300 group-hover:scale-105"
          >
            {/* Fundo do logo, agora com cantos arredondados */}
            <rect x="5" y="5" width="40" height="40" rx="10" fill="#333333" />

            {/* Elementos internos mais simples e minimalistas */}
            {/* Um "C" estilizado para um design mais limpo */}
            <path
              d="M25 15C30.5228 15 35 19.4772 35 25C35 30.5228 30.5228 35 25 35"
              stroke="#E0E0E0"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Uma linha vertical sutil no centro */}
            <line
              x1="25"
              y1="15"
              x2="25"
              y2="35"
              stroke="#E0E0E0"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-background/50 border border-border/50 transition-colors hover:bg-background/80"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden">
          <div className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl p-6">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleMobileNavClick("/")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-lg hover:bg-background/50 hover:scale-105"
              >
                Início
              </button>
              <button
                onClick={() => handleMobileNavClick("sobre")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-lg hover:bg-background/50 hover:scale-105"
              >
                Sobre
              </button>
              <button
                onClick={() => handleMobileNavClick("recursos")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-lg hover:bg-background/50 hover:scale-105"
              >
                Recursos
              </button>
              <button
                onClick={() => handleMobileNavClick("templates")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-lg hover:bg-background/50 hover:scale-105"
              >
                Templates
              </button>
              <button
                onClick={() => handleMobileNavClick("faqs")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-lg hover:bg-background/50 hover:scale-105"
              >
                FAQs
              </button>
              <button
                onClick={() => handleMobileNavClick("cta")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-lg hover:bg-background/50 hover:scale-105"
              >
                CTA
              </button>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

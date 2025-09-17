"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn, NAV_LINKS } from "@/utils";
import { LayoutDashboardIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import AnimationContainer from "@/components/global/animation-container";
import { MobileNavbar } from "./mobile-navbar";

export function Navbar() {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 8) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 inset-x-0 h-14 w-full border-b border-transparent z-[99999] select-none",
        scroll && "border-background/80 bg-background/40 backdrop-blur-md"
      )}
    >
      <AnimationContainer reverse delay={0.1} className="size-full">
        <MaxWidthWrapper className="flex items-center justify-between h-full">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-primary-foreground font-bold text-base sm:text-lg">
                <LayoutDashboardIcon className="w-4 h-4" />
              </span>
            </div>
            <span className="text-lg font-bold font-heading !leading-none tracking-tight">
              Global Template
            </span>
          </Link>

          {/* LINKS DE NAVEGAÇÃO */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* BOTÕES DE AUTENTICAÇÃO */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-x-4">
              <Link
                href="#"
                className={buttonVariants({ size: "sm", variant: "ghost" })}
              >
                Entrar
              </Link>
              <Link href="#" className={buttonVariants({ size: "sm" })}>
                Registrar
                <ZapIcon className="size-3.5 ml-1.5 text-blue-500 fill-blue-500" />
              </Link>
            </div>
          </div>
          {/* NAVBAR MOBILE */}
          <MobileNavbar />
        </MaxWidthWrapper>
      </AnimationContainer>
    </header>
  );
}

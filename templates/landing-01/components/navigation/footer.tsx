"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { LayoutDashboardIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
      <div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-blue-600 w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
      <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-blue-600 w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

      <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
        <div className="flex flex-col items-start justify-start md:max-w-[200px]">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-sidebar-primary-foreground">
            <LayoutDashboardIcon className="w-4 h-4" />
          </div>
          <p className="text-muted-foreground mt-4 text-sm text-start">
            Global Template - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
          <span className="mt-4 text-muted-foreground text-sm flex items-center">
            Feito por @VncsRaniery
          </span>
        </div>

        <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="">
              <h3 className="text-base font-medium">Global Template</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link
                    href="#"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Início
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="#sobre"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Sobre
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="#recursos"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Recursos
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0 flex flex-col">
              <h3 className="text-base font-medium">Empresa</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="">
                  <Link
                    href=""
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Sobre nós
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Política de privacidade
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Termos e condições
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="">
              <h3 className="text-base font-medium">Recursos</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Blog
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Suporte
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 flex items-center justify-between w-full">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Global Template. Todos os direitos
          reservados.
        </p>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}

"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

export function MobileNavbar() {
  return (
    <div className="flex lg:hidden items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-screen">
          <SheetHeader>
            <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col w-full mt-8">
            <ul className="flex flex-col items-start w-full gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="w-full">
                  <SheetClose asChild>
                    <Link
                      href={link.href}
                      className="block w-full py-3 text-lg font-medium text-muted-foreground transition-colors hover:bg-muted rounded-md px-3"
                    >
                      {link.title}
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
            <div className="border-b my-6" />
            <div className="flex flex-col w-full gap-2">
              <SheetClose asChild>
                <Link
                  href="#"
                  className={buttonVariants({
                    variant: "outline",
                    className: "w-full text-lg py-6",
                  })}
                >
                  Entrar
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#"
                  className={buttonVariants({
                    className: "w-full text-lg py-6",
                  })}
                >
                  Registrar
                </Link>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

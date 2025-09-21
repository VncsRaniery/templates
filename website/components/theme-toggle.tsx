"use client";

import { useTheme } from "next-themes";
import { Sun, Monitor, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const themes = [
    { value: "system", icon: Monitor, label: "Sistema" },
    { value: "light", icon: Sun, label: "Claro" },
    { value: "dark", icon: Moon, label: "Escuro" },
  ];

  return (
    <div className="flex items-center bg-background/80 backdrop-blur-sm border border-border/50 rounded-full p-1 shadow-sm">
      {themes.map(({ value, icon: Icon, label }) => {
        const isActive = theme === value;
        
        return (
          <Button
            key={value}
            onClick={() => setTheme(value)}
            variant="ghost"
            size="icon"
            className={`
              relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200
              ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }
            `}
            title={label}
            aria-label={`Mudar para tema ${label.toLowerCase()}`}
          >
            <Icon className="w-4 h-4" />
          </Button>
        );
      })}
    </div>
  );
}

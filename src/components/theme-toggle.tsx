"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant='ghost'
      className='bg-transparent'
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <p className='flex gap-1 items-center'>
          <Sun width={16} />
          <span className='font-semibold'>Light Mode</span>
        </p>
      ) : (
        <p className='flex gap-1 items-center'>
          <Moon width={16} />
          <span className='font-semibold'>Dark Mode</span>
        </p>
      )}
    </Button>
  );
}

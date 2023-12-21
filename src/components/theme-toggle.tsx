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
        <span className='flex gap-1 items-center'>
          <Sun width={16} />
          <p className='font-semibold'>Light Mode</p>
        </span>
      ) : (
        <span className='flex gap-1 items-center'>
          <Moon width={16} />
          <p className='font-semibold'>Dark Mode</p>
        </span>
      )}
    </Button>
  );
}

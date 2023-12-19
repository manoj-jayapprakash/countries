import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./theme-toggle";

export const Navbar = () => {
  return (
    <nav className='z-10 fixed left-0 top-0 p-4 w-full flex items-center justify-between font-mono text-sm border-b shadow-sm bg-card'>
      <h1 className='font-extrabold'>Where in the world?</h1>
      <ModeToggle />
    </nav>
  );
};

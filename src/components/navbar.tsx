import React from "react";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className='z-10 fixed h-20 left-0 top-0 p-4 w-full flex items-center justify-between font-mono text-sm border-b shadow-sm bg-card'>
      <Link href='/'>
        <h1 className='font-extrabold font-sans text-2xl'>
          Where in the world?
        </h1>
      </Link>
      <ModeToggle />
    </nav>
  );
};

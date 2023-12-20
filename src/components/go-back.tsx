"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export const GoBack = ({ className }: { className?: string }) => {
  const router = useRouter();
  return (
    <Button
      variant={"outline"}
      className={cn("bg-card hover:bg-transparent", className)}
      onClick={() => router.back()}
    >
      <MoveLeft width={24} className='mr-2' /> Back
    </Button>
  );
};

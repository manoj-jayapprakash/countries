"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className='mt-48 grid place-items-center'>
      <h2>Something went wrong!</h2>
      <Link href={"/"} className='underline'>
        Return to Home
      </Link>
    </div>
  );
}

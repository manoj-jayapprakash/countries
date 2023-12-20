import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { ALL_COUNTRIES_API_URL } from "@/lib/constant";
import { Countries } from "@/types";
import { getBorderNames } from "@/lib/utils";

const getCountries = async (): Promise<Countries[]> => {
  const res = await fetch(ALL_COUNTRIES_API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const Borders = async ({
  borderCountries,
}: {
  borderCountries: string[];
}) => {
  const countries = await getCountries();

  const borders = getBorderNames(countries, borderCountries);

  return (
    <div className='flex gap-2 flex-col lg:flex-row lg:items-center'>
      <p>Border Countries: </p>
      <ul className='flex gap-2 flex-wrap'>
        {borders.map((borderCountry) => (
          <li key={borderCountry.code}>
            <Button asChild variant={"outline"} className='h-7'>
              <Link href={`/${borderCountry.code}`}>{borderCountry.name}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

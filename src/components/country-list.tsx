"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Countries } from "@/types";
import Image from "next/image";
import { Search } from "./filters/search";
import { RegionFilter } from "./filters/region";
import Link from "next/link";
import { Metadata } from "./ui/metadata";
import { getCapital } from "@/lib/utils";

export const CountryList = ({ countries }: { countries: Countries[] }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  return (
    <section className='mt-6 grid gap-12 w-full'>
      <div className='grid gap-4 lg:flex lg:justify-between lg:items-center'>
        <Search countries={countries} setCountries={setFilteredCountries} />
        <RegionFilter
          countries={countries}
          setCountries={setFilteredCountries}
        />
      </div>
      <ul className='flex flex-col justify-between gap-8 md:flex-row md:flex-wrap mx-auto'>
        {filteredCountries.map((country) => (
          <li key={country.area} className='block w-72 h-[21rem]'>
            <Link href={`/${country.cca3}`}>
              <Card className=' overflow-hidden'>
                <div className='w-72 h-40'>
                  <Image
                    src={country.flags.svg}
                    alt='country flag'
                    width={288}
                    height={280}
                    className='h-full object-cover'
                  />
                </div>
                <CardHeader>
                  <CardTitle>{country.name.common}</CardTitle>
                </CardHeader>
                <CardContent className='grid gap-2'>
                  <Metadata label='Population' value={country.population} />
                  <Metadata label='Region' value={country.region} />
                  <Metadata
                    label='Capital'
                    value={getCapital(country.capital)}
                  />
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

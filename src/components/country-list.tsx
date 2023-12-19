import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Countries } from "@/types";
import Image from "next/image";

export const CountryList = ({ countries }: { countries: Countries[] }) => {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.area}>
          <Card className='w-72 h-[21rem] overflow-hidden'>
            <div className='w-72 h-40'>
              <Image
                src={country.flags.svg}
                alt='country flag'
                width={288}
                height={280}
                className='h-full object-cover overflow-hidden'
              />
            </div>
            <CardHeader>
              <CardTitle>{country.name.common}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex gap-2'>
                <p>Population</p>
                <p>{country.population}</p>
              </div>
              <div className='flex gap-2'>
                <p>Region</p>
                <p>{country.region}</p>
              </div>
              <div className='flex gap-2'>
                <p>Capital</p>
                <p>{country.capital}</p>
              </div>
            </CardContent>
          </Card>
        </li>
      ))}
    </ul>
  );
};

import { getOfficialName, getCapital } from "@/lib/utils";
import { Countries } from "@/types";
import React from "react";
import { Metadata } from "@/components/ui/metadata";

export const Stats = ({ country }: { country: Countries }) => {
  const primaryStats = [
    {
      id: 1,
      label: "Native Name",
      value: getOfficialName(country.name.nativeName),
    },
    {
      id: 2,
      label: "Population",
      value: country.population,
    },
    {
      id: 3,
      label: "Region",
      value: country.region,
    },
    {
      id: 4,
      label: "Subregion",
      value: country.subregion,
    },
    {
      id: 5,
      label: "Capital",
      value: getCapital(country.capital),
    },
  ];

  const secondaryStats = [
    {
      id: 1,
      label: "Top Level Domain",
      value: country.tld.join(", "),
    },
    {
      id: 2,
      label: "Currencies",
      value: Object.keys(country.currencies).join(", "),
    },
    {
      id: 3,
      label: "Languages",
      value: Object.keys(country.languages).join(", "),
    },
  ];
  return (
    <div className='grid gap-8 lg:grid-cols-2'>
      <ul>
        {primaryStats.map((primaryStat) => (
          <li key={`primary-stat-${primaryStat.id}`} className='mb-4'>
            <Metadata label={primaryStat.label} value={primaryStat.value} />
          </li>
        ))}
      </ul>
      <ul>
        {secondaryStats.map((secondaryStat) => (
          <li key={`secondary-stat-${secondaryStat.id}`} className='mb-4'>
            <Metadata label={secondaryStat.label} value={secondaryStat.value} />
          </li>
        ))}
      </ul>
    </div>
  );
};

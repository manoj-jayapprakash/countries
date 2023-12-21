import { Countries, NativeName } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCapital = (capital: string | string[]) => {
  return Array.isArray(capital) ? capital[0] : capital;
};

export const getOfficialName = (nativeName: NativeName) => {
  const key = Object.keys(nativeName)[0];

  if (key) {
    const translation = nativeName[key];
    return translation.official;
  }

  return "Not Available";
};

export const getBorderNames = (countries: Countries[], border: string[]) => {
  const names: { name: string; code: string }[] = [];

  countries.forEach((country) => {
    if (border.includes(country.cca3)) {
      names.push({ name: country.name.common, code: country.cca3 });
    }
  });

  return names;
};

export const formatPopulation = (population: number) => {
  return population.toLocaleString();
};

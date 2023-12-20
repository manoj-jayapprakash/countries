import { ALL_COUNTRIES_API_URL } from "@/lib/constant";

import { CountryList } from "@/components/country-list";
import { Countries } from "@/types";

const getCountries = async (): Promise<Countries[]> => {
  const res = await fetch(ALL_COUNTRIES_API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function Home() {
  const countries = await getCountries();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between pt-24 px-4 max-w-[90rem] mx-auto'>
      <CountryList countries={countries} />
    </main>
  );
}

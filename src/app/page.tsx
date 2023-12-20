import { ALL_COUNTRIES_API_URL } from "@/lib/constant";

import { CountryList } from "@/components/country-list";

const getCountries = async () => {
  const res = await fetch(ALL_COUNTRIES_API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function Home() {
  const countries = await getCountries();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between pt-24 px-4'>
      <CountryList countries={countries} />
    </main>
  );
}

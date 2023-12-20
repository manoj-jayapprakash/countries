import { Borders } from "@/components/borders";
import { GoBack } from "@/components/go-back";
import { Stats } from "@/components/stats";
import { GET_COUNTRY_API_URL } from "@/lib/constant";
import { Countries } from "@/types";
import Image from "next/image";

const getCountryById = async (id: string): Promise<Countries[]> => {
  const res = await fetch(GET_COUNTRY_API_URL(id));

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function CountryDetail({
  params,
}: {
  params: { country: string };
}) {
  const response = await getCountryById(params.country);

  if (response.length === 0) return <p>No country found</p>;

  const countryInfo = response[0];
  console.log(countryInfo);

  return (
    <div className='pt-24 px-8 max-w-7xl mx-auto'>
      <GoBack className='mt-4 md:mt-8' />
      <section className='flex flex-col lg:flex-row gap-8 lg:justify-between my-8'>
        <Image
          src={countryInfo.flags.svg}
          alt='Country Flag'
          width={300}
          height={480}
          className='w-full lg:max-w-[35rem] rounded-lg '
        />
        <div className='grid gap-4 my-4 lg:my-12'>
          <h2 className='text-[1.375rem] md:text-[2rem]'>
            {countryInfo.name.common}
          </h2>
          <Stats country={countryInfo} />
          {countryInfo.borders ? (
            <Borders borderCountries={countryInfo.borders} />
          ) : (
            <></>
          )}
        </div>
      </section>
    </div>
  );
}

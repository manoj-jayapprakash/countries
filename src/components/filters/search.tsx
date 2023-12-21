import { Countries } from "@/types";
import React, { Dispatch, SetStateAction } from "react";
import { Input } from "@/components/ui/input";

export const Search = ({
  countries,
  setCountries,
}: {
  countries: Countries[];
  setCountries: Dispatch<SetStateAction<Countries[]>>;
}) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") return setCountries(countries);

    const searchedCountries = countries.filter((country) =>
      country.name.common.includes(e.target.value)
    );

    setCountries(searchedCountries);
  };

  return (
    <Input
      type='text'
      placeholder='Search for a country'
      onChange={changeHandler}
      className='w-full md:w-[30rem]'
    />
  );
};

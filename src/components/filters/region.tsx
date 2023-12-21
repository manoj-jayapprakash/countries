import React, { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Countries } from "@/types";

export const RegionFilter = ({
  countries,
  setCountries,
}: {
  countries: Countries[];
  setCountries: Dispatch<SetStateAction<Countries[]>>;
}) => {
  const changeHandler = (value: string) => {
    if (value === "") return;

    const searchedCountries = countries.filter(
      (country) => country.region === value
    );

    setCountries(searchedCountries);
  };

  return (
    <Select onValueChange={changeHandler}>
      <SelectTrigger className='w-[12.5rem]'>
        <SelectValue placeholder='Filter by Region' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='Africa'>Africa</SelectItem>
        <SelectItem value='Americas'>America</SelectItem>
        <SelectItem value='Asia'>Asia</SelectItem>
        <SelectItem value='Europe'>Europe</SelectItem>
        <SelectItem value='Oceania'>Oceania</SelectItem>
      </SelectContent>
    </Select>
  );
};

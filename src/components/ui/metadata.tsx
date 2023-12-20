import React from "react";

export const Metadata = ({
  label,
  value,
}: {
  label: string;
  value: string|number;
}) => {
  return (
    <div className='flex items-center gap-2 text-sm'>
      <p className='font-semibold capitalize'>{label}:</p>
      <p className=''>{value}</p>
    </div>
  );
};

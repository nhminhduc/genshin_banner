import FilterInput from "components/atoms/FilterForm/FilterInput";
import { useFilterContext } from "hooks/useFilterContext";
import React, { useRef, useState } from "react";

const FilterNameInput = () => {
  const ref = useRef(null);
  const { filterByName, nameFilter } = useFilterContext();
  const [value, setValue] = useState(nameFilter);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    filterByName(event.currentTarget.value);
  };

  return (
    <FilterInput
      className="border-2 rounded border-amber-500 w-36 md:w-48"
      id="name"
      innerRef={ref}
      name="name"
      onChange={handleOnChange}
      placeholder="Filter by name"
      type="text"
      value={value || ""}
    />
  );
};

export default FilterNameInput;

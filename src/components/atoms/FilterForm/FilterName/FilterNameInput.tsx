import { useFilterContext } from "hooks/useFilterContext";
import React, { useRef, useState } from "react";
import FilterInput from "components/atoms/FilterForm/FilterInput";

const FilterNameInput = () => {
  const ref = useRef(null);
  const { nameFilter, filterByName } = useFilterContext();
  const [value, setValue] = useState(nameFilter);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    filterByName(event.currentTarget.value);
  };

  const handleReset = () => {
    setValue("");
    filterByName(undefined);
  };

  return (
    <FilterInput id="name" name="name" onChange={handleOnChange} innerRef={ref} type="text" value={value || ""} onReset={handleReset} />
  )
};

export default FilterNameInput;

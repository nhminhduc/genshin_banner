import FilterInput from "components/atoms/FilterForm/FilterInput";
import { useDebounce } from "hooks/useDebounce";
import { useFilterContext } from "hooks/useFilterContext";
import React, { useEffect, useRef, useState } from "react";

const FilterNameInput = () => {
  const ref = useRef(null);
  const { filterByName, nameFilter } = useFilterContext();
  const [value, setValue] = useState(nameFilter);

  const debouncedSearchName = useDebounce(value, 250);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  useEffect(() => {
    filterByName(debouncedSearchName);
  }, [debouncedSearchName]);

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

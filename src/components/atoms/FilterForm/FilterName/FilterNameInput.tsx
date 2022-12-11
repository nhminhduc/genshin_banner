import FilterInput from "components/atoms/FilterForm/FilterInput";
import { useFilterContext } from "hooks/useFilterContext";
import React, { useRef, useState } from "react";
import { MdOutlineCancel } from 'react-icons/md';

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
      id="name"
      innerRef={ref}
      name="name"
      onChange={handleOnChange}
      type="text"
      value={value || ""}
      icon={<MdOutlineCancel />}
      className="border rounded"
    />
  );
};

export default FilterNameInput;

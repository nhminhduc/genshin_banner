import { useFilterContext } from "hooks/useFilterContext";
import React, { useRef, useState } from "react";

const FilterForm = () => {
  const ref = useRef(null);
  const { elementFilter, filterByName } = useFilterContext();
  const [value, setValue] = useState(elementFilter);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    filterByName(event.currentTarget.value);
  };

  const handleReset = () => {
    setValue("");
    filterByName(undefined);
  };

  return (
    <div>
      <input
        id="name"
        name="name"
        onChange={handleOnChange}
        ref={ref}
        type="text"
        value={value || ""}
      />
      <button onClick={handleReset} type="button">
        X
      </button>
    </div>
  );
};

export default FilterForm;

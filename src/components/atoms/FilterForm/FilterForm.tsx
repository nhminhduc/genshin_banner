import React, { useRef, useState } from "react";

const FilterForm = () => {
  const [value, setValue] = useState("");
  const ref = useRef(null);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const handleReset = () => {
    setValue("");
  };

  return (
    <div>
      <input
        id="name"
        name="name"
        onChange={handleOnChange}
        ref={ref}
        type="text"
        value={value}
      />
      <button onClick={handleReset} type="button">
        X
      </button>
    </div>
  );
};

export default FilterForm;

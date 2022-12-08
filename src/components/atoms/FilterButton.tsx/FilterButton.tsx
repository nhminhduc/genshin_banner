import { useEffect, useState } from "react";

type FilterButtonProp = {
  checked?: boolean;
  className?: string;
  id: string;
  label: string;
  name: string;
  onButtonClick(element: string, isChecked: boolean): void;
};

const FilterButton = ({
  checked = true,
  className,
  id,
  label,
  name,
  onButtonClick,
}: FilterButtonProp) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleOnChange = () => {
    setIsChecked((prev) => !prev);
  };

  useEffect(() => {
    onButtonClick(id, isChecked);
  }, [id, isChecked]);

  return (
    <div className={className}>
      <input
        checked={isChecked}
        id={id}
        name={name}
        onChange={handleOnChange}
        type="checkbox"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default FilterButton;

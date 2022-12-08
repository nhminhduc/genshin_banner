import { useEffect, useState } from "react";

type FilterButtonProp = {
  checked?: boolean,
  className?: string,
  id: string,
  label: string,
  name: string,
  onButtonClick(element: string, isChecked: boolean): void;
}

const FilterButton = ({
  checked = false,
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
    onButtonClick(id, isChecked)
  }, [isChecked]);

  return (
    <div className={className}>
      <input
        id={id}
        name={name}
        onChange={handleOnChange}
        type="checkbox"
        checked={isChecked}
      />
      <label htmlFor={id}>{label}
      </label>
    </div>
  );
};

export default FilterButton;

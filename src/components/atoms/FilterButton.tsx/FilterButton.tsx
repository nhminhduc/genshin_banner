import cx from "classnames";
import { ComponentProps, ReactElement, useEffect, useState } from "react";

type FilterButtonProp = {
  chosen?: boolean;
  className?: string;
  id: string;
  label?: string;
  name: string;
  icon?: ReactElement<ComponentProps<"svg" | "img">>;
  onButtonClick(element: string, isChecked: boolean): void;
};

const FilterButton = ({
  chosen = true,
  className,
  id,
  label,
  name,
  icon,
  onButtonClick,
}: FilterButtonProp) => {
  const [isChecked, setIsChecked] = useState(chosen);

  const handleOnClick = () => {
    setIsChecked((prev) => !prev);
  };

  useEffect(() => {
    onButtonClick(id, isChecked);
  }, [id, isChecked]);

  const Icon = icon ? icon : null;
  return (
    <button
      className={cx("flex", isChecked, className, {
        "opacity-30": !isChecked,
      })}
      id={id}
      name={name}
      onClick={handleOnClick}
      type="button"
    >
      {label} {Icon}
    </button>
  );
};

export default FilterButton;

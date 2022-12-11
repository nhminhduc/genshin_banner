import cx from "classnames";
import { ComponentProps, ReactElement } from "react";

type FilterButtonProp = {
  chosen?: boolean;
  className?: string;
  icon?: ReactElement<ComponentProps<"svg" | "img">>;
  id: string;
  label?: string;
  name: string;
  onButtonClick(element: string, isChecked: boolean): void;
};

const FilterButton = ({
  chosen = true,
  className,
  icon,
  id,
  label,
  name,
  onButtonClick,
}: FilterButtonProp) => {
  const handleOnClick = () => {
    onButtonClick(id, !chosen);
  };
  const Icon = icon || null;
  return (
    <button
      className={cx("flex justify-around items-center", chosen, className, {
        "opacity-30": !chosen,
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

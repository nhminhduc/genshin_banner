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
  const handleOnClick = () => {
    onButtonClick(id, !chosen);
  }
  const Icon = icon ? icon : null;
  return (
    <button
      className={cx("flex", chosen, className, {
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

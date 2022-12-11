import cx from "classnames";
import { ComponentProps, ReactElement } from "react";

type SortButtonProp = {
  className?: string;
  icon?: ReactElement<ComponentProps<"svg" | "img">>;
  id: string;
  label?: string;
  name: string;
  onButtonClick(isChecked: boolean): void;
  sortDesc?: boolean;
};

const SortButton = ({
  className,
  icon,
  id,
  label,
  name,
  onButtonClick,
  sortDesc = false,
}: SortButtonProp) => {
  const handleOnClick = () => {
    onButtonClick(!sortDesc);
  };

  const Icon = icon ?? null;
  return (
    <button
      className={cx("flex items-center", sortDesc, className, {
        "opacity-30": !sortDesc,
      })}
      id={id}
      name={name}
      onClick={handleOnClick}
      type="button"
    >
      {Icon} {label}
    </button>
  );
};

export default SortButton;

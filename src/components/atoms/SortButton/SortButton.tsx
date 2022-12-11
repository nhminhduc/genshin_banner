import cx from "classnames";
import { ComponentProps, ReactElement } from "react";

type SortButtonProp = {
  className?: string;
  id: string;
  label?: string;
  name: string;
  sortDesc?: boolean;
  icon?: ReactElement<ComponentProps<"svg" | "img">>;
  onButtonClick(isChecked: boolean): void;
};

const SortButton = ({
  className,
  id,
  sortDesc = false,
  label,
  name,
  icon,
  onButtonClick,
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
}

export default SortButton;

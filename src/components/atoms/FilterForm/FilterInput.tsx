import { ComponentProps, ReactElement } from "react";

type FilterInputProps = {
  className?: string;
  id?: string;
  innerRef?: React.LegacyRef<HTMLInputElement>;
  name: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  type?: string;
  value: string;
  icon?: ReactElement<ComponentProps<"svg" | "img">>;
};

const FilterInput = ({
  className,
  id,
  innerRef,
  name,
  onChange,
  type = "text",
  value,
  icon,
}: FilterInputProps) => (
  <div>
    <input
      className={className}
      id={id}
      name={name}
      onChange={onChange}
      ref={innerRef}
      type={type}
      value={value}
    />
  </div>
);

export default FilterInput;

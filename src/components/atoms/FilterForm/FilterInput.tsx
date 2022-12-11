import { ComponentProps, LegacyRef, ReactElement } from "react";

type FilterInputProps = {
  className?: string;
  id?: string;
  innerRef?: LegacyRef<HTMLInputElement>;
  name: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  type?: string;
  value: string;
  placeholder?: string;
};

const FilterInput = ({
  className,
  id,
  innerRef,
  name,
  onChange,
  type = "text",
  value,
  placeholder
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
      placeholder={placeholder}
    />
  </div>
);

export default FilterInput;

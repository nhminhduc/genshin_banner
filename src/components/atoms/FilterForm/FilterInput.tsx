import { LegacyRef } from "react";

type FilterInputProps = {
  className?: string;
  id?: string;
  innerRef?: LegacyRef<HTMLInputElement>;
  name: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  placeholder?: string;
  type?: string;
  value: string;
};

const FilterInput = ({
  className,
  id,
  innerRef,
  name,
  onChange,
  placeholder,
  type = "text",
  value,
}: FilterInputProps) => (
  <div>
    <input
      className={className}
      id={id}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      ref={innerRef}
      type={type}
      value={value}
    />
  </div>
);

export default FilterInput;

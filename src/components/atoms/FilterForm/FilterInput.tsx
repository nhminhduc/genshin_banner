type FilterInputProps = {
  className?: string;
  id?: string;
  innerRef?: React.LegacyRef<HTMLInputElement>;
  name: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  type?: string;
  value: string;
};

const FilterInput = ({
  className,
  id,
  innerRef,
  name,
  onChange,
  type = "text",
  value,
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

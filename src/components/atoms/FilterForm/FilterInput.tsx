type FilterInputProps = {
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onReset(): void;
  id?: string;
  name: string;
  innerRef?: React.LegacyRef<HTMLInputElement>;
  type?: string;
  value: string;
  className?: string;
}

const FilterInput = ({
  onChange,
  onReset,
  id,
  name,
  innerRef,
  type = "text",
  value,
  className
}: FilterInputProps) => {
  return (
    <div>
      <input
        id={id}
        name={name}
        onChange={onChange}
        ref={innerRef}
        type={type}
        value={value}
        className={className}
      />
      <button onClick={onReset} type="button">
        X
      </button>
    </div>
  );
};

export default FilterInput;

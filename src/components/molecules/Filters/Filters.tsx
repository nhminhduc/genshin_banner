import cx from "classnames";
import FilterElements from "components/atoms/FilterButton.tsx/FilterElements/FilterElements";
import FilterRarities from "components/atoms/FilterButton.tsx/FilterRarities/FilterRarities";
import FilterNameInput from "components/atoms/FilterForm/FilterName/FilterNameInput";

type FiltersProps = {
  className?: string;
};
const Filters = ({ className }: FiltersProps) => (
  <div
    className={cx(
      className,
      "flex flex-col items-center bg-slate-300/75 h-full rounded p-4 mt-10",
    )}
  >
    <FilterNameInput />
    <FilterElements />
    <FilterRarities />
  </div>
);

export default Filters;

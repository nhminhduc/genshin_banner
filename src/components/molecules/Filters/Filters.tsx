import cx from "classnames";

import FilterElements from "./FilterElements/FilterElements";
import FilterNameInput from "./FilterName/FilterNameInput";
import FilterRarities from "./FilterRarities/FilterRarities";

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

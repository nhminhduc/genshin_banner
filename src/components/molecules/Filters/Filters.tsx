import cx from "classnames";
import FilterElements from "components/atoms/FilterButton.tsx/FilterElements/FilterElements";
import FilterRarities from "components/atoms/FilterButton.tsx/FilterRarities/FilterRarities";
import FilterNameInput from "components/atoms/FilterForm/FilterName/FilterNameInput";
import SortButton from "components/atoms/SortButton/SortButton";

const Filters = () => (
  <div className={cx("flex flex-col items-center")}>
    <FilterNameInput />
    <FilterElements />
    <FilterRarities />
  </div>
);

export default Filters;

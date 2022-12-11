import FilterElements from "components/atoms/FilterButton.tsx/FilterElements/FilterElements";
import FilterRarities from "components/atoms/FilterButton.tsx/FilterRarities/FilterRarities";
import FilterNameInput from "components/atoms/FilterForm/FilterName/FilterNameInput";

const Filters = () => (
  <div className="flex flex-col items-center bg-slate-400 h-full rounded p-4 mt-10">
    <FilterNameInput />
    <FilterElements />
    <FilterRarities />
  </div>
);

export default Filters;

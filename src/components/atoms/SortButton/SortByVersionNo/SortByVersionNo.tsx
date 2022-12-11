import { useFilterContext } from "hooks/useFilterContext";
import SortButton from "../SortButton";

const SortByVersionNo = () => {
  const { sortByVersionNoDesc, setSortByVersionNoDesc } = useFilterContext();

  const onSortByVersionNoButtonClick = (sortDescDirection: boolean) => {
    if (sortByVersionNoDesc === undefined) {
      return setSortByVersionNoDesc(true);
    }

    setSortByVersionNoDesc(sortDescDirection);
  }

  return (
    <SortButton
      className="bg-amber-600 border border-amber-200 rounded p-1 text-white font-medium md:font-bold md:self-end"
      id="versionNo"
      name="versionNo"
      label="Sort by last appearance"
      sortDesc={sortByVersionNoDesc}
      onButtonClick={onSortByVersionNoButtonClick} />
  );
};

export default SortByVersionNo;

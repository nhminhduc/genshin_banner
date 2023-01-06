import Star from "assets/images/Star";
import FilterButton from "components/atoms/FilterButton/FilterButton";
import { config } from "config";
import { useFilterContext } from "hooks/useFilterContext";
import { isEqual } from "lodash";

const FilterRarities = () => {
  const { rarityFilter, setRarityFilter } = useFilterContext();

  const { rarities } = config;

  const onRarityFilterButtonClick = (
    rarityValue: string,
    isChecked: boolean,
  ) => {
    if (isEqual(rarityFilter, rarities)) {
      return setRarityFilter([rarityValue]);
    }
    if (isChecked === true) {
      return setRarityFilter([rarityValue, ...rarityFilter]);
    }
    if (rarityFilter.length === 1) {
      return setRarityFilter(rarities);
    }
    return setRarityFilter(
      rarityFilter.filter((element) => element !== rarityValue),
    );
  };

  return (
    <div className="m-2">
      {rarities.map((rarity) => (
        <FilterButton
          chosen={rarityFilter.includes(rarity)}
          className="bg-amber-700 border border-amber-200 rounded w-12 my-1 text-white font-bold"
          icon={<Star className="h-4 w-4 md:h-5 md:w-5" />}
          id={rarity}
          key={rarity}
          label={rarity}
          name="rarityFilter"
          onButtonClick={onRarityFilterButtonClick}
        />
      ))}
    </div>
  );
};

export default FilterRarities;

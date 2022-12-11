import Star from "assets/images/Star";
import FilterButton from "components/atoms/FilterButton.tsx/FilterButton";
import { config } from "config";
import { useFilterContext } from "hooks/useFilterContext";
import { isEqual } from "lodash";

const FilterRarities = () => {
  const { rarityFilter, setRarityFilter } = useFilterContext();

  const rarities = config.rarities;

  const onRarityFilterButtonClick = (rarityValue: string, isChecked: boolean) => {
    if (isEqual(rarityFilter, rarities)) {
      return setRarityFilter([rarityValue]);
    }
    if (isChecked === true) {
      return setRarityFilter([rarityValue, ...rarityFilter]);
    }
    if (rarityFilter.length === 1) {
      return setRarityFilter(rarities);
    }
    return setRarityFilter(rarityFilter.filter((element) => element !== rarityValue));
  };

  return (
    <div>
      {rarities.map((rarity) => (
        <FilterButton
          id={rarity}
          key={rarity}
          label={rarity}
          name="rarityFilter"
          onButtonClick={onRarityFilterButtonClick}
          icon={<Star />}
          chosen={rarityFilter.includes(rarity)}
        />
      ))}
    </div>
  );
};

export default FilterRarities;

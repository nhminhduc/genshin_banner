import FilterButton from "components/atoms/FilterButton.tsx/FilterButton";
import { useFilterContext } from "hooks/useFilterContext";

const FilterRarities = () => {
  const { rarityFilter, removeRarityFilter, setRarityFilter } =
    useFilterContext();

  const onButtonClick = (rarity: string, isChecked: boolean) => {
    if (isChecked === true) {
      if (Array.isArray(rarityFilter)) {
        rarityFilter?.push(rarity);
        setRarityFilter([...new Set(rarityFilter)]);
      } else {
        setRarityFilter([rarity]);
      }
    } else {
      removeRarityFilter(rarity);
    }
  };

  const rarities = ["4", "5"];
  return (
    <div>
      {rarities.map((rarity) => (
        <FilterButton
          id={rarity}
          key={rarity}
          label={rarity}
          name="rarityFilter"
          onButtonClick={onButtonClick}
        />
      ))}
    </div>
  );
};

export default FilterRarities;

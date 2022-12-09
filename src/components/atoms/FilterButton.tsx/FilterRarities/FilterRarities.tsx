import Star from "assets/images/Star";
import FilterButton from "components/atoms/FilterButton.tsx/FilterButton";
import { useFilterContext } from "hooks/useFilterContext";
import { useEffect, useState } from "react";

const FilterRarities = () => {
  const { setRarityFilter } = useFilterContext();

  const initialState = ["4", "5"];
  const [rarities, setRarities] = useState(initialState);

  const onButtonClick = (rarityValue: string, isChecked: boolean) => {
    if (isChecked === true) {
      setRarities([rarityValue, ...rarities]);
    } else {
      setRarities(rarities.filter((rarity) => rarity !== rarityValue));
    }
  };

  useEffect(() => {
    setRarityFilter(rarities);
  }, [rarities]);

  return (
    <div>
      {initialState.map((rarity) => (
        <FilterButton
          id={rarity}
          key={rarity}
          label={rarity}
          name="rarityFilter"
          onButtonClick={onButtonClick}
          icon={<Star />}
        />
      ))}
    </div>
  );
};

export default FilterRarities;

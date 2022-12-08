import FilterButton from "components/atoms/FilterButton.tsx/FilterButton";
import { useFilterContext } from "hooks/useFilterContext";

const FilterElements = () => {
  const { elementFilter, removeElementFilter, setElementFilter } =
    useFilterContext();

  const onButtonClick = (element: string, isChecked: boolean) => {
    if (isChecked === true) {
      if (Array.isArray(elementFilter)) {
        elementFilter?.push(element);
        setElementFilter([...new Set(elementFilter)]);
      } else {
        setElementFilter([element]);
      }
    } else {
      removeElementFilter(element);
    }
  };

  const elements = [
    "anemo",
    "cryo",
    "dendro",
    "electro",
    "geo",
    "hydro",
    "pyro",
  ];
  return (
    <div>
      {elements.map((element) => (
        <FilterButton
          id={element}
          key={element}
          label={element}
          name="elementFilter"
          onButtonClick={onButtonClick}
        />
      ))}
    </div>
  );
};

export default FilterElements;

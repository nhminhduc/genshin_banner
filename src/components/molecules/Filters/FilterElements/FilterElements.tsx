import cx from "classnames";
import FilterButton from "components/atoms/FilterButton/FilterButton";
import { config } from "config";
import { useFilterContext } from "hooks/useFilterContext";
import { isEqual } from "lodash";

type FilterElementsProps = {
  className?: string;
};
const FilterElements = ({ className }: FilterElementsProps) => {
  const { elementFilter, setElementFilter } = useFilterContext();

  const { baseUrl, elements } = config;

  const onElementFilterButtonClick = (
    elementValue: string,
    isChecked: boolean,
  ) => {
    if (isEqual(elementFilter, elements)) {
      return setElementFilter([elementValue]);
    }
    if (isChecked === true) {
      return setElementFilter([elementValue, ...elementFilter]);
    }
    if (elementFilter.length === 1) {
      return setElementFilter(elements);
    }
    return setElementFilter(
      elementFilter.filter((element) => element !== elementValue),
    );
  };

  return (
    <div
      className={cx("flex flex-wrap w-44 p-2 mt-2 justify-center", className)}
    >
      {elements.map((element) => (
        <FilterButton
          chosen={elementFilter.includes(element)}
          className="bg-amber-700 border border-amber-200 rounded basis-9 m-[2px]"
          icon={
            <img
              alt={element}
              className="w-9 h-9"
              src={`${baseUrl}elements/${element}/icon.png`}
            />
          }
          id={element}
          key={element}
          name="elementFilter"
          onButtonClick={onElementFilterButtonClick}
        />
      ))}
    </div>
  );
};

export default FilterElements;

import FilterButton from "components/atoms/FilterButton.tsx/FilterButton";
import { elements as elementsIcon } from "assets/images";
import { useFilterContext } from "hooks/useFilterContext";
import cx from "classnames";
import { isEqual } from "lodash";
import { config } from "config";

type FilterElementsProps = {
  className?: string;
}
const FilterElements = ({ className }: FilterElementsProps) => {
  const { elementFilter, setElementFilter } = useFilterContext();

  const elements = config.elements;

  const onElementFilterButtonClick = (elementValue: string, isChecked: boolean) => {
    if (isEqual(elementFilter, elements)) {
      return setElementFilter([elementValue]);
    }
    if (isChecked === true) {
      return setElementFilter([elementValue, ...elementFilter]);
    }
    if (elementFilter.length === 1) {
      return setElementFilter(elements);
    }
    return setElementFilter(elementFilter.filter((element) => element !== elementValue));
  };

  return (
    <div className={cx("flex flex-wrap w-24 p-2", className)}>
      {elements.map((element) => (
        <FilterButton
          id={element}
          key={element}
          name="elementFilter"
          onButtonClick={onElementFilterButtonClick}
          className={cx("bg-amber-700 border border-amber-200 rounded basis-9 m-[1px]")}
          icon={<img
            alt={element}
            className="w-9 h-9"
            src={elementsIcon[element as keyof typeof elementsIcon]}
          />
          }
          chosen={elementFilter.includes(element)}
        />
      ))}
    </div>
  );
};

export default FilterElements;

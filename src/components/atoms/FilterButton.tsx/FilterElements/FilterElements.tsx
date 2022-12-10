import FilterButton from "components/atoms/FilterButton.tsx/FilterButton";
import { elements as elementsIcon } from "assets/images";
import { useFilterContext } from "hooks/useFilterContext";
import cx from "classnames";
import { useEffect, useState } from "react";
import { isEqual } from "lodash";

type FilterElementsProps = {
  className?: string;
}
const FilterElements = ({ className }: FilterElementsProps) => {
  const { elementFilter, setElementFilter } = useFilterContext();

  const elements = ["anemo", "cryo", "dendro", "electro", "geo", "hydro", "pyro"];

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
    <div className={cx("flex w-20 flex-wrap", className)}>
      {elements.map((element) => (
        <FilterButton
          id={element}
          key={element}
          name="elementFilter"
          onButtonClick={onElementFilterButtonClick}
          className={cx("bg-red-500 basis-8")}
          icon={<img
            alt={element}
            className="w-8 h-8"
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

import FilterButton from "components/atoms/FilterButton.tsx/FilterButton";
import { elements as elementsIcon } from "assets/images";
import { useFilterContext } from "hooks/useFilterContext";
import cx from "classnames";
import { useEffect, useState } from "react";

type FilterElementsProps = {
  className?: string;
}
const FilterElements = ({ className }: FilterElementsProps) => {
  const { setElementFilter } = useFilterContext();

  const initialState = ["anemo", "cryo", "dendro", "electro", "geo", "hydro", "pyro"];
  const [elements, setElements] = useState(initialState);

  const onButtonClick = (elementValue: string, isChecked: boolean) => {
    if (isChecked === true) {
      setElements([elementValue, ...elements]);
    } else {
      setElements(elements.filter((element) => element !== elementValue));
    }
  };

  useEffect(() => {
    setElementFilter(elements);
  }, [elements]);

  return (
    <div className={cx("flex w-20 flex-wrap", className)}>
      {initialState.map((element) => (
        <FilterButton
          id={element}
          key={element}
          name="elementFilter"
          onButtonClick={onButtonClick}
          className={cx("bg-red-500 basis-8")}
          icon={<img
            alt={element}
            className="w-8 h-8"
            src={elementsIcon[element as keyof typeof elementsIcon]}
          />
          }
        />
      ))}
    </div>
  );
};

export default FilterElements;

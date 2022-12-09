import FilterButton from "components/atoms/FilterButton.tsx/FilterButton";
import { elements as elementsIcon } from "assets/images";
import { useFilterContext } from "hooks/useFilterContext";
import cx from "classnames";

type FilterElementsProps = {
  className?: string;
}
const FilterElements = ({ className }: FilterElementsProps) => {
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
    <div className={cx("flex w-20 flex-wrap", className)}>
      {elements.map((element) => (
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

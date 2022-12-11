import cx from "classnames";
import SortByVersionNo from "components/atoms/SortButton/SortByVersionNo/SortByVersionNo";

const Sorting = () => (
  <div className={cx("flex flex-col items-center")}>
    <SortByVersionNo />
  </div>
);

export default Sorting;

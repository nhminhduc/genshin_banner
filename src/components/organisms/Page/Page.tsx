import cx from "classnames";
import CharacterList from "components/molecules/CharacterList/CharacterList";
import FilterModal from "components/molecules/Filters/FilterModal/FilterModal";
import Filters from "components/molecules/Filters/Filters";
import SortByVersionNo from "components/molecules/SortByVersionNo/SortByVersionNo";

import s from "./Page.module.css";

const Page = () => (
  <div
    className={cx(s.pageBackground, "flex justify-center items-start pt-10")}
  >
    <div className={cx("flex flex-col")}>
      <div className="flex justify-between items-center pb-2 mx-4">
        <SortByVersionNo />
        <FilterModal />
      </div>
      <CharacterList />
    </div>
    <Filters className="hidden md:flex" />
  </div>
);

export default Page;

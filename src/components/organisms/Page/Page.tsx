import cx from "classnames";
import CharacterList from "components/molecules/CharacterList/CharacterList";
import Filters from "components/molecules/Filters/Filters";
import Sorting from "components/molecules/Sorting/Sorting";

import s from "./Page.module.css";

const Page = () => (
  <div className={cx(s.pageBackground, "flex justify-center items-start pt-10")}>
    <div className={cx("flex flex-col")}>
      <Sorting />
      <CharacterList />
    </div>
    <Filters />
  </div>
);

export default Page;

import cx from "classnames";
import CharacterList from "components/molecules/CharacterList/CharacterList";
import Filters from "components/molecules/Filters/Filters";
import Sorting from "components/molecules/Sorting/Sorting";

import s from "./Page.module.css";

const Page = () => (
  <div className={cx(s.pageBackground, "flex justify-center pt-10")}>
    <CharacterList />
    <div className={cx("flex flex-col")}>
      <Filters />
      <Sorting />
    </div>
  </div>
);

export default Page;

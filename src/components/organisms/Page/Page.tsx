import cx from "classnames";
import CharacterList from "components/molecules/CharacterList/CharacterList";
import Filters from "components/molecules/Filters/Filters";

import s from "./Page.module.css";

const Page = () => (
  <div className={cx(s.pageBackground, "flex justify-center pt-10")}>
    <CharacterList />
    <Filters />
  </div>
);

export default Page;

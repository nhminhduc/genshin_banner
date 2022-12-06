import cx from "classnames";
import FilterForm from "components/atoms/FilterForm/FilterForm";
import CharacterList from "components/molecules/CharacterList/CharacterList";

import s from "./Page.module.css";

const Page = () => (
  <div className={cx(s.pageBackground, "flex flex-col items-center")}>
    <FilterForm />
    <CharacterList />
  </div>
);

export default Page;

import cx from "classnames";
import FilterElements from "components/atoms/FilterButton.tsx/FilterElements/FilterElements";
import FilterRarities from "components/atoms/FilterButton.tsx/FilterRarities/FilterRarities";
import FilterNameInput from "components/atoms/FilterForm/FilterName/FilterNameInput";
import CharacterList from "components/molecules/CharacterList/CharacterList";

import s from "./Page.module.css";

const Page = () => (
  <div className={cx(s.pageBackground, "flex flex-col items-center")}>
    <FilterNameInput />
    <FilterElements />
    <FilterRarities />
    <CharacterList />
  </div>
);

export default Page;

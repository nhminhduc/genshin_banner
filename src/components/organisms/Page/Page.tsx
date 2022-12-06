import cx from "classnames";
import CharacterList from "components/molecules/CharacterList/CharacterList";

import s from "./Page.module.css";

const Page = () => (
  <div className={cx(s.pageBackground, "flex justify-center")}>
    <CharacterList />
  </div>
);

export default Page;

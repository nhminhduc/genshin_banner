import CharacterList from "components/molecules/CharacterList/CharacterList";
import cx from "classnames";
import s from "./Page.module.css";

const Page = () => {
  return (
    <div className={cx(s.pageBackground, "flex justify-center")}>
      <CharacterList />
    </div>
  )
};

export default Page;

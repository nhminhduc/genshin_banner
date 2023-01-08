import cx from "classnames";
import CharacterCard from "components/molecules/CharacterCard/CharacterCard";
import CharacterCardModal from "components/molecules/CharacterCard/CharacterCardModal/CharacterCardModal";
import CharacterList from "components/molecules/CharacterList/CharacterList";
import FilterModal from "components/molecules/Filters/FilterModal/FilterModal";
import Filters from "components/molecules/Filters/Filters";
import SortByVersionNo from "components/molecules/SortByVersionNo/SortByVersionNo";
import { useCharacterContext } from "hooks/useCharacterContext";
import { useFilterContext } from "hooks/useFilterContext";
import { useWindowSize } from "hooks/useWindowSize";

import s from "./Page.module.css";

const Page = () => {
  const characterDataContext = useCharacterContext();
  const { currentCharacterName, setCurrentCharacterName } = useFilterContext();
  const currentCharacter = characterDataContext.filter(
    ({ name }) => name === currentCharacterName,
  )[0];
  const { width } = useWindowSize();

  const closeModal = () => {
    setCurrentCharacterName("");
  };

  const renderCharacterCard = () => {
    if (width && width > 1536) {
      return <CharacterCard character={currentCharacter} />;
    }
    return (
      <CharacterCardModal
        character={currentCharacter}
        onCloseModal={closeModal}
        onOutsideClick={closeModal}
      />
    );
  };
  return (
    <div
      className={cx(
        s.pageBackground,
        "flex justify-center items-start pt-10 lg:mx-48",
      )}
    >
      <Filters className="hidden lg:flex" />
      <div className={cx("flex flex-col")}>
        <div className="flex justify-between items-center pb-2 mx-4">
          <FilterModal />
          <SortByVersionNo />
        </div>
        <CharacterList />
      </div>
      {currentCharacter ? renderCharacterCard() : null}
    </div>
  );
};

export default Page;

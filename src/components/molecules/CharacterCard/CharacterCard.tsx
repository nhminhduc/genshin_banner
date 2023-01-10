import cx from "classnames";
import type { CharacterData } from "types/CharacterType";

import CharacterCardHeader from "./CharacterCardHeader/CharacterCardHeader";
import CharacterMaterials from "./CharacterMaterials/CharacterMaterials";

import s from "./CharacterCard.module.css";
import { useEffect, useState } from "react";

export type CharacterCardProps = {
  character: CharacterData;
  className?: string;
  onCloseButton?(): void;
};
const CharacterCard = ({
  character,
  className,
  onCloseButton,
}: CharacterCardProps) => {
  const {
    name,
    ascension_materials: ascensionMaterials,
    talent_materials: talentMaterials,
  } = character;

  const [isFadedIn, setFadedIn] = useState(true);
  useEffect(() => {
    setFadedIn(false);
    setTimeout(() => {
      setFadedIn(true);
    }, 10);
  }, [name]);

  return (
    <div
      className={cx(
        `${isFadedIn ? s.characterCard : ''}`,
        "relative flex flex-col rounded border border-[2px] p-4 2xl:ml-4 2xl:mt-12 2xl:w-full 2xl:h-1/2 2xl:p-6 bg-electro-light/90 border-electro-dark overflow-auto",
        className,
      )}
    >
      <CharacterCardHeader
        character={character}
        onCloseButton={onCloseButton}
      />
      <CharacterMaterials
        materials={ascensionMaterials}
        title="Ascension Materials"
      />
      <CharacterMaterials
        materials={talentMaterials}
        title="Talent Materials (x1)"
      />
    </div>
  );
};

export default CharacterCard;

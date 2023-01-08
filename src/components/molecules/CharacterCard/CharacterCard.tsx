import cx from "classnames";
import type { CharacterData } from "types/CharacterType";

import CharacterCardHeader from "./CharacterCardHeader/CharacterCardHeader";
import CharacterMaterials from "./CharacterMaterials/CharacterMaterials";

export type CharacterCardProps = {
  character: CharacterData;
  className?: string;
};
const CharacterCard = ({ character, className }: CharacterCardProps) => {
  const {
    ascension_materials: ascensionMaterials,
    talent_materials: talentMaterials,
  } = character;

  return (
    <div
      className={cx(
        "relative flex flex-col rounded border border-[2px] p-4 2xl:ml-4 2xl:mt-12 2xl:w-full 2xl:h-1/2 2xl:p-6 bg-electro-light/50 border-electro-dark",
        className,
      )}
    >
      <CharacterCardHeader character={character} />
      <CharacterMaterials
        materials={ascensionMaterials}
        title="Ascension Materials"
      />
      <CharacterMaterials
        materials={talentMaterials}
        title="Talent Materials (1 Talent)"
      />
    </div>
  );
};

export default CharacterCard;

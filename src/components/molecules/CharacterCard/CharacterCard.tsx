import cx from "classnames";
import CharacterCardHeader from "components/atoms/CharacterCardHeader/CharacterCardHeader";
import type { CharacterData } from "types/CharacterType";

export type CharacterCardProps = {
  character: CharacterData;
  className?: string;
};
const CharacterCard = ({ character, className }: CharacterCardProps) => {
  const {
    name,
    vision_key: visionKey,
  } = character;

  return (
    <div
      className={cx(
        className,
        "2xl:ml-4 2xl:mt-12 2xl:w-full 2xl:h-1/2 2xl:flex 2xl:p-6 bg-[#994c4c]/25 relative flex rounded",
        {
          "bg-anemo-normal/25": visionKey === "anemo",
          "bg-cryo-normal/25": visionKey === "cryo",
          "bg-dendro-normal/25": visionKey === "dendro",
          "bg-electro-normal/25": visionKey === "electro",
          "bg-geo-normal/25": visionKey === "geo",
          "bg-hydro-normal/25": visionKey === "hydro",
          "bg-pyro-normal/25": visionKey === "pyro",
        }
      )}
    >
      <CharacterCardHeader
        className="opacity-100"
        character={character}
      />
    </div>
  );
};

export default CharacterCard;

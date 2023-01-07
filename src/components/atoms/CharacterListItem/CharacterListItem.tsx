import { ImageListItem } from "@mui/material";
import cx from "classnames";
import { useFilterContext } from "hooks/useFilterContext";

import CharacterListItemLabel from "./CharacterListItemLabel";

interface CharacterListItemProps {
  found?: boolean;
  name: string;
  noVersions?: number;
  rarity: string;
  visionKey: string;
}

const CharacterListItem = ({
  found,
  name,
  noVersions,
  rarity,
  visionKey,
}: CharacterListItemProps) => {
  const { setCurrentCharacterName } = useFilterContext();
  const handleOnClick = () => {
    setCurrentCharacterName(name);
  };

  return (
    <ImageListItem
      className={cx(
        "rounded border-2 border-[#ebe7df] border-solid flex group hover:scale-[1.2] hover:z-10 hover:transition-all hover:cursor-pointer",
        {
          "opacity-30": !found,
          "bg-[#9470bb]": rarity === "4",
          "bg-[#c87c24]": rarity === "5",
        },
      )}
      onClick={handleOnClick}
    >
      <span>
        <img
          alt={visionKey}
          className="w-8 h-8 absolute right-0"
          src={`images/elements/${visionKey}.png`}
        />
      </span>
      <img
        alt={name}
        className={cx("characterImage", "w-full h-full truncate")}
        loading="lazy"
        src={`images/characters/${name}/icon-big.webp`}
      />
      <CharacterListItemLabel name={name} noVersions={noVersions} />
    </ImageListItem>
  );
};

export default CharacterListItem;

import { ImageListItem } from "@mui/material";
import { elements } from "assets/images";
import cx from "classnames";

import CharacterListItemLabel from "./CharacterListItemLabel";

interface CharacterListItemProps {
  name: string;
  visionKey: string;
  noVersions?: string;
  found?: boolean;
}

const CharacterListItem = ({
  name,
  visionKey,
  noVersions = "0",
  found,
}: CharacterListItemProps) => {
  return (
    <ImageListItem
      className={cx(
        "bg-amber-100/50 rounded border-2 border-[#ebe7df] border-solid flex",
        { "opacity-30": !found }
      )}
    >
      <span>
        <img alt={visionKey} className="w-8 h-8 absolute right-0" src={elements[visionKey as keyof typeof elements]} />
      </span>
      <img
        alt={name}
        className={cx("characterImage", "w-full h-full truncate")}
        loading="lazy"
        src={`characters/${name}/icon-big.webp`}
      />
      <CharacterListItemLabel name={name} noVersions={noVersions} />
    </ImageListItem>
  )
};

export default CharacterListItem;

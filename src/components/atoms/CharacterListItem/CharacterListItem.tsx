import { ImageListItem } from "@mui/material";
import { elements } from "assets/images";
import cx from "classnames";

import CharacterListItemLabel from "./CharacterListItemLabel";

interface CharacterListItemProps {
  found?: boolean;
  link: string;
  name: string;
  noVersions?: string;
  visionKey: string;
  rarity: string;
}

const CharacterListItem = ({
  found,
  link,
  name,
  noVersions = "0",
  visionKey,
  rarity
}: CharacterListItemProps) => (
  <a href={link}>
    <ImageListItem
      className={cx(
        "bg-[#994c4c] rounded border-2 border-[#ebe7df] border-solid flex",
        {
          "opacity-30": !found,
          "bg-[#9470bb]": rarity === "4",
          "bg-[#c87c24]": rarity === "5",
        },
      )}
    >
      <span>
        <img
          alt={visionKey}
          className="w-8 h-8 absolute right-0"
          src={elements[visionKey as keyof typeof elements]}
        />
      </span>
      <img
        alt={name}
        className={cx("characterImage", "w-full h-full truncate")}
        loading="lazy"
        src={`characters/${name}/icon-big.webp`}
      />
      <CharacterListItemLabel name={name} noVersions={noVersions} />
    </ImageListItem>
  </a>
);

export default CharacterListItem;

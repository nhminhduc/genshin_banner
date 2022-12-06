import { ImageListItem } from "@mui/material";
import cx from "classnames";

import CharacterListItemLabel from "./CharacterListItemLabel";

interface CharacterListItemProps {
  name: string;
  noVersions?: string;
}

const CharacterListItem = ({
  name,
  noVersions = "0",
}: CharacterListItemProps) => (
  <ImageListItem
    className="bg-amber-100/50 rounded border-2 border-[#ebe7df] border-solid"
    sx={{ height: 156, width: "auto" }}
  >
    <img
      alt={name}
      className={cx("characterImage", "w-full h-full truncate")}
      loading="lazy"
      src={`characters/${name}/icon-big.webp`}
      srcSet={`characters/${name}/icon-big.webp`}
    />
    <CharacterListItemLabel name={name} noVersions={noVersions} />
  </ImageListItem>
);

export default CharacterListItem;

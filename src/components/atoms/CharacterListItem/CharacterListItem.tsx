import { ImageListItem } from "@mui/material";
import cx from "classnames";

interface CharacterListItemProps {
  name: string;
  noVersions: string;
  rarity: string;
}

const CharacterListItem = ({
  name,
  noVersions,
  rarity,
}: CharacterListItemProps) => (
  <ImageListItem
    className="bg-red rounded border-2	border-black border-solid"
    sx={{ height: 156, width: 112 }}
  >
    <img
      alt={name}
      className={cx("characterImage", "w-full h-full truncate")}
      loading="lazy"
      src={`characters/${name}/icon-big.webp`}
      srcSet={`characters/${name}/icon-big.webp`}
    />
    <div
      className={cx(
        "flex bg-transparent left-0 right-0 bottom-0 justify-between",
      )}
    >
      <div
        className={cx("font-bold text-xl", {
          "text-blue-600": Number(noVersions) < 10,
          "text-red-600": Number(noVersions) > 8,
        })}
      >
        {noVersions}
      </div>
      <div className="font-normal text-xl">{rarity} ★</div>
    </div>
  </ImageListItem>
);

export default CharacterListItem;

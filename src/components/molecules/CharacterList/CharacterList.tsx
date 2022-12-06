import { ImageList, useMediaQuery } from "@mui/material";
import cx from "classnames";
import CharacterListItem from "components/atoms/CharacterListItem/CharacterListItem";
import { useCharacterContext } from "hooks/useCharacterContext";
import type { CharacterData } from "types/CharacterType";

const CharacterList = () => {
  const characterDataContext: CharacterData[] = useCharacterContext();
  const mediumSize = useMediaQuery("(min-width:660px)");
  const ImageListStyle = mediumSize
    ? { height: 640, width: 560 }
    : { height: 480, width: 360 };

  return (
    <ImageList
      className={cx("overflow-hidden")}
      cols={mediumSize ? 4 : 3}
      gap={4}
      rowHeight={156}
      sx={{ ...ImageListStyle }}
    >
      {characterDataContext.map((characterData) => {
        const { fromLastBanner, name, rarity } = characterData;
        const { noVersions } = fromLastBanner;
        return (
          <CharacterListItem
            key={name}
            name={name}
            noVersions={noVersions}
            rarity={rarity}
          />
        );
      })}
    </ImageList>
  );
};

export default CharacterList;

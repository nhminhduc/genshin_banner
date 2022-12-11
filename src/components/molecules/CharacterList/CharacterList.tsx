import { ImageList, useMediaQuery } from "@mui/material";
import cx from "classnames";
import CharacterListItem from "components/atoms/CharacterListItem/CharacterListItem";
import { useCharacterContext } from "hooks/useCharacterContext";
import type { CharacterData } from "types/CharacterType";

import s from "./CharacterList.module.css";

const CharacterList = () => {
  const characterDataContext: CharacterData[] = useCharacterContext();
  const mediumSize = useMediaQuery("(min-width:660px)");
  const ImageListStyle = mediumSize
    ? { height: 640, width: 600 }
    : { height: 480, width: 320 };

  return (
    <ImageList
      className={cx(s.scrollbar, "overflow-x-hidden")}
      cols={mediumSize ? 4 : 3}
      gap={4}
      rowHeight={156}
      sx={{ ...ImageListStyle }}
    >
      {characterDataContext.map((characterData) => {
        const {
          found,
          fromLastBanner,
          link,
          name,
          rarity,
          vision_key: visionKey,
        } = characterData;
        const { noVersions } = fromLastBanner;
        return (
          <CharacterListItem
            found={found}
            key={name}
            link={link}
            name={name}
            noVersions={noVersions}
            rarity={rarity}
            visionKey={visionKey}
          />
        );
      })}
    </ImageList>
  );
};

export default CharacterList;

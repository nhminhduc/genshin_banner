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
    : { height: 480, width: 360 };

  return (
    <ImageList
      className={cx(s["scrollbar"], "overflow-x-hidden")}
      cols={mediumSize ? 4 : 3}
      gap={4}
      rowHeight={156}
      sx={{ ...ImageListStyle }}
    >
      {characterDataContext.map((characterData) => {
        const { fromLastBanner, name, vision_key: visionKey, found } = characterData;
        const { noVersions } = fromLastBanner;
        return (
          <CharacterListItem key={name} name={name} visionKey={visionKey} noVersions={noVersions} found={found} />
        );
      })}
    </ImageList>
  );
};

export default CharacterList;
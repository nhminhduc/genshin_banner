import { ImageList, ImageListItem, ImageListItemBar, useMediaQuery } from "@mui/material";
import { useCharacterDataContext } from "hooks/useCharacterData";
import cx from "classnames";
import "./CharacterList.module.css";

const CharacterList = () => {
  const characterDataContext = useCharacterDataContext();
  const mediumSize = useMediaQuery("(min-width:660px)");
  const ImageListStyle = mediumSize ? { width: 480, height: 480 } : { width: 360, height: 360 };

  return (
    <ImageList
      className="characterImageList"
      sx={{ ...ImageListStyle, }}
      gap={4}
      cols={mediumSize ? 4 : 3}
      rowHeight={156}>
      {
        characterDataContext.map(({ rarity, name, fromLastBanner }: any) => {
          const { noVersions } = fromLastBanner;
          return (
            <ImageListItem key={name} sx={{ width: 112, height: 156 }} className="bg-red rounded border-2	border-black border-solid">
              <img
                src={`characters/${name}/icon-big.webp`}
                srcSet={`characters/${name}/icon-big.webp`}
                alt={`${name} image`}
                loading="lazy"
                className={cx("characterImage", "w-full h-full truncate")}
              />
              <div className={cx("flex bg-transparent left-0 right-0 bottom-0 justify-between")}>
                <div className={cx("font-bold text-xl", {
                  "text-red-600": parseInt(noVersions) > 8,
                  "text-blue-600": parseInt(noVersions) < 10
                })}>{noVersions}</div>
                <div className="font-normal text-xl">{rarity} ★</div>
              </div>
            </ImageListItem>
          )
        })
      }
    </ImageList >
  )
}

export default CharacterList

import { ImageList, ImageListItem } from "@mui/material"
import { useCharacterDataContext } from "hooks/useCharacterData";

const CharacterList = () => {
  const characterDataContext = useCharacterDataContext();

  return (<ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
    {characterDataContext.map(({ name }: any) => {

      return (
        <ImageListItem key={name}>
          <img
            src={`characters/${name}/icon-big.webp?w=164&h=164&fit=crop&auto=format`}
            srcSet={`characters/${name}/icon-big.webp?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={`${name} image`}
            loading="lazy"
          />
        </ImageListItem>
      )
    })}
  </ImageList>)
}

export default CharacterList;

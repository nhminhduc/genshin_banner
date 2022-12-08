import { useCharacterData } from "hooks/useCharacterData";
import { useFilterContext } from "hooks/useFilterContext";
import { createContext, useMemo } from "react";
import { CharacterData } from "types/CharacterType";

export const CharacterContext = createContext<CharacterData[] | undefined>(
  undefined,
);

const CharacterContextProvider = ({ children }: any) => {
  const characterData: CharacterData[] = useCharacterData();
  const { elementFilter, nameFilter, rarityFilter } = useFilterContext();

  const characters = useMemo(
    () =>
      characterData
        .map((character) => {
          const { name, rarity, vision_key: visionKey } = character;
          if (
            (nameFilter === undefined || name.includes(nameFilter)) &&
            (elementFilter === undefined ||
              elementFilter.some((element) => element === visionKey)) &&
            (rarityFilter === undefined ||
              rarityFilter.some((rarityF) => rarityF === rarity))
          ) {
            return { found: true, ...character };
          }
          return character;
        })
        .sort((obj1, obj2) => {
          if (obj1.found !== true) {
            return 1;
          }
          if (obj2.found !== true) {
            return -1;
          }
          return 0;
        }),
    [characterData, nameFilter, elementFilter, rarityFilter],
  );

  return (
    <CharacterContext.Provider value={characters}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContextProvider;

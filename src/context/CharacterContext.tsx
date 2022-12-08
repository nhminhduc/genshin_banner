import { useCharacterData } from "hooks/useCharacterData";
import { useFilterContext } from "hooks/useFilterContext";
import { createContext, useMemo } from "react";
import { CharacterData } from "types/CharacterType";

export const CharacterContext = createContext<CharacterData[] | undefined>(undefined);

const CharacterContextProvider = ({ children }: any) => {
  const characterData: CharacterData[] = useCharacterData();
  const { nameFilter, elementFilter, rarityFilter } = useFilterContext();

  let characters = useMemo(() => {
    return characterData.map((character) => {
      const { name, vision_key, rarity } = character;
      if ((nameFilter === undefined || name.includes(nameFilter))
        && (elementFilter === undefined || elementFilter.some((element) => element === vision_key))
        && (rarityFilter === undefined || rarityFilter.some((rarityF) => rarityF === rarity))) {
        return { "found": true, ...character };
      } else {
        return character;
      }
    }).sort((obj1, obj2) => {
      if (obj1.found !== true) {
        return 1;
      }
      if (obj2.found !== true) {
        return -1;
      }
      return 0;
    })
  }, [nameFilter, elementFilter, rarityFilter]);

  return (
    <CharacterContext.Provider value={characters}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContextProvider;

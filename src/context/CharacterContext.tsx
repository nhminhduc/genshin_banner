import { useCharacterData } from "hooks/useCharacterData";
import { useFilterContext } from "hooks/useFilterContext";
import { createContext } from "react";
import { CharacterData } from "types/CharacterType";

export const CharacterContext = createContext<CharacterData[] | undefined>(undefined);

const CharacterContextProvider = ({ children }: any) => {
  const characterData: CharacterData[] = useCharacterData();
  const { elementFilter, nameFilter, rarityFilter } = useFilterContext();

  let characters = characterData.map((character) => {
    if ((elementFilter !== undefined ? character.vision_key.includes(elementFilter) : true)
      && (nameFilter !== undefined ? character.name.includes(nameFilter) : true)
      && (rarityFilter !== undefined ? character.rarity.includes(rarityFilter) : true)) {
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
  });

  return (
    <CharacterContext.Provider value={characters}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContextProvider;

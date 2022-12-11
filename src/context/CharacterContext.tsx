import { useCharacterData } from "hooks/useCharacterData";
import { useFilterContext } from "hooks/useFilterContext";
import { createContext, useMemo } from "react";
import { CharacterData } from "types/CharacterType";

export const CharacterContext = createContext<CharacterData[] | undefined>(
  undefined,
);

const CharacterContextProvider = ({ children }: any) => {
  const characterData: CharacterData[] = useCharacterData();
  const { elementFilter, nameFilter, rarityFilter, sortByVersionNoDesc } = useFilterContext();

  const filterCharacters = (character: CharacterData) => {
    const { name, rarity, vision_key: visionKey } = character;
    return (nameFilter === undefined || name.includes(nameFilter)) &&
      (elementFilter === undefined ||
        elementFilter.some((element) => element === visionKey)) &&
      (rarityFilter === undefined ||
        rarityFilter.some((rarityF) => rarityF === rarity));
  }

  const sortByVersionNo = (obj1: number | undefined, obj2: number | undefined) => {
    if (sortByVersionNoDesc === true) {
      if (obj1 === undefined) {
        return 1;
      }
      if (obj2 === undefined) {
        return -1;
      }
      return obj2 - obj1;
    }
    return 0;
  }

  const characters = useMemo(
    () => {
      const foundCharacters = characterData
        .filter((character) => filterCharacters(character))
        .map((character) => {
          if (character.fromLastBanner.noVersions === undefined && sortByVersionNoDesc === true) {
            return character;
          }
          return { found: true, ...character }
        })
        .sort((obj1, obj2) => {
          const { noVersions: obj1VersionNo } = obj1.fromLastBanner;
          const { noVersions: obj2VersionNo } = obj2.fromLastBanner;
          return sortByVersionNo(obj1VersionNo, obj2VersionNo);
        });
      const unfoundCharacters = characterData
        .filter((character) => (
          !foundCharacters.map(({ name }) => name).includes(character.name)
        )).sort((obj1, obj2) => {
          const { noVersions: obj1VersionNo } = obj1.fromLastBanner;
          const { noVersions: obj2VersionNo } = obj2.fromLastBanner;
          return sortByVersionNo(obj1VersionNo, obj2VersionNo);
        });
      return [...foundCharacters, ...unfoundCharacters];
    },
    [characterData, nameFilter, elementFilter, rarityFilter, sortByVersionNoDesc],
  );

  return (
    <CharacterContext.Provider value={characters}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContextProvider;

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

  const characters = useMemo(
    () => {
      const foundCharacters = characterData
        .filter((character) => {
          const { name, rarity, vision_key: visionKey } = character;
          return (nameFilter === undefined || name.includes(nameFilter)) &&
            (elementFilter === undefined ||
              elementFilter.some((element) => element === visionKey)) &&
            (rarityFilter === undefined ||
              rarityFilter.some((rarityF) => rarityF === rarity));
        }).map((character) => {
          if (character.fromLastBanner.noVersions === undefined && sortByVersionNoDesc === true) {
            return character;
          }
          return { found: true, ...character }
        })
        .sort((obj1, obj2) => {
          const { noVersions: obj1VersionNo } = obj1.fromLastBanner;
          const { noVersions: obj2VersionNo } = obj2.fromLastBanner;
          if (sortByVersionNoDesc === true) {
            if (obj1VersionNo === undefined) {
              return 1;
            }
            if (obj2VersionNo === undefined) {
              return -1;
            }
            return obj2VersionNo - obj1VersionNo;
          }
          return 0;
        });
      const unfoundCharacters = characterData
        .filter((character) => (
          !foundCharacters.map(({ name }) => name).includes(character.name)
        )).sort((obj1, obj2) => {
          const { noVersions: obj1VersionNo } = obj1.fromLastBanner;
          const { noVersions: obj2VersionNo } = obj2.fromLastBanner;
          if (sortByVersionNoDesc === true) {
            if (obj1VersionNo === undefined) {
              return 1;
            }
            if (obj2VersionNo === undefined) {
              return -1;
            }
            return obj2VersionNo - obj1VersionNo;
          }
          return 0;
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

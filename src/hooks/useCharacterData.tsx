import { useContext, useMemo } from "react";
import characters from "assets/data/characters.json";
import fromLastBanner from "utils/fromLastBanner";
import { CharacterDataContext } from "components/organisms/Page/PageWrapper";

export function useCharacterfromJson() {
  const charactersJSON = useMemo(() => characters, [characters]);
  return charactersJSON;
}

export function useCharacterData() {
  const charactersJSON = useCharacterfromJson();
  const characterData = charactersJSON.map((character: any) => {
    character["fromLastBanner"] = fromLastBanner(character.banner);
    return character;
  }) as unknown as CharacterData[];
  return characterData;
}

export function useCharacterDataContext() {
  const context = useContext(CharacterDataContext);
  if (context === undefined) {
    throw new Error("useCharacterDataContext must be used within a CharacterDataProvider");
  }
  return context;
}

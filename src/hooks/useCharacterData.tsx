import { useMemo } from "react";
import characters from "assets/data/characters.json";
import fromLastBanner from "utils/fromLastBanner";

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

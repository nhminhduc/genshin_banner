import characters from "assets/data/characters.json";
import { useMemo } from "react";
import { CharacterData, FromLastBanner } from "types/CharacterType";
import GetFromLastBanner from "utils/fromLastBanner";

export function useCharacterfromJson() {
  const charactersJSON = useMemo(() => characters, []);
  return charactersJSON;
}

export function useCharacterData() {
  const charactersJSON = useCharacterfromJson();
  const characterData: CharacterData[] = charactersJSON.map(
    (character): CharacterData => {
      const temp: FromLastBanner = GetFromLastBanner(character.banner);
      return { fromLastBanner: temp, ...character } as unknown as CharacterData;
    },
  );
  return characterData;
}

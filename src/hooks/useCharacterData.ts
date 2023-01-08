import characters from "assets/data/characters.json";
import materials from "assets/data/materials.json";
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
      const characterMaterial = materials.filter(
        ({ name }) => name === character.name,
      )[0];
      const { ascension_items: ascensionItems, talent_items: talentItems } =
        characterMaterial;
      return {
        ascension_materials: ascensionItems,
        talent_materials: talentItems,
        fromLastBanner: temp,
        ...character,
      } as unknown as CharacterData;
    },
  );
  return characterData;
}

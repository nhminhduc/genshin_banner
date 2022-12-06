import { CharacterContext } from "context/CharacterContext";
import { useContext } from "react";
import { CharacterData } from "types/CharacterType";

export function useCharacterContext() {
  const context = useContext(CharacterContext);
  if (context === undefined) {
    throw new Error(
      "useCharacterContext must be used within a CharacterProvider",
    );
  }
  return context as unknown as CharacterData[];
}

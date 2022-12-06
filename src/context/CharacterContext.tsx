import { useCharacterData } from "hooks/useCharacterData";
import { createContext } from "react";
import { CharacterData } from "types/CharacterType";

export const CharacterContext = createContext<CharacterData[] | undefined>(
  undefined,
);

const CharacterContextProvider = ({ children }: any) => {
  const characterData: CharacterData[] = useCharacterData();

  return (
    <CharacterContext.Provider value={characterData}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContextProvider;

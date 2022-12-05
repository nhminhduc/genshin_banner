import { createContext } from "react";
import { useCharacterData } from "hooks/useCharacterData";
import Page from "./Page";

export const CharacterDataContext = createContext<CharacterData[]>([{} as CharacterData]);
const PageWrapper = () => {
  const characterData = useCharacterData();
  return (
    <CharacterDataContext.Provider value={characterData}>
      <Page />
    </CharacterDataContext.Provider>
  )
};

export default PageWrapper;

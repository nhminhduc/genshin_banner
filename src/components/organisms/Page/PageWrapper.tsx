import CharacterContextProvider from "context/CharacterContext";

import Page from "./Page";

const PageWrapper = () => (
  <CharacterContextProvider>
    <Page />
  </CharacterContextProvider>
);

export default PageWrapper;

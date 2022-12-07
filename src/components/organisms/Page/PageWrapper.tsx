import CharacterContextProvider from "context/CharacterContext";
import FilterContextProvider from "context/FilterContext";

import Page from "./Page";

const PageWrapper = () => (
  <FilterContextProvider>
    <CharacterContextProvider>
      <Page />
    </CharacterContextProvider>
  </FilterContextProvider>
);

export default PageWrapper;

import CharacterContextProvider from "context/CharacterContext";
import FilterContextProvider from "context/FilterContext";

import Page from "./Page";

const PageWrapper = () => (
  <CharacterContextProvider>
    <FilterContextProvider>
      <Page />
    </FilterContextProvider>
  </CharacterContextProvider>
);

export default PageWrapper;

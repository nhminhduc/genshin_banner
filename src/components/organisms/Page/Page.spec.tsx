import { render } from "@testing-library/react";
import CharacterContextProvider from "context/CharacterContext";
import FilterContextProvider from "context/FilterContext";
import { describe, expect, test } from "vitest";

import Page from "./Page";

describe("Page test", () => {
  test("Page load", () => {
    const { container } = render(
      <FilterContextProvider>
        <CharacterContextProvider>
          <Page />
        </CharacterContextProvider>
      </FilterContextProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});

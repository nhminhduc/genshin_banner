import { render } from "@testing-library/react";
import CharacterContextProvider from "context/CharacterContext";
import FilterContextProvider from "context/FilterContext";
import { describe, expect, test } from "vitest";

import CharacterListItem from "./CharacterListItem";

describe("CharacterListItem test", () => {
  test("CharacterListItem snapshot", () => {
    const { container } = render(
      <FilterContextProvider>
        <CharacterContextProvider>
          <CharacterListItem
            name="test CharacterListItem"
            rarity="4"
            visionKey="pyro"
          />
        </CharacterContextProvider>
      </FilterContextProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});

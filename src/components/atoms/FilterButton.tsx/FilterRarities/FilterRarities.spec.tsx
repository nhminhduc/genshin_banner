import { render } from "@testing-library/react";
import CharacterContextProvider from "context/CharacterContext";
import FilterContextProvider from "context/FilterContext";
import { describe, expect, test } from "vitest";

import FilterRarities from "./FilterRarities";

describe("FilterRarities test", () => {
  test("FilterRarities load", () => {
    const { container } = render(
      <FilterContextProvider>
        <CharacterContextProvider>
          <FilterRarities />
        </CharacterContextProvider>
      </FilterContextProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});

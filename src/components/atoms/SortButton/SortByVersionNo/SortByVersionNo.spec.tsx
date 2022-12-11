import { render } from "@testing-library/react";
import CharacterContextProvider from "context/CharacterContext";
import FilterContextProvider from "context/FilterContext";
import { describe, expect, test } from "vitest";

import SortByVersionNo from "./SortByVersionNo";

describe("SortByVersionNo test", () => {
  test("SortByVersionNo load", () => {
    const { container } = render(
      <FilterContextProvider>
        <CharacterContextProvider>
          <SortByVersionNo />
        </CharacterContextProvider>
      </FilterContextProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});

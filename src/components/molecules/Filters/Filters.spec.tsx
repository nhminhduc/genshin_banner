import { render } from "@testing-library/react";
import CharacterContextProvider from "context/CharacterContext";
import FilterContextProvider from "context/FilterContext";
import { describe, expect, test } from "vitest";

import Filters from "./Filters";

describe("Filters test", () => {
  test("Filters load", () => {
    const { container } = render(
      <FilterContextProvider>
        <CharacterContextProvider>
          <Filters />
        </CharacterContextProvider>
      </FilterContextProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});

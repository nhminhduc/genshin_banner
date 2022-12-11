import { render } from "@testing-library/react";
import CharacterContextProvider from "context/CharacterContext";
import FilterContextProvider from "context/FilterContext";
import { describe, expect, test } from "vitest";

import FilterElements from "./FilterElements";

describe("FilterElements test", () => {
  test("FilterElements load", () => {
    const { container } = render(
      <FilterContextProvider>
        <CharacterContextProvider>
          <FilterElements />
        </CharacterContextProvider>
      </FilterContextProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});

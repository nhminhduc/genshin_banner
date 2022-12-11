import { render } from "@testing-library/react";
import CharacterContextProvider from "context/CharacterContext";
import FilterContextProvider from "context/FilterContext";
import { describe, expect, test } from "vitest";

import FilterNameInput from "./FilterNameInput";

describe("FilterNameInput test", () => {
  test("FilterNameInput load", () => {
    const { container } = render(
      <FilterContextProvider>
        <CharacterContextProvider>
          <FilterNameInput />
        </CharacterContextProvider>
      </FilterContextProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});

import { render } from "@testing-library/react";
import CharacterContextProvider from "context/CharacterContext";
import FilterContextProvider from "context/FilterContext";
import { describe, expect, test } from "vitest";

import CharacterList from "./CharacterList";

describe("CharacterList test", () => {
  test("CharacterList load", () => {
    const { container } = render(
      <FilterContextProvider>
        <CharacterContextProvider>
          <CharacterList />
        </CharacterContextProvider>
      </FilterContextProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});

import { render } from "@testing-library/react";
import CharacterContextProvider from "context/CharacterContext";
import { describe, expect, test } from "vitest";

import CharacterList from "./CharacterList";

describe("CharacterList test", () => {
  test("CharacterList load", () => {
    const { asFragment } = render(
      <CharacterContextProvider>
        <CharacterList />
      </CharacterContextProvider>,
    );
    expect(asFragment).toMatchSnapshot();
  });
});

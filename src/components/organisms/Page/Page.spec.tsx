import { render } from "@testing-library/react";
import CharacterContextProvider from "context/CharacterContext";
import { describe, expect, test } from "vitest";

import Page from "./Page";

describe("Page test", () => {
  test("Page load", () => {
    const { asFragment } = render(
      <CharacterContextProvider>
        <Page />
      </CharacterContextProvider>,
    );
    expect(asFragment).toMatchSnapshot();
  });
});

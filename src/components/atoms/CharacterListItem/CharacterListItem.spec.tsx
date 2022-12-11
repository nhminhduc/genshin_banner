import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import CharacterListItem from "./CharacterListItem";

describe("CharacterListItem test", () => {
  test("CharacterListItem snapshot", () => {
    const { container } = render(
      <CharacterListItem
        link="https://google.com"
        name="test CharacterListItem"
        rarity="4"
        visionKey="pyro"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});

import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import CharacterListItemLabel from "./CharacterListItemLabel";

describe("CharacterListItem test", () => {
  test("CharacterListItem snapshot", () => {
    const { container } = render(
      <CharacterListItemLabel name="CharacterListItem test" noVersions={4} />,
    );
    expect(container).toMatchSnapshot();
  });
});

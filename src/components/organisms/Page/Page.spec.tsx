import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Page from "./Page";

describe("Page test", () => {
  test("Page load", () => {
    const { asFragment } = render(<Page />);
    expect(asFragment).toMatchSnapshot();
  });
});

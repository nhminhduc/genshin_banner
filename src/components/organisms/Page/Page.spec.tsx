import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import Page from "./Page";

describe("Page test", () => {
  test("Page load", () => {
    const { asFragment } = render(<Page />);
    expect(asFragment).toMatchSnapshot();
  });
});

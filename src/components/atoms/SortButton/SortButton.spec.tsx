import { render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import SortButton from "./SortButton";

describe("SortButton test", () => {
  test("SortButton load", () => {
    const mockFunction = vi.fn();
    const { container } = render(
      <SortButton
        id="SortButton-test"
        name="SortButton test"
        onButtonClick={mockFunction}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});

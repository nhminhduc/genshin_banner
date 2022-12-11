import { render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import FilterInput from "./FilterInput";

describe("FilterInput test", () => {
  test("FilterInput load", () => {
    const mockFunction = vi.fn();
    const { container } = render(
      <FilterInput
        name="FilterInput test"
        onChange={mockFunction}
        value="FilterInput test"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});

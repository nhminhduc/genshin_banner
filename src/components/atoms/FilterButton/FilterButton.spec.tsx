import { render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import FilterButton from "./FilterButton";

describe("FilterButton test", () => {
  test("FilterButton load", () => {
    const mockFunction = vi.fn();
    const { container } = render(
      <FilterButton
        id="FilterButton-test"
        name="FilterButton test"
        onButtonClick={mockFunction}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});

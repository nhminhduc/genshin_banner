import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import FilterModal from "./FilterModal";

describe("FilterModal test", () => {
  test("FilterModal load", () => {
    const { container } = render(<FilterModal />);
    expect(container).toMatchSnapshot();
  });
});

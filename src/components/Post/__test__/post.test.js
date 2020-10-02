import React from "react";
import { render, cleanup } from "@testing-library/react";

import Post from "../Post";

afterEach(cleanup);

describe("Post Componenet", () => {
  it("should take a snapshot", () => {
    const { asFragment } = render(<Post id="1" />);

    expect(asFragment(<Post id="1" />)).toMatchSnapshot();
  });

  it("title should equal to empty", () => {
    const { getByTestId } = render(<Post />);
    expect(getByTestId("title")).toHaveTextContent("Post");
  });
});

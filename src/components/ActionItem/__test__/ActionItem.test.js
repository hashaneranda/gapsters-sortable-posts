import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import ActionItem from "../ActionItem";

afterEach(cleanup);

describe("ActionItem Componenet", () => {
  it("should take a snapshot", () => {
    const { asFragment } = render(<ActionItem />);
    expect(asFragment(<ActionItem />)).toMatchSnapshot();
  });

  it("should have a button", () => {
    const { getByTestId } = render(<ActionItem />);
    expect(getByTestId("button")).toHaveTextContent("Time travel");
  });

  it("renders componenet corretly without passing argumenets", () => {
    const { getByTestId } = render(<ActionItem />);
    expect(getByTestId("button")).toHaveTextContent("Time travel");
    expect(getByTestId("title")).toHaveTextContent("");
  });

  it("renders componenet corretly with title argumenet", () => {
    const { getByTestId } = render(<ActionItem title="test title" />);
    expect(getByTestId("button")).toHaveTextContent("Time travel");
    expect(getByTestId("title")).toHaveTextContent("test title");
  });

  it("renders componenet corretly with title argumenet and handleTimeTravel argument", () => {
    const testFunction = () => {
      testVal = true;
    };

    const { getByTestId } = render(
      <ActionItem title="test title" handleTimeTravel={testFunction} />
    );
    expect(getByTestId("button")).toHaveTextContent("Time travel");
    expect(getByTestId("title")).toHaveTextContent("test title");
  });

  it("function call working correctly on button click", () => {
    let testVal = false;

    const testFunction = () => {
      testVal = true;
    };

    const { getByTestId } = render(
      <ActionItem title="test title" handleTimeTravel={testFunction} />
    );

    fireEvent.click(getByTestId("button"));

    expect(getByTestId("button")).toHaveTextContent("Time travel");
    expect(getByTestId("title")).toHaveTextContent("test title");

    expect(testVal).toEqual(true);
  });
});

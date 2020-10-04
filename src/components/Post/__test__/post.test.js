import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

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

  it("should have two buttons", () => {
    const { getByTestId } = render(<Post />);
    expect(getByTestId("button-up")).toBeInTheDocument();
    expect(getByTestId("button-down")).toBeInTheDocument();
  });

  it("renders componenet corretly without passing argumenets", () => {
    const { getByTestId } = render(<Post />);
    expect(getByTestId("button-up")).toBeInTheDocument();
    expect(getByTestId("button-down")).toBeInTheDocument();
    expect(getByTestId("title")).toHaveTextContent("Post");
  });

  it("renders componenet corretly with id argumenet", () => {
    const { getByTestId } = render(<Post id="2" />);
    expect(getByTestId("button-up")).toBeInTheDocument();
    expect(getByTestId("button-down")).toBeInTheDocument();
    expect(getByTestId("title")).toHaveTextContent("Post 2");
  });

  it("renders componenet corretly with id argumenet, buttonUp argument, buttonDown argument", () => {
    const testFunction = () => {
      testVal = true;
    };

    const { getByTestId } = render(
      <Post id="3" buttonUp={testFunction} buttonDown={testFunction} />
    );
    expect(getByTestId("button-up")).toBeInTheDocument();
    expect(getByTestId("button-down")).toBeInTheDocument();
    expect(getByTestId("title")).toHaveTextContent("Post 3");
  });

  it("Both up button and down button function calls working on button click", () => {
    let testValUp = false;
    let testValDown = false;

    const testFunctionUp = () => {
      testValUp = true;
    };

    const testFunctionDown = () => {
      testValDown = true;
    };

    const { getByTestId } = render(
      <Post id="3" buttonUp={testFunctionUp} buttonDown={testFunctionDown} />
    );

    fireEvent.click(getByTestId("button-up"));
    fireEvent.click(getByTestId("button-down"));

    expect(getByTestId("button-up")).toBeInTheDocument();
    expect(getByTestId("button-down")).toBeInTheDocument();
    expect(getByTestId("title")).toHaveTextContent("Post 3");

    expect(testValUp).toEqual(true);
    expect(testValDown).toEqual(true);
  });
});

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

  it("both up button and down button function calls working correctly on button click", () => {
    let testValUp = null;
    let testValDown = null;

    const testFunctionUp = (id) => {
      testValUp = id;
    };

    const testFunctionDown = (id) => {
      testValDown = id;
    };

    const { getByTestId } = render(
      <Post id="3" buttonUp={testFunctionUp} buttonDown={testFunctionDown} />
    );

    expect(getByTestId("button-up")).toBeInTheDocument();
    expect(getByTestId("button-down")).toBeInTheDocument();
    expect(getByTestId("title")).toHaveTextContent("Post 3");

    fireEvent.click(getByTestId("button-up"));
    fireEvent.click(getByTestId("button-down"));

    expect(testValUp).toEqual("3");
    expect(testValDown).toEqual("3");
  });

  it("renders only the down arrow if it's the first post", () => {
    const renderResult = render(<Post id="2" isStart={true} />);

    expect(renderResult.queryByTestId("button-up")).toEqual(null);
    expect(renderResult.getByTestId("button-down")).toBeInTheDocument();
    expect(renderResult.getByTestId("title")).toHaveTextContent("Post 2");
  });

  it("renders only the up arrow if it's the last post", () => {
    const renderResult = render(<Post id="2" isEnd={true} />);

    expect(renderResult.queryByTestId("button-down")).toEqual(null);
    expect(renderResult.getByTestId("button-up")).toBeInTheDocument();
    expect(renderResult.getByTestId("title")).toHaveTextContent("Post 2");
  });
});

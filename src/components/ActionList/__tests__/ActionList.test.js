import React from "react";

import { configureStore } from "@reduxjs/toolkit";

import { Provider } from "react-redux";
import { render, cleanup, fireEvent } from "@testing-library/react";

import { initialState } from "features/posts/postSlice";
import posts from "features/posts/postSlice";
import ActionList from "../ActionList";

const renderWithRedux = (
  component,
  {
    initialState,
    store = configureStore({
      reducer: {
        posts,
      },
      initialState,
    }),
  } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

afterEach(cleanup);

describe("ActionList Componenet", () => {
  it("should take a snapshot", () => {
    const { asFragment } = renderWithRedux(<ActionList />);
    expect(asFragment(<ActionList />)).toMatchSnapshot();
  });

  it("renders componenet corretly without passing argumenets", () => {
    const { getByTestId } = renderWithRedux(<ActionList />);
    expect(getByTestId("title")).toBeInTheDocument();
  });
});

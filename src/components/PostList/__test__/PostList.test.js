import React from "react";

import { configureStore } from "@reduxjs/toolkit";

import { Provider } from "react-redux";
import { render, cleanup, fireEvent } from "@testing-library/react";

import { initialState } from "features/posts/postSlice";
import posts from "features/posts/postSlice";
import PostList from "../PostList";

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

describe("PostList Componenet", () => {
  it("should take a snapshot", () => {
    const { asFragment } = renderWithRedux(<PostList />);
    expect(asFragment(<PostList />)).toMatchSnapshot();
  });

  it("renders componenet corretly without passing argumenets", () => {
    const { getByTestId } = renderWithRedux(<PostList />);
    expect(getByTestId("post-list")).toBeInTheDocument();
  });
});

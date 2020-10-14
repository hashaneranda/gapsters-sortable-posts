import React from "react";

import configureStore from "store/store";

import { Provider } from "react-redux";
import { render, cleanup, fireEvent } from "@testing-library/react";

import { initialState } from "store/reducers/postReducer";
import posts from "store/reducers/postReducer";
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

  it("posts list fetched correctly on component mount", () => {
    const renderResult = renderWithRedux(<PostList />);

    expect(Array.isArray(initialState.postList.data)).toEqual(true);
  });
});

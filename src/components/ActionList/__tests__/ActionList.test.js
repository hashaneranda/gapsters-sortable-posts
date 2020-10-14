import React from "react";

import configureStore from "store/store";

import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";

import { initialState } from "store/reducers/postReducer";
import posts from "store/reducers/postReducer";
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

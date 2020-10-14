import { runSaga } from "redux-saga";
import * as api from "services/posts";

import * as types from "store/ActionTypes";

import { fetchPostList } from "../postSaga";

describe("posts saga", () => {
  it("should call api and dispatch success action on fetchPostList saga", async () => {
    const dummyPostsResponse = {
      status: 200,
      data: [
        {
          key: "1",
          title: "Post 1",
        },
        {
          key: "2",
          title: "Post 2",
        },
        {
          key: "3",
          title: "Post 3",
        },
        {
          key: "4",
          title: "Post 4",
        },
        {
          key: "5",
          title: "Post 5",
        },
      ],
    };
    const fetchPosts = jest
      .spyOn(api, "fetchPosts")
      .mockImplementation(() => Promise.resolve(dummyPostsResponse));

    const dispatched = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchPostList,
      { payload: undefined }
    );

    expect(fetchPosts).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      { type: types.FETCH_POSTS_SUCCESS, response: dummyPostsResponse },
    ]);
    fetchPosts.mockClear();
  });

  it("should call api and dispatch error action on fetchPostList saga", async () => {
    const fetchPosts = jest
      .spyOn(api, "fetchPosts")
      .mockImplementation(() => Promise.reject());

    const dispatched = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchPostList,
      { payload: undefined }
    );

    expect(fetchPosts).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      { type: types.FETCH_POSTS_ERROR, response: null },
    ]);
    fetchPosts.mockClear();
  });
});

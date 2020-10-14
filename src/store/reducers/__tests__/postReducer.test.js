import reducer from "../postReducer";
import * as types from "store/ActionTypes";

describe("post reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      postList: {
        loading: false,
        data: [],
        error: null,
        timeTraveling: false,
      },
      actionStack: [],
    });
  });

  it("should handle MOVE_UP_POST", () => {
    const posts = [
      {
        key: "1",
        title: "Post 1",
      },
      {
        key: "2",
        title: "Post 2",
      },
    ];
    const mockPosts = [
      {
        key: "2",
        title: "Post 2",
      },
      {
        key: "1",
        title: "Post 1",
      },
    ];

    expect(
      reducer(undefined, {
        type: types.MOVE_UP_POST,
        response: posts,
      })
    ).toEqual({
      postList: {
        data: posts,
        error: null,
        loading: false,
        timeTraveling: false,
      },
      actionStack: [],
    });

    expect(
      reducer(
        {
          postList: {
            loading: false,
            data: mockPosts,
            error: null,
            timeTraveling: false,
          },
          actionStack: [],
        },
        {
          type: types.MOVE_DOWN_POST,
          response: posts,
        }
      )
    ).toEqual({
      postList: {
        loading: false,
        data: posts,
        error: null,
        timeTraveling: false,
      },
      actionStack: [],
    });
  });

  it("should handle MOVE_DOWN_POST", () => {
    const posts = [
      {
        key: "1",
        title: "Post 1",
      },
      {
        key: "2",
        title: "Post 2",
      },
    ];

    const mockPosts = [
      {
        key: "2",
        title: "Post 2",
      },
      {
        key: "1",
        title: "Post 1",
      },
    ];

    expect(
      reducer(undefined, {
        type: types.MOVE_DOWN_POST,
        response: posts,
      })
    ).toEqual({
      postList: {
        data: posts,
        error: null,
        loading: false,
        timeTraveling: false,
      },
      actionStack: [],
    });

    expect(
      reducer(
        {
          postList: {
            loading: false,
            data: mockPosts,
            error: null,
            timeTraveling: false,
          },
          actionStack: [],
        },
        {
          type: types.MOVE_DOWN_POST,
          response: posts,
        }
      )
    ).toEqual({
      postList: {
        loading: false,
        data: posts,
        error: null,
        timeTraveling: false,
      },
      actionStack: [],
    });
  });

  it("should handle ADD_TO_ACTION_STACK", () => {
    const posts = [
      {
        key: "1",
        title: "Post 1",
      },
      {
        key: "2",
        title: "Post 2",
      },
    ];
    const action = {
      action: "Moved post 1 from index 0 to index 1",
      order: posts,
    };

    expect(
      reducer(undefined, {
        type: types.ADD_TO_ACTION_STACK,
        response: action,
      })
    ).toEqual({
      postList: {
        data: [],
        error: null,
        loading: false,
        timeTraveling: false,
      },
      actionStack: [action],
    });

    expect(
      reducer(
        {
          postList: {
            loading: false,
            data: [],
            error: null,
            timeTraveling: false,
          },
          actionStack: [action],
        },
        {
          type: types.ADD_TO_ACTION_STACK,
          response: action,
        }
      )
    ).toEqual({
      postList: {
        loading: false,
        data: [],
        error: null,
        timeTraveling: false,
      },
      actionStack: [action, action],
    });
  });

  it("should handle SET_TIME_TRAVELING", () => {
    expect(
      reducer(undefined, {
        type: types.SET_TIME_TRAVELING,
        response: true,
      })
    ).toEqual({
      postList: {
        data: [],
        error: null,
        loading: false,
        timeTraveling: true,
      },
      actionStack: [],
    });

    expect(
      reducer(
        {
          postList: {
            loading: false,
            data: [],
            error: null,
            timeTraveling: false,
          },
          actionStack: [],
        },
        {
          type: types.SET_TIME_TRAVELING,
          response: true,
        }
      )
    ).toEqual({
      postList: {
        loading: false,
        data: [],
        error: null,
        timeTraveling: true,
      },
      actionStack: [],
    });
  });

  it("should handle TIME_TRAVEL_TO_ACTION", () => {
    const posts = [
      {
        key: "1",
        title: "Post 1",
      },
      {
        key: "2",
        title: "Post 2",
      },
    ];

    const mockPosts = [
      {
        key: "2",
        title: "Post 2",
      },
      {
        key: "1",
        title: "Post 1",
      },
    ];

    const action = {
      action: "Moved post 1 from index 0 to index 1",
      order: posts,
    };

    const actionStack = [action, action];

    expect(
      reducer(undefined, {
        type: types.TIME_TRAVEL_TO_ACTION,
        response: { actionStack, postOrder: posts },
      })
    ).toEqual({
      postList: {
        data: posts,
        error: null,
        loading: false,
        timeTraveling: false,
      },
      actionStack: actionStack,
    });

    expect(
      reducer(
        {
          postList: {
            loading: false,
            data: mockPosts,
            error: null,
            timeTraveling: false,
          },
          actionStack: [action],
        },
        {
          type: types.TIME_TRAVEL_TO_ACTION,
          response: { actionStack, postOrder: posts },
        }
      )
    ).toEqual({
      postList: {
        loading: false,
        data: posts,
        error: null,
        timeTraveling: false,
      },
      actionStack: actionStack,
    });
  });
});

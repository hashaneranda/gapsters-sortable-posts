import * as types from "store/ActionTypes";

//initail state of post reducer
export const initialState = {
  postList: {
    loading: false,
    data: [],
    error: null,
    timeTraveling: false,
  },
  actionStack: [],
};

export default function (state = initialState, action) {
  let response = action.response;

  switch (action.type) {
    case types.FETCH_POSTS:
      return {
        ...state,
        postList: { ...state.postList, loading: true },
      };
    case types.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        postList: {
          ...state.postList,
          loading: false,
          data: response.data ? response.data.slice(0, 5) : response.data,
          error: null,
        },
      };
    case types.FETCH_POSTS_ERROR:
      return {
        ...state,
        postList: {
          ...state.postList,
          loading: false,
          data: null,
          error: response
            ? response.data
              ? response.data.message
              : response.data
            : null,
        },
      };
    case types.MOVE_UP_POST:
      return {
        ...state,
        postList: {
          ...state.postList,
          loading: false,
          data: response,
          error: null,
        },
      };
    case types.MOVE_DOWN_POST:
      return {
        ...state,
        postList: {
          ...state.postList,
          loading: false,
          data: response,
          error: null,
        },
      };
    case types.ADD_TO_ACTION_STACK:
      return {
        ...state,
        actionStack: [...state.actionStack, response],
      };
    case types.SET_TIME_TRAVELING:
      return {
        ...state,
        postList: {
          ...state.postList,
          timeTraveling: true,
        },
      };
    case types.TIME_TRAVEL_TO_ACTION:
      return {
        ...state,
        actionStack: response.actionStack,
        postList: {
          ...state.postList,
          data: response.postOrder,
          timeTraveling: false,
        },
      };
    default:
      return state;
  }
}

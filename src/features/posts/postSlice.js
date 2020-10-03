import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  postList: {
    loading: false,
    data: [],
    error: null,
  },
  actionStack: [],
};

const createdSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPost(state, { payload }) {
      return {
        ...state,
        postList: { ...state.postList, loading: true },
      };
    },
    fetchPostSuccess(state, { response }) {
      return {
        ...state,
        postList: {
          ...state.postList,
          loading: false,
          data: response.data ? response.data.slice(0, 5) : response.data,
          error: null,
        },
      };
    },
    fetchPostError(state, { response }) {
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
    },
    moveUpPost(state, { payload }) {
      return {
        ...state,
        postList: {
          ...state.postList,
          loading: false,

          data: payload,
          error: null,
        },
      };
    },
    moveDownPost(state, { payload }) {
      return {
        ...state,
        postList: {
          ...state.postList,
          loading: false,
          data: payload,
          error: null,
        },
      };
    },
    addToActionStack(state, { payload }) {
      return {
        ...state,
        actionStack: [...state.actionStack, payload],
      };
    },
    timeTravelToAction(state, { payload }) {
      return {
        ...state,
        actionStack: payload.actionStack,
        postList: {
          ...state.postList,
          data: payload.postOrder,
        },
      };
    },
  },
});

const { actions, reducer } = createdSlice;

export const {
  fetchPost,
  fetchPostSuccess,
  fetchPostError,
  moveUpPost,
  moveDownPost,
  addToActionStack,
  timeTravelToAction,
} = actions;

export default reducer;

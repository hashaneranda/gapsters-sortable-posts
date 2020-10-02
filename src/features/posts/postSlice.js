import { createSlice } from "@reduxjs/toolkit";

/**
 * Swap the elements in an array at indexes x and y.
 *
 * @param (a) The array.
 * @param (x) The index of the first element to swap.
 * @param (y) The index of the second element to swap.
 * @return {Array} The input array with the elements swapped.
 */
const swapArrayElements = (a, x, y) => {
  console.log("initial array --", a, x);
  if (a.length === 1) return a;
  a.splice(y, 1, a.splice(x, 1, a[y])[0]);

  console.log("new array --", a);
  return a;
};

export const initialState = {
  postList: {
    loading: false,
    data: null,
    error: null,
  },
  sortArray: [],
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
  },
});

const { actions, reducer } = createdSlice;

export const {
  fetchPost,
  fetchPostSuccess,
  fetchPostError,
  moveUpPost,
  moveDownPost,
} = actions;

export default reducer;

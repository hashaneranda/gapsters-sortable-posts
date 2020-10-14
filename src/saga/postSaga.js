import { put, call } from "redux-saga/effects";

//services
import * as service from "services/posts";

//redux actions
import * as types from "store/ActionTypes";

export function* fetchPostList({ payload }) {
  let response = null;

  try {
    response = yield call(service.fetchPosts, payload);

    if (response && response.status === 200) {
      yield put({
        type: types.FETCH_POSTS_SUCCESS,
        response,
      });
    } else {
      yield put({ type: types.FETCH_POSTS_ERROR, response });
    }
  } catch (err) {
    yield put({ type: types.FETCH_POSTS_ERROR, response });
  }
}

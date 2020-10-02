import { put, call } from "redux-saga/effects";

//services
import * as service from "services/posts";

//actions
import * as actions from "./postSlice";

export function* fetchPostList({ payload }) {
  let response = null;

  try {
    response = yield call(service.fetchPosts, payload);

    if (response && response.status === 200) {
      yield put({
        type: actions.fetchPostSuccess.type,
        response,
      });
    } else {
      yield put({ type: actions.fetchPostError.type, response });
    }
  } catch (err) {
    yield put({ type: actions.fetchPostError.type, response });
  }
}

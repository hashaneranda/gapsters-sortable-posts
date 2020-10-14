import { takeLatest, takeEvery } from "redux-saga/effects";

//action types
import * as types from "store/ActionTypes";

//saga
import * as postSaga from "./postSaga";

export default function* watchers() {
  //payment
  yield takeLatest(types.FETCH_POSTS, postSaga.fetchPostList);
}

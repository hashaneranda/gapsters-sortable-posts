import { takeLatest, takeEvery } from "redux-saga/effects";

//actions
import * as postSlice from "features/posts/postSlice";

//saga
import * as postSaga from "features/posts/postSaga";

export default function* watchers() {
  //payment
  yield takeLatest(postSlice.fetchPost.type, postSaga.fetchPostList);
}

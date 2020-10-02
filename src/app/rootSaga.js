import { fork } from "redux-saga/effects";

//watchers
import postWatchers from "features/posts/postWatchers";

export default function* startforman() {
  yield fork(postWatchers);
}

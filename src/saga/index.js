import { fork } from "redux-saga/effects";

//watchers
import watchers from "./watchers";

export default function* startforman() {
  yield fork(watchers);
}

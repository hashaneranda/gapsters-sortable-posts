import * as actions from "../postAction";
import * as types from "store/ActionTypes";

describe("post actions", () => {
  it("should create an action to fecth posts", () => {
    const expectedAction = {
      type: types.FETCH_POSTS,
      payload: undefined,
    };
    expect(actions.fetchPost()).toEqual(expectedAction);
  });

  it("should create an action to move up posts", () => {
    const payload = [
      {
        key: "1",
        title: "Post 1",
      },
      {
        key: "2",
        title: "Post 2",
      },
    ];

    const expectedAction = {
      type: types.MOVE_UP_POST,
      response: payload,
    };
    expect(actions.moveUpPost(payload)).toEqual(expectedAction);
  });

  it("should create an action to move down posts", () => {
    const payload = [
      {
        key: "1",
        title: "Post 1",
      },
      {
        key: "2",
        title: "Post 2",
      },
    ];

    const expectedAction = {
      type: types.MOVE_DOWN_POST,
      response: payload,
    };
    expect(actions.moveDownPost(payload)).toEqual(expectedAction);
  });

  it("should create an action to set time traveling", () => {
    const expectedAction = {
      type: types.SET_TIME_TRAVELING,
      response: undefined,
    };
    expect(actions.setTimeTraveling()).toEqual(expectedAction);
  });

  it("should create an action to time traveling action", () => {
    const expectedAction = {
      type: types.TIME_TRAVEL_TO_ACTION,
      response: undefined,
    };
    expect(actions.timeTravelToAction()).toEqual(expectedAction);
  });
});

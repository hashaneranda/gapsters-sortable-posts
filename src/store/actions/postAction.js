import * as types from "store/ActionTypes";

export const fetchPost = (payload) => {
  return {
    type: types.FETCH_POSTS,
    payload,
  };
};

export const moveUpPost = (response) => {
  return {
    type: types.MOVE_UP_POST,
    response,
  };
};

export const moveDownPost = (response) => {
  return {
    type: types.MOVE_DOWN_POST,
    response,
  };
};

export const addToActionStack = (response) => {
  return {
    type: types.ADD_TO_ACTION_STACK,
    response,
  };
};

export const setTimeTraveling = (response) => {
  return {
    type: types.SET_TIME_TRAVELING,
    response,
  };
};

export const timeTravelToAction = (response) => {
  return {
    type: types.TIME_TRAVEL_TO_ACTION,
    response,
  };
};

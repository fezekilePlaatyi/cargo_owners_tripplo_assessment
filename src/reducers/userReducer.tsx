import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOG_LOGOUT,
} from "../constants/userConstants";
import { UserState, Action } from "../types";

export const userLoginReducer = (
  state: UserState = { userInfo: {} as any },
  action: Action
) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };

    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case USER_LOG_LOGOUT:
      return {};

    default:
      return state;
  }
};

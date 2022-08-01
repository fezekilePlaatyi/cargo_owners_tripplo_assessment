import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOG_LOGOUT,
  USER_LOGIN_REQUEST,
} from "../constants/userConstants";
import UserService from "../services/user.service";

export const login =
  (email: string, password: string): any =>
  async (dispatch: any): Promise<void> => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });

      const userData = await UserService.login(email, password);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: userData,
      });
    } catch (error: any) {
      if (error.statusCode === 400) {
        dispatch({
          type: USER_LOGIN_FAIL,
          payload: error.response,
        });
      } else {
        dispatch({
          type: USER_LOGIN_FAIL,
          payload: "Unexpected error occured.",
        });
      }
    }
  };

export const logout =
  (): any =>
  async (dispatch: any): Promise<void> => {
    await UserService.logout();
    dispatch({
      type: USER_LOG_LOGOUT,
    });
  };

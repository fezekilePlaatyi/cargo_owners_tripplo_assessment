import axios from "axios";
import { UserInfo } from "../types";
const config = require("../config.json");
const AUTH_API_URL = config.AUTH_API_URL;

const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      AUTH_API_URL,
      {
        username: email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseData = response.data.response;

    const userData: UserInfo = {
      auth_time: responseData.auth_time,
      email: responseData.email,
      exp: responseData.exp,
      token: {
        accessToken: responseData.token.accessToken,
        idToken: responseData.token.idToken,
        refreshToken: responseData.token.refreshToken,
      },
      uid: responseData.uid,
    };

    localStorage.setItem("userInfo", JSON.stringify(userData));
    return userData;
  } catch (err: any) {
    return Promise.reject(err.response.data);
  }
};

const logout = async () => {
  //DO some backend stuff that is call logout service
  localStorage.removeItem("userInfo");
  return null;
};

export default {
  login,
  logout,
};

import axios from "axios";
import authHeader from "./auth-headers";
const config = require("../config.json");
const SECURED_API_URL = config.SECURED_API_URL;

const getAllTrasportRouteRates = () => {
  try {
    return axios.get(SECURED_API_URL + "/get-transporters-rates", {
      headers: authHeader(),
    });
  } catch (err: any) {
    return Promise.reject(err.response.data);
  }
};

const saveTransportRouteRate = (
  email: string,
  origin: string,
  destination: string,
  transportRate: Number
) => {
  try {
    const payload = { email, origin, destination, transportRate };
    return axios.post(SECURED_API_URL + "/post-transporters-rates", payload, {
      headers: authHeader(),
    });
  } catch (err: any) {
    return Promise.reject(err.response.data);
  }
};

export default {
  getAllTrasportRouteRates,
  saveTransportRouteRate,
};

import {
  SAVE_TRANSPORT_ROUTE_RATE,
  SAVE_TRANSPORT_ROUTE_RATE_REQUEST,
  SAVE_TRANSPORT_ROUTE_RATE_FAIL,
  SAVE_ALL_TRANSPORT_ROUTE_RATES,
} from "../constants/transportRouteConstants";
import { TransportRouteRate } from "../types";
import TransportRouteRateService from "../services/transport.rates";
import moment from "moment";

export const saveTransportRouteRate =
  (
    driverEmail: string,
    origin: string,
    destination: string,
    routeRate: Number
  ): any =>
  async (dispatch: any): Promise<void> => {
    try {
      dispatch({
        type: SAVE_TRANSPORT_ROUTE_RATE_REQUEST,
      });

      const response = await TransportRouteRateService.saveTransportRouteRate(
        driverEmail,
        origin,
        destination,
        routeRate
      );

      const transportRouteInfo: TransportRouteRate = {
        driverEmail,
        origin,
        destination,
        routeRate,
        dateCreated: moment(new Date().toISOString()).format("DD-MMMM-YYYY"),
      };

      dispatch({
        type: SAVE_TRANSPORT_ROUTE_RATE,
        payload: transportRouteInfo,
      });
    } catch (error: any) {
      if (error.statusCode === 400) {
        dispatch({
          type: SAVE_TRANSPORT_ROUTE_RATE_FAIL,
          payload: error.response,
        });
      } else {
        dispatch({
          type: SAVE_TRANSPORT_ROUTE_RATE_FAIL,
          payload: "Unexpected error occured.",
        });
      }
    }
  };

export const storeAllTransportRouteRates =
  (transportRouteRates: [TransportRouteRate]): any =>
  async (dispatch: any): Promise<void> => {
    try {
      dispatch({
        type: SAVE_ALL_TRANSPORT_ROUTE_RATES,
        payload: transportRouteRates,
      });
    } catch (error: any) {
      if (error.statusCode === 400) {
        dispatch({
          type: SAVE_TRANSPORT_ROUTE_RATE_FAIL,
          payload: error.response,
        });
      } else {
        dispatch({
          type: SAVE_TRANSPORT_ROUTE_RATE_FAIL,
          payload: "Unexpected error occured.",
        });
      }
    }
  };

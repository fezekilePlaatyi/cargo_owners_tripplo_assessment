import { TransportRouteRatesState, Action } from "../types";
import {
  SAVE_TRANSPORT_ROUTE_RATE,
  SAVE_TRANSPORT_ROUTE_RATE_REQUEST,
  SAVE_TRANSPORT_ROUTE_RATE_FAIL,
  SAVE_ALL_TRANSPORT_ROUTE_RATES,
  LOADING_ALL_TRANSPORT_ROUTE_RATES,
} from "../constants/transportRouteConstants";

export const transportRouteReducer = (
  state: TransportRouteRatesState = { routesRates: {} as any },
  action: Action
) => {
  switch (action.type) {
    case LOADING_ALL_TRANSPORT_ROUTE_RATES:
      return { initialLoading: true };

    case SAVE_ALL_TRANSPORT_ROUTE_RATES:
      return { initialLoading: false, routesRates: action.payload };

    case SAVE_TRANSPORT_ROUTE_RATE_REQUEST:
      return { ...state, loading: true };

    case SAVE_TRANSPORT_ROUTE_RATE:
      const stateCopy = { ...state };
      var tempState = JSON.parse(JSON.stringify(stateCopy));

      tempState.routesRates = tempState.routesRates
        ? tempState.routesRates.concat([action.payload])
        : [action.payload];

      tempState.loading = false;

      return tempState;

    case SAVE_TRANSPORT_ROUTE_RATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

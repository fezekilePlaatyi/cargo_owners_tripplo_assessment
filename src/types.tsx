export interface Action {
  type: string;
  payload?: string;
}

export interface TransportRouteRateAction {
  type: string;
  payload: TransportRouteRate;
}

export interface UserState {
  loading?: boolean;
  error?: string;
  userInfo: UserInfo;
}

export type UserInfo = {
  auth_time: Number;
  email: string;
  exp: Number;
  token: {
    accessToken: string;
    idToken: string;
    refreshToken: string;
  };
  uid: Number;
};

export interface TransportRouteRatesState {
  initialLoading?: boolean;
  loading?: boolean;
  error?: string;
  routesRates: [TransportRouteRate];
}
export interface TransportRouteRate {
  driverEmail: string;
  origin: string;
  destination: string;
  routeRate: Number;
  dateCreated: string;
}

export type CognitoLoginError = {
  statusCode: Number;
  response: string;
};

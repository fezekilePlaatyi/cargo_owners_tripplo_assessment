import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { userLoginReducer } from "./reducers/userReducer";
import { transportRouteReducer } from "./reducers/transportRouteReducer";

const reducers = combineReducers({
  userLogin: userLoginReducer,
  transportRouteRates: transportRouteReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo")!)
  : undefined;

const transportRouteRatesFromStorage = localStorage.getItem(
  "transportRouteRatesInfo"
)
  ? JSON.parse(localStorage.getItem("transportRouteRatesInfo")!)
  : undefined;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  transportRouteRates: { routesRates: transportRouteRatesFromStorage },
} as {};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

export type RootState = ReturnType<typeof store.getState>;

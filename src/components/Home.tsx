import useAsyncEffect from "use-async-effect";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { storeAllTransportRouteRates } from "../actions/transportRouteAction";
import TransportService from "../services/transport.rates";
import { RootState } from "../store";
import { TransportRouteRatesState } from "../types";
import { LOADING_ALL_TRANSPORT_ROUTE_RATES } from "../constants/transportRouteConstants";
import Navigation from "../common/Navigation";
import Tab from "./Tab";
import Footer from "../common/Footer";
import ModalForm from "./ModalWithForm";

const Home = () => {
  const dispatch = useDispatch();
  const transportRouteRates = useSelector<RootState, TransportRouteRatesState>(
    (state: RootState) => state.transportRouteRates
  );
  const { initialLoading } = transportRouteRates;

  useAsyncEffect(async () => {
    try {
      dispatch({
        type: LOADING_ALL_TRANSPORT_ROUTE_RATES,
      });
      const response = await TransportService.getAllTrasportRouteRates();
      const transportRouteRatesData = response.data.map(
        (transportRouteRate: any) => {
          return {
            driverEmail: transportRouteRate.EmailForTransportDriver.S,
            origin: transportRouteRate.Origin.S,
            destination: transportRouteRate.Destination.S,
            routeRate: transportRouteRate.TransportRate.N,
            dateCreated: moment(transportRouteRate.DateCreated.S).format(
              "DD-MMMM-YYYY"
            ),
          };
        }
      );
      dispatch(storeAllTransportRouteRates(transportRouteRatesData));
    } catch (e) {}
  }, []);

  return (
    <>
      <div id="home_page">
        <Navigation />
        <div className="content">
          {initialLoading ? (
            <p className="loader">Loading, please wait...</p>
          ) : (
            <Tab />
          )}
        </div>
        <ModalForm />
        <Footer />
      </div>
    </>
  );
};

export default Home;

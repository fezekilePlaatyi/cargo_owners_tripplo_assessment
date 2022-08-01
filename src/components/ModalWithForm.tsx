import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAsyncEffect from "use-async-effect";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { logout } from "../actions/userAction";
import {
  saveTransportRouteRate,
  storeAllTransportRouteRates,
} from "../actions/transportRouteAction";
import TransportService from "../services/transport.rates";
import { RootState } from "../store";
import { UserState, TransportRouteRatesState } from "../types";
import { LOADING_ALL_TRANSPORT_ROUTE_RATES } from "../constants/transportRouteConstants";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ModalForm() {
  const [open, setOpen] = useState(false);
  const [driverEmail, setDriverEmail] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [routeRate, setRouteRate] = useState("");
  const dispatch = useDispatch();

  const transportRouteRates = useSelector<RootState, TransportRouteRatesState>(
    (state: RootState) => state.transportRouteRates
  );
  const { routesRates, loading } = transportRouteRates;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();

    dispatch(
      saveTransportRouteRate(
        driverEmail.trim(),
        origin.trim(),
        destination.trim(),
        parseFloat(routeRate.trim())
      )
    );

    handleClose();
  };

  return (
    <div>
      <Button
        className="top-right"
        variant="outlined"
        onClick={handleClickOpen}
      >
        New Rate
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Add New Transport Route Rate</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {loading ? "Please wait while proccessing your request..." : ""}
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            onChange={(e) => setDriverEmail(e.target.value)}
            type="email"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Route Origin..."
            onChange={(e) => setOrigin(e.target.value)}
            type="text"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Route Destination..."
            onChange={(e) => setDestination(e.target.value)}
            type="text"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter transport route rate..."
            onChange={(e) => setRouteRate(e.target.value)}
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submitHandler}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

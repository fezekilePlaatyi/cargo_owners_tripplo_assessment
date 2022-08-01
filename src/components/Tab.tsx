import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { TransportRouteRatesState } from "../types";
import { getAverages } from "../helpers/index";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import TransportRouteRatesTable from "./tabs/transportRouteRatesTable";
import TransportAverageRatesTable from "./tabs/transportAverageRatesTable";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("transport-rates");
  const transportRouteRates = useSelector<RootState, TransportRouteRatesState>(
    (state: RootState) => state.transportRouteRates
  );
  const { routesRates } = transportRouteRates;

  const [rows, setRows] = useState<any>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    if (activeTab === "transport-rates") {
      const myTablRows =
        routesRates && routesRates.length
          ? routesRates.map((route: any) => {
              return {
                email: route.driverEmail,
                origin:
                  route.origin.charAt(0).toUpperCase() + route.origin.slice(1),
                destination:
                  route.destination.charAt(0).toUpperCase() +
                  route.destination.slice(1),
                transportRate: route.routeRate,
                dateCreated: route.dateCreated,
              };
            })
          : [];

      setRows(myTablRows);
    } else {
      const myTablRows = getAverages(rows);
      setRows(myTablRows);
    }
  }, [activeTab, routesRates]);

  return (
    <>
      <div className="page-header">
        <button
          type="button"
          className={activeTab === "transport-rates" ? "active-btn" : ""}
          onClick={() => setActiveTab("transport-rates")}
        >
          Transport Rates
        </button>
        <button
          type="button"
          className={activeTab === "average-rates" ? "active-btn" : ""}
          onClick={() => setActiveTab("average-rates")}
        >
          Average Rates
        </button>
      </div>
      <TableContainer component={Paper}>
        {activeTab === "transport-rates" ? (
          <TransportRouteRatesTable
            rows={rows}
            page={page}
            rowsPerPage={rowsPerPage}
          />
        ) : (
          <TransportAverageRatesTable
            rows={rows}
            page={page}
            rowsPerPage={rowsPerPage}
          />
        )}
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
};

export default Tab;

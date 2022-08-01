import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const TransportRouteRatesTable = ({
  rows,
  page,
  rowsPerPage,
}: {
  rows: any;
  page: any;
  rowsPerPage: any;
}) => {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="Transport Rates">
      <TableHead>
        <TableRow>
          <TableCell>Driver Email</TableCell>
          <TableCell align="right">Origin</TableCell>
          <TableCell align="right">Destination</TableCell>
          <TableCell align="right">Transport Rate</TableCell>
          <TableCell align="right">Date Created</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row: any) => (
            <TableRow
              key={row.email}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell align="right">{row.origin}</TableCell>
              <TableCell align="right">{row.destination}</TableCell>
              <TableCell align="right">R {row.transportRate}</TableCell>
              <TableCell align="right">{row.dateCreated}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default TransportRouteRatesTable;

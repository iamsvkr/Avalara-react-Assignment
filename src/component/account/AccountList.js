import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  Container,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@material-ui/core";
import Popup from "../common/Popup";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 450,
  },
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function AccountList({ accountList }) {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h3" component="h2" gutterBottom></Typography>
      <TableContainer component={Paper} className={classes.paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Account</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>PAN</TableCell>
              <TableCell>GST No.</TableCell>
              <TableCell>Bank details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accountList.map(({ name, address, PAN, GSTNumber }, index) => (
              <TableRow key={`${name}-${GSTNumber}`}>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {address}
                </TableCell>
                <TableCell component="th" scope="row">
                  {PAN}
                </TableCell>
                <TableCell component="th" scope="row">
                  {GSTNumber}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Popup data={accountList[index]} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

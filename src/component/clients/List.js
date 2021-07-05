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

export default function List({ clientList }) {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h3" component="h2" gutterBottom></Typography>
      <TableContainer component={Paper} className={classes.paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Client name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>GST No.</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientList.map(({ name, address, GSTNumber }) => (
              <TableRow key={`${name}-${GSTNumber}`}>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {address}
                </TableCell>
                <TableCell component="th" scope="row">
                  {GSTNumber}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

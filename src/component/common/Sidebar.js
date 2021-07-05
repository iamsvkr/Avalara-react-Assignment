import React from "react";
import { Grid, makeStyles, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
const sideBarConfig = [
  {
    linkName: `Clients`,
    path: "/invoicer/clients",
  },
  {
    linkName: `Accounts`,
    path: "/invoicer/accounts",
  },
  {
    linkName: `Transactions`,
    path: "/invoicer/transactions",
  },
];

const useStyles = makeStyles({
  link: {
    textDecoration: "underline",
    color: "blue",
  },
});

export default function Sidebar() {
  const classes = useStyles;
  return (
    <Grid item md={2}>
      <Box borderRight={1}>
        <Box p={2}>
          <Typography variant="h4" component="h4" gutterBottom>
            Invoicer
          </Typography>
        </Box>
        {sideBarConfig.map(({ linkName, path }) => (
          <Box p={2} key={linkName}>
            <Link to={path} className={classes.link}>
              {linkName}
            </Link>
          </Box>
        ))}
      </Box>
    </Grid>
  );
}

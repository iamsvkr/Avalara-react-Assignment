import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Routes from "./Routes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Routes />
        </Grid>
      </div>
    </div>
  );
}

export default App;

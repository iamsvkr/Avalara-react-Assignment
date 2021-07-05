import React, { useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  TextareaAutosize,
  FormControlLabel,
  Checkbox,
  Grid,
  makeStyles,
  Container,
  Box,
  Typography,
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { setLocalForageData } from "../../helpers/localForage";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
  },
  errorMsg: {
    color: "red",
  },
}));

export default function AddClient({ updateClients }) {
  const classes = useStyles();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleUserSubmit = async (data) => {
    try {
      updateClients(data);
      setLocalForageData("client", data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box pt={2}>
        <Typography variant="h4" component="h4" gutterBottom>
          Manage Clients
        </Typography>
      </Box>
      <div className={classes.paper}>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(handleUserSubmit)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="Client Name"
                    autoComplete="name"
                    {...field}
                  />
                )}
                defaultValue=""
              />
              {errors?.name?.type === "required" && (
                <p className={classes.errorMsg}>Name is required</p>
              )}
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="address"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextareaAutosize
                    variant="outlined"
                    id="address"
                    rowsMin={3}
                    placeholder="Client Address"
                    autoComplete="address"
                    {...field}
                  />
                )}
                defaultValue=""
              />
              {errors?.address?.type === "required" && (
                <p className={classes.errorMsg}>Address is required</p>
              )}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                value="end"
                control={
                  <Checkbox
                    color="primary"
                    checked={checked}
                    onChange={handleChange}
                  />
                }
                label="GST Applicable"
                labelPlacement="end"
              />
            </Grid>
            {checked && (
              <Grid item xs={12}>
                <Controller
                  name="GSTNumber"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="GSTNumber"
                      label="GST Number"
                      autoComplete="GSTNumber"
                      {...field}
                    />
                  )}
                  defaultValue=""
                />
              </Grid>
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>
        </form>
      </div>
    </Container>
  );
}

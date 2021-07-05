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

export default function AddAccount({ updateAccounts }) {
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
      updateAccounts(data);
      setLocalForageData("account", data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box pt={2}>
        <Typography variant="h4" component="h4" gutterBottom>
          Manage Accounts
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
                    label="Account Name"
                    autoComplete="name"
                    {...field}
                  />
                )}
                defaultValue=""
              />
              {errors?.name?.type === "required" && (
                <p className={classes.errorMsg}>Account name is required</p>
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
                    placeholder="Account Address"
                    autoComplete="address"
                    {...field}
                  />
                )}
                defaultValue=""
              />
              {errors?.address?.type === "required" && (
                <p className={classes.errorMsg}>address is required</p>
              )}
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="PAN"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="PAN"
                    label="PAN"
                    {...field}
                  />
                )}
                defaultValue=""
              />
              {errors?.PAN?.type === "required" && (
                <p className={classes.errorMsg}>PAN is required</p>
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
                label="GST Registered"
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
            <Grid item xs={12}>
              <Controller
                name="accountNumber"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="accountNumber"
                    label="accountNumber"
                    {...field}
                  />
                )}
                defaultValue=""
              />
              {errors?.accountNumber?.type === "required" && (
                <p className={classes.errorMsg}>accountNumber is required</p>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="bankName"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="bankName"
                    label="bankName"
                    {...field}
                  />
                )}
                defaultValue=""
              />
              {errors?.bankName?.type === "required" && (
                <p className={classes.errorMsg}>bankName is required</p>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="bankBranch"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="bankBranch"
                    label="bankBranch"
                    {...field}
                  />
                )}
                defaultValue=""
              />
              {errors?.bankBranch?.type === "required" && (
                <p className={classes.errorMsg}>bankBranch is required</p>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="IFSC"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="IFSC"
                    label="IFSC code"
                    {...field}
                  />
                )}
                defaultValue=""
              />
              {errors?.IFSC?.type === "required" && (
                <p className={classes.errorMsg}>IFSC code is required</p>
              )}
            </Grid>
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

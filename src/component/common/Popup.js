import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  Backdrop,
  Divider,
  Fade,
  Typography,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Popup({ data }) {
  const { name, accountNumber, bankName, bankBranch, IFSC } = data;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        View
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Bank details - {name}</h2>
            <Divider />
            <Box p={1}>
              <Typography
                variant="h5"
                component="h5"
              >{`AccountNumber: ${accountNumber}`}</Typography>
            </Box>
            <Box p={1}>
              <Typography
                variant="h5"
                component="h5"
              >{`Bank Name: ${bankName}`}</Typography>
            </Box>
            <Box p={1}>
              <Typography
                variant="h5"
                component="h5"
              >{`Branch: ${bankBranch}`}</Typography>
            </Box>
            <Box p={1}>
              <Typography
                variant="h5"
                component="h5"
              >{`IFSC: ${IFSC}`}</Typography>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

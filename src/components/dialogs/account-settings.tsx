import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Avatar,
  Typography,
} from '@material-ui/core';

import AccountIcon from '@material-ui/icons/AccountCircle';
import CloseIcon from '@material-ui/icons/Close';

const AccountSettings = () => {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen} aria-label="user account">
        <AccountIcon style={{ color: 'white' }} />
      </IconButton>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
};

function SimpleDialog(props: SimpleDialogProps) {
  const classes = useStyles();
  const { onClose, open } = props;

  function handleClose() {
    onClose();
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="form-dialog-title">
        <div
          style={{
            display: 'inline-block',
          }}
        >
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '5rem',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Avatar>YN</Avatar>
          <Typography
            variant="h5"
            style={{ fontWeight: 'bold' }}
            className={classes.dialogTitle}
          >
            Your Name
          </Typography>
        </div>
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          Group notes together by defining custom folders!
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    nested: {
      paddingLeft: theme.spacing(4),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
    },
    dialogTitle: {
      marginBlockStart: 0,
      marginBlockEnd: 0,
    },
  });
});

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

export default AccountSettings;

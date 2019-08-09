import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";

import CreateFolderIcon from "@material-ui/icons/CreateNewFolderOutlined";
import CloseIcon from "@material-ui/icons/Close";

const createValueSetter = (setValue: Function) => (event: any) => setValue(event.target.value);
const CreateNewFolder = (props: any) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = (folderName: string) => {
    if(folderName){
      props.onCreate(folderName)
    }
    setOpen(false);
  };

  return (
    <div>
      <ListItem
        button
        onClick={handleClickOpen}
        className={classes.nested}
        color="secondary"
      >
        <ListItemIcon>
          <CreateFolderIcon />
        </ListItemIcon>
        <ListItemText primary="Create New Folder" />
      </ListItem>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
};

function SimpleDialog(props: any) {
  const [folderName, setFolderName] = React.useState('');

  const classes = useStyles();
  const { onClose, open } = props;


  function handleClose() {
    onClose(folderName);
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="form-dialog-title">
        <h3 className={classes.dialogTitle}>Create new folder</h3>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          Group notes together by defining custom folders!
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Folder Name"
          fullWidth
          onChange={createValueSetter(setFolderName)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose} color="secondary">
          Add folder
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    nested: {
      paddingLeft: theme.spacing(4)
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1)
    },
    dialogTitle: {
      marginBlockStart: 0,
      marginBlockEnd: 0
    }
  });
});

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

export default CreateNewFolder;

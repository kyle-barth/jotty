import React, { useState } from "react";
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

import useSharedState from "shared/use-shared-state";
import { foldersSubject } from "shared/global-store";

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const CreateNewFolder = () => {
  const classes = useStyles();
  const [folders, setFolders] = useSharedState(foldersSubject);

  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = (folderName?: string) => {
    if (folderName) {
      setFolders([...folders, folderName]);
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

function SimpleDialog(props: SimpleDialogProps) {
  const folder = useTextField('');
  const classes = useStyles();
  const { onClose, open } = props;

  function handleClose() {
    onClose();
  }

  function handleSave() {
    onClose(folder.value);
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="form-dialog-title">
        <p className={classes.dialogTitle}>Create new folder</p>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          Group notes together by defining custom folders!
        </DialogContentText>
        <TextField
          {...folder}
          autoFocus
          margin="dense"
          id="name"
          label="Folder Name"
          fullWidth
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave} color="secondary">Create Folder</Button>
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
  onClose: (folderName?: string) => void;
}

function useTextField(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const onChange = (event: InputEvent) => setValue(event.target.value);

  return { value, onChange };
}

export default CreateNewFolder;

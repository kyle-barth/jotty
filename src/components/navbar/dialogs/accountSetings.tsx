import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  DialogTitle,
  Dialog
} from "@material-ui/core";

import CreateFolderIcon from "@material-ui/icons/CreateNewFolderOutlined";

const CreateNewFolder = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = () => {
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

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    nested: {
      paddingLeft: theme.spacing(4)
    }
  });
});

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

function SimpleDialog(props: SimpleDialogProps) {
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
      <DialogTitle id="simple-dialog-title">Create new folder</DialogTitle>
    </Dialog>
  );
}

// export default CreateNewFolder;
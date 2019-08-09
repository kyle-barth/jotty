import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import {
  IconButton,
  Typography,
  Divider,
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse
} from "@material-ui/core";

import StarIcon from "@material-ui/icons/Star";
import NotesIcon from "@material-ui/icons/Notes";
import AccountIcon from "@material-ui/icons/AccountCircle";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FolderIcon from "@material-ui/icons/Folder";
import CreateNewFolder from "./dialogs/createNewFolder";

const Navbar = () => {
  const classes = useStyles();

  const [foldersState, setFoldersOpen] = React.useState(true);
  const [folders, setFolders] = React.useState<string[]>([])

  function handleCustomFolderToggle() {
    setFoldersOpen(!foldersState);
  }

  const updateFolders = () => {
    const folders: string | null = localStorage.getItem('folders');
    if(folders) {
      setFolders(JSON.parse(folders))
    }
  }

  const saveNewFolder = (folderName: string) => {
    let savedFolders: string | null = localStorage.getItem('folders');
    let newFolders: string[] = savedFolders ? [...JSON.parse(savedFolders), folderName] : [folderName];

    localStorage.setItem('folders', JSON.stringify(newFolders));
    setFolders(newFolders);
  }

  React.useEffect(()=>{
    updateFolders();
  }, [])

  return (
    <div>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="h6">test</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <AppBar color="primary" position="static">
          <Toolbar className={classes.appbarSubsection}>
            {JottyIcon}
            <IconButton aria-label="user account">
              <AccountIcon style={{ color: "white" }} />
            </IconButton>
          </Toolbar>
        </AppBar>

        <List>
          <ListItem button>
            <ListItemIcon>
              <NotesIcon />
            </ListItemIcon>
            <ListItemText primary="All Notes" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Starred Notes" />
          </ListItem>

          <Divider variant="middle" />
          <ListItem button onClick={handleCustomFolderToggle}>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Custom Folders" />
            {foldersState ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={foldersState} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <CreateNewFolder onCreate={saveNewFolder}/>
              {folders.map(x => 
              <ListItem
        button
        className={classes.nested}
        color="secondary"
      >
        <ListItemText primary={x} />
      </ListItem>)}
            </List>
          </Collapse>
        </List>
      </Drawer>
    </div>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    appbarSubsection: {
      justifyContent: "center",
      flexDirection: "column",
      height: "15rem"
    },
    nested: {
      paddingLeft: theme.spacing(4)
    }
  });
});

const JottyIcon = (
  <img
    src={require("../../images/jotty-light.png")}
    alt="jotty logo"
    height="75rem"
  />
);

export default Navbar;

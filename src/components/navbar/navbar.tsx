import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
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
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FolderIcon from "@material-ui/icons/Folder";

import CreateNewFolder from "./dialogs/createNewFolder";
import AccountSettings from "./dialogs/accountSetings";

const Navbar = () => {
  const classes = useStyles();

  const [foldersState, setFoldersOpen] = React.useState(true);
  const [folders, setFolders] = React.useState<string[]>([])

  function handleCustomFolderToggle() {
    setFoldersOpen(!foldersState);
  }

  const saveNewFolder = (folderName: string) => {
    const newFolders: string[] = [...getFolders(), folderName];

    localStorage.setItem('folders', JSON.stringify(newFolders));
    setFolders(newFolders);
  }

  React.useEffect(() => {
    setFolders(getFolders())
  }, [])

  return (
    <div>
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
            <AccountSettings />
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
              {
                folders.map(name => 
                  <ListItem button className={classes.nested} color="secondary">
                    <ListItemText primary={name} />
                  </ListItem>
                )
              }
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
  });
});

const JottyIcon = (
  <img
    src={require("../../images/jotty-light.png")}
    alt="jotty logo"
    height="75rem"
  />
);

function areStrings(val: any): val is string[] {
  return Array.isArray(val) && val.every(x => typeof x === 'string')
}

function getFolders(): string[] {
  const savedFolders: string | null = localStorage.getItem('folders');
  const parsedFolders: any = savedFolders && JSON.parse(savedFolders);

  return areStrings(parsedFolders) ? parsedFolders : [];
}

export default Navbar;

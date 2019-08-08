import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";
import NotesIcon from "@material-ui/icons/Notes";

const Navbar = () => {
  const classes = useStyles({});

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="left"
    >
      <div className={classes.toolbar}>
        <AppBar position="static">
          <Toolbar style={{ justifyContent: "center" }}>{jottyIcon}</Toolbar>
        </AppBar>
      </div>
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
      </List>
    </Drawer>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    toolbar: theme.mixins.toolbar,
    centre: {
      justifyContent: "center"
    }
  })
);

const jottyIcon = (
  <img
    src={require("../images/jotty-light.png")}
    alt="jotty logo"
    height="50rem"
  />
);

export default Navbar;

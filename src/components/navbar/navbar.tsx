import React from 'react';

import {
  fade,
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

import {
  Divider,
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  InputBase,
  Hidden,
  IconButton,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import StarIcon from '@material-ui/icons/Star';
import NotesIcon from '@material-ui/icons/Notes';
import SearchIcon from '@material-ui/icons/Search';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FolderIcon from '@material-ui/icons/Folder';

import CreateNewFolder from 'components/dialogs/create-new-folder';
import AccountSettings from 'components/dialogs/account-settings';
import useSharedState from 'shared/use-shared-state';
import { foldersSubject } from 'shared/global-store';

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [folders] = useSharedState(foldersSubject);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [foldersState, setFoldersOpen] = React.useState(true);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  function handleCustomFolderToggle() {
    setFoldersOpen(!foldersState);
  }

  const drawer = (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.jottyLogoContainer}>
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
            <CreateNewFolder />
            {folders.map((name, index) => (
              <ListItem button key={index} color="secondary">
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    </div>
  );

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search notes…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="note folders">
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => {
  let logoBackground: string =
    theme.palette.type === 'dark'
      ? 'linear-gradient(45deg, #ff4d73 30%, #FF8E53 90%)'
      : 'linear-gradient(45deg, #45dcff 30%, #2196F3 90%)';
  let searchbarBackground: string =
    theme.palette.type === 'dark'
      ? 'linear-gradient(45deg,  #FF8E53 30%, #ff4d73 90%)'
      : 'linear-gradient(45deg, #2196F3 30%, #45dcff 90%)';

  return createStyles({
    drawer: {
      [theme.breakpoints.up('md')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    appBar: {
      background: searchbarBackground,
      marginLeft: drawerWidth,
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    jottyLogoContainer: {
      background: logoBackground,
      justifyContent: 'center',
      flexDirection: 'column',
      height: '15rem',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
  });
});

const JottyIcon = (
  <img
    src={require('../../images/jotty-light.png')}
    alt="jotty logo"
    height="75rem"
  />
);

export default Navbar;

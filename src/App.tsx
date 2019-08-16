import React from 'react';
import './App.css';

import {
  createStyles,
  Theme,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { PaletteType, Switch, FormControlLabel } from '@material-ui/core';

import DarkToggleIcon from '@material-ui/icons/Brightness4';

import Navbar from './components/navbar/navbar';
import Dashboard from './components/dashboard/dashboard';

const App: React.FC = () => {
  const [themeState, setThemeState] = React.useState<PaletteType>('dark');

  const theme: Theme = createMuiTheme({
    palette: {
      type: themeState,
    },
  });

  function handleThemeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setThemeState(event.target.checked ? 'dark' : 'light');
  }

  const classes = useStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Navbar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classes.container}>
            <FormControlLabel
              style={{ float: 'right' }}
              control={
                <Switch
                  defaultChecked
                  onChange={handleThemeChange}
                  inputProps={{ 'aria-label': 'toggle user palette' }}
                />
              }
              label={<DarkToggleIcon />}
              labelPlacement="start"
            />
          </div>

          <div className={classes.container}>
            <Dashboard />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    listTitle: {
      fontWeight: 'bold',
    },
    button: {
      margin: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    spacer: {
      margin: 'auto',
    },
    container: {
      display: 'flex',
    },
  }),
);

export default App;

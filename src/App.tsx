import React from "react";
import "./App.css";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/navbar";
import Note from "./components/note";
import Switch from "@material-ui/core/Switch";
import { PaletteType } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DarkToggleIcon from "@material-ui/icons/Brightness4";

const App: React.FC = () => {
  const [themeState, setThemeState] = React.useState<PaletteType>("dark");

  const theme: Theme = createMuiTheme({
    palette: {
      type: themeState
    }
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setThemeState(event.target.checked ? "dark" : "light");
  }

  const classes = useStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Navbar />
        <main className={classes.content}>
          <FormControlLabel
            control={
              <Switch
                defaultChecked
                onChange={handleChange}
                inputProps={{ "aria-label": "toggle user palette" }}
              />
            }
            label={<DarkToggleIcon />}
            labelPlacement="start"
          />

          <Note
            title="Test"
            date="August 20th 2019"
            body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quisquam nihil, sunt ea perferendis placeat necessitatibus voluptas similique a, officia recusandae laboriosam itaque vel? Alias neque fugiat consectetur odio veritatis vel praesentium aliquid ratione soluta! Quam nobis expedita sint molestias."
          />
        </main>
      </div>
    </ThemeProvider>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  })
);

export default App;

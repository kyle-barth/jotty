import React from "react";
import "./App.css";

import {
  createStyles,
  Theme,
  makeStyles,
  createMuiTheme
} from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import {
  PaletteType,
  Switch,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Button
} from "@material-ui/core";

import DarkToggleIcon from "@material-ui/icons/Brightness4";
import NoteAddIcon from "@material-ui/icons/NoteAddOutlined";

import Navbar from "./components/navbar/navbar";
import Note from "./components/notes/note";

const App: React.FC = () => {
  const [themeState, setThemeState] = React.useState<PaletteType>("dark");

  const theme: Theme = createMuiTheme({
    palette: {
      type: themeState
    }
  });

  function handleThemeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setThemeState(event.target.checked ? "dark" : "light");
  }

  const classes = useStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Navbar />
        <main className={classes.content}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControlLabel
                style={{ float: "right" }}
                control={
                  <Switch
                    defaultChecked
                    onChange={handleThemeChange}
                    inputProps={{ "aria-label": "toggle user palette" }}
                  />
                }
                label={<DarkToggleIcon />}
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <List>
                <ListItem>
                  <ListItemText
                    primary={
                      <div style={{ display: "flex" }}>
                        <Typography variant="h4" className={classes.listTitle}>
                          All Notes:
                        </Typography>

                        <span className={classes.spacer} />

                        <Button color="default" className={classes.button}>
                          Add Note
                          <NoteAddIcon className={classes.rightIcon} />
                        </Button>
                      </div>
                    }
                  />
                </ListItem>

                <ListItem button>
                  <ListItemText
                    primary={
                      <Typography variant="h6" noWrap>
                        Example note title
                      </Typography>
                    }
                    secondary={
                      <Typography noWrap>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Dolor molestiae vero veniam voluptatem architecto
                        placeat dolore similique expedita quam, mollitia quis
                        reiciendis minus neque a saepe facilis, provident, eum
                        nobis.
                      </Typography>
                    }
                  />
                </ListItem>

                <Divider variant="middle" />
                <ListItem button>
                  <ListItemText
                    primary={
                      <Typography variant="h6" noWrap>
                        Example note title
                      </Typography>
                    }
                    secondary={
                      <Typography noWrap>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Dolor molestiae vero veniam voluptatem architecto
                        placeat dolore similique expedita quam, mollitia quis
                        reiciendis minus neque a saepe facilis, provident, eum
                        nobis.
                      </Typography>
                    }
                  />
                </ListItem>

                <Divider variant="middle" />
                <ListItem button>
                  <ListItemText
                    primary={
                      <Typography variant="h6" noWrap>
                        Example note title
                      </Typography>
                    }
                    secondary={
                      <Typography noWrap>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Dolor molestiae vero veniam voluptatem architecto
                        placeat dolore similique expedita quam, mollitia quis
                        reiciendis minus neque a saepe facilis, provident, eum
                        nobis.
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Note
                title="Example note title"
                date="August 20th 2019"
                body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quisquam nihil, sunt ea perferendis placeat necessitatibus voluptas similique a, officia recusandae laboriosam itaque vel? Alias neque fugiat consectetur odio veritatis vel praesentium aliquid ratione soluta! Quam nobis expedita sint molestias."
              />
            </Grid>
          </Grid>
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
    },
    listTitle: {
      fontWeight: "bold"
    },
    button: {
      margin: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    spacer: {
      margin: "auto"
    }
  })
);

export default App;

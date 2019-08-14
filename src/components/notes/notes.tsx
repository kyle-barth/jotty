import React from "react";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Button
} from "@material-ui/core";

import NoteAddIcon from "@material-ui/icons/NoteAddOutlined";

const NotesList = () => {
  const classes = useStyles();

  return (
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              molestiae vero veniam voluptatem architecto placeat dolore
              similique expedita quam, mollitia quis reiciendis minus neque a
              saepe facilis, provident, eum nobis.
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              molestiae vero veniam voluptatem architecto placeat dolore
              similique expedita quam, mollitia quis reiciendis minus neque a
              saepe facilis, provident, eum nobis.
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              molestiae vero veniam voluptatem architecto placeat dolore
              similique expedita quam, mollitia quis reiciendis minus neque a
              saepe facilis, provident, eum nobis.
            </Typography>
          }
        />
      </ListItem>
    </List>
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
    toolbar: theme.mixins.toolbar,
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
    },
    container: {
      display: "flex"
    },
    paper: {
      padding: theme.spacing(2),
      flex: "1 0 auto",
      margin: theme.spacing(1)
    }
  })
);

export default NotesList;

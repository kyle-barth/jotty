import React from "react";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Paper,
  Button
} from "@material-ui/core";

import NoteAddIcon from "@material-ui/icons/NoteAddOutlined";
import { maxWidth } from "@material-ui/system";

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
          primary={<Typography variant="h6">Example note title</Typography>}
          secondary={
            <Typography className={classes.previewText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              molestiae vero veniam voluptatem architecto placeat dolore
              similique expedita quam, mollitia quis reiciendis minus neque a
              saepe facilis, provident, eum nobis. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Dolor molestiae vero veniam
              voluptatem architecto placeat dolore similique expedita quam,
              mollitia quis reiciendis minus neque a saepe facilis, provident,
              eum nobis. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Dolor molestiae vero veniam voluptatem architecto placeat
              dolore similique expedita quam, mollitia quis reiciendis minus
              neque a saepe facilis, provident, eum nobis.
            </Typography>
          }
        />
      </ListItem>
      <ListItem button>
        <ListItemText
          primary={<Typography variant="h6">Example note title</Typography>}
          secondary={
            <Typography className={classes.previewText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              molestiae vero veniam voluptatem architecto placeat dolore
              similique expedita quam, mollitia quis reiciendis minus neque a
              saepe facilis, provident, eum nobis. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Dolor molestiae vero veniam
              voluptatem architecto placeat dolore similique expedita quam,
              mollitia quis reiciendis minus neque a saepe facilis, provident,
              eum nobis. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Dolor molestiae vero veniam voluptatem architecto placeat
              dolore similique expedita quam, mollitia quis reiciendis minus
              neque a saepe facilis, provident, eum nobis.
            </Typography>
          }
        />
      </ListItem>
      <ListItem button>
        <ListItemText
          primary={<Typography variant="h6">Example note title</Typography>}
          secondary={
            <Typography className={classes.previewText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              molestiae vero veniam voluptatem architecto placeat dolore
              similique expedita quam, mollitia quis reiciendis minus neque a
              saepe facilis, provident, eum nobis. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Dolor molestiae vero veniam
              voluptatem architecto placeat dolore similique expedita quam,
              mollitia quis reiciendis minus neque a saepe facilis, provident,
              eum nobis. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Dolor molestiae vero veniam voluptatem architecto placeat
              dolore similique expedita quam, mollitia quis reiciendis minus
              neque a saepe facilis, provident, eum nobis.
            </Typography>
          }
        />
      </ListItem>
    </List>
  );
};

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
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
    previewText: {
      overflow: "hidden",
      height: "5rem",
      background: `linear-gradient(${
        theme.palette.text.secondary
      }, rgba(0,0,0,0))`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
  });
});

export default NotesList;

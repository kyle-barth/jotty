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

      <ListItem className={classes.onNoteHover} button>
        <ListItemText
          primary={<Typography variant="h6">Example note title</Typography>}
          secondary={
            <div className={classes.correctBottomMargin}>
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
              <div className={classes.fadeout} />
            </div>
          }
        />
      </ListItem>
      <ListItem className={classes.onNoteHover} button>
        <ListItemText
          primary={<Typography variant="h6">Example note title</Typography>}
          secondary={
            <div className={classes.correctBottomMargin}>
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
              <div className={classes.fadeout} />
            </div>
          }
        />
      </ListItem>
    </List>
  );
};

const useStyles = makeStyles((theme: Theme) => {
  const noteHeight = theme.typography.fontSize * 5;
  const fadeColour = theme.palette.background.default;

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
      height: noteHeight
    },
    fadeout: {
      position: "relative",
      bottom: noteHeight,
      height: noteHeight,
      background: `-webkit-linear-gradient(
          rgba(255, 255, 255, 0) 0%,
          ${fadeColour} 100%
      )`,
      marginBottom: -noteHeight
    },
    correctBottomMargin: {
      marginBottom: -noteHeight,
      display: "inline-block"
    },
    onNoteHover: {
      "&:hover .makeStyles-fadeout-247": {
        background: `-webkit-linear-gradient(
          rgba(255, 255, 255, 0) 0%,
          ${theme.palette.common.white} 100%
      )`
      }
    }
  });
});

export default NotesList;

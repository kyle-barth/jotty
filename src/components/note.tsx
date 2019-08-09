import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader, IconButton, Checkbox } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import StarIcon from "@material-ui/icons/Star";
import StarIconOutlined from "@material-ui/icons/StarOutlined";
import { createStyles, makeStyles } from "@material-ui/core/styles";

type Note = {
  title: string;
  body: string;
  date: string;
};

const Note = (props: Note) => {
  const classes = useStyles({});

  const date = "Jotted down on " + props.date;

  return (
    <Card>
      <CardHeader
        title={<h3 className={classes.noteTitle}>props.title</h3>}
        subheader={date}
        action={
          <div>
            <Checkbox
              icon={<StarIconOutlined />}
              checkedIcon={<StarIcon />}
              color="primary"
              // inputProps={{
              //   'aria-label': 'secondary checkbox',
              // }}
              // onChange={handleChange('checkedA')}
              // value={state goes here}
            />
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </div>
        }
      />
      <CardContent>{props.body}</CardContent>
    </Card>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    noteTitle: {
      marginBlockStart: 0,
      marginBlockEnd: 0
    }
  })
);

export default Note;

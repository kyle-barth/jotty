import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader, IconButton, Checkbox } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import StarIcon from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";

type Note = {
  title: string;
  body: string;
  date: string;
};

const Note = (props: Note) => {
  const date = "Jotted down on " + props.date;

  return (
    <Card>
      <CardHeader
        title={props.title}
        subheader={date}
        action={
          <div>
            <Checkbox
              icon={<StarBorder />}
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

export default Note;

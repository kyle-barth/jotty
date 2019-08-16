import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import {
  CardContent,
  Typography,
  Card,
  CardHeader,
  IconButton,
  Checkbox,
} from '@material-ui/core/';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import StarIcon from '@material-ui/icons/Star';
import StarIconOutlined from '@material-ui/icons/StarOutlined';

type Note = {
  title: string;
  body: string;
  date: string;
};

const Note = (props: Note) => {
  const classes = useStyles({});

  const date = 'Jotted down on ' + props.date;

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h4" className={classes.noteTitle}>
            {props.title}
          </Typography>
        }
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
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
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
      fontWeight: 'bold',
    },
  }),
);

export default Note;

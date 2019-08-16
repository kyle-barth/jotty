import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

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
  const classes = useStyles();
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
          <div className={classes.actions}>
            <Checkbox
              icon={<StarIconOutlined className={classes.colourFade} />}
              checkedIcon={<StarIcon className={classes.colourFade} />}
              color="primary"
              // inputProps={{
              //   'aria-label': 'secondary checkbox',
              // }}
              // onChange={handleChange('checkedA')}
              // value={state goes here}
            />
            <IconButton aria-label="edit">
              <EditIcon className={classes.colourFade} />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon className={classes.colourFade} />
            </IconButton>
          </div>
        }
      />
      <CardContent>{props.body}</CardContent>
    </Card>
  );
};

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    noteTitle: {
      fontWeight: 'bold',
    },
    actions: {
      display: 'flex',
      flexDirection: 'column',
    },
    colourFade: {
      color: theme.palette.text.secondary,
    },
  });
});

export default Note;

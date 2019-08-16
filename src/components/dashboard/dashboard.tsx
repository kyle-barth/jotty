import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import { Hidden } from '@material-ui/core';

import Note from './notes/note';
import NotesList from './notes/notes';

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Hidden smUp>
        <div>
          <NotesList />
        </div>
      </Hidden>

      <Hidden xsDown>
        <div className={classes.notesList}>
          <NotesList />
        </div>
        <div>
          <Note
            title="Example note title"
            date="August 20th 2019"
            body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quisquam nihil, sunt ea perferendis placeat necessitatibus voluptas similique a, officia recusandae laboriosam itaque vel? Alias neque fugiat consectetur odio veritatis vel praesentium aliquid ratione soluta! Quam nobis expedita sint molestias."
          />
        </div>
      </Hidden>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
    },
    notesList: {
      width: '50%',
      minWidth: '20rem',
      margin: theme.spacing(2),
    },
  }),
);

export default Dashboard;

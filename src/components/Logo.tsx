import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  logo: {
    display: 'flex',
    alignItems: 'center'
  },

  circle: {
    background: theme.palette.warning.main,
    width: 60,
    height: 60,
    borderRadius: '50%',
    marginRight: 20
  }
}));

const Logo: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.logo}>
      <div className={classes.circle} />
      <Typography variant="h4">Members</Typography>
    </div>
  );
};

export default Logo;

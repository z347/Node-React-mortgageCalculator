import { FC } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { useStyles } from './styles';

export const AppBarCustom: FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <Button variant="outlined" color="inherit" className={classes.button}>
          <Link to="/" className={classes.a}>
            Home
          </Link>
        </Button>
        <Button variant="outlined" color="inherit" className={classes.button}>
          <Link to="/calculator" className={classes.a}>
            Calculator
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(AppBarCustom);

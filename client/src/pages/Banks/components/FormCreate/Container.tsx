import { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { FormCreateBank } from './Form';
import { useStyles } from './styles';

const ContainerForm: FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Typography component="main" className={classes.container}>
        <Paper className={classes.paper} elevation={2}>
          <Grid container justify="center">
            <Typography variant="h4" component="h2" gutterBottom className={classes.title}>
              Add new bank to the list
            </Typography>
            <FormCreateBank />
          </Grid>
        </Paper>
      </Typography>
    </Container>
  );
};

export { ContainerForm };

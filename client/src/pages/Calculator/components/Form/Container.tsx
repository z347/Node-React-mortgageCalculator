import { FC, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import { CalculatorForm } from './Form';
import { DropDown } from './DropDown';
import { useStyles } from './styles';

const ContainerForm: FC = () => {
  const classes = useStyles();
  const [click, setClick] = useState<boolean>(false);

  const handleCallback = (childData: boolean) => setClick(childData);

  const isClicked = click ? <CalculatorForm /> : null;

  return (
    <Container maxWidth="md">
      <div className={classes.container}>
        <Paper className={classes.paper} elevation={2}>
          <Typography variant="h4" component="h2" gutterBottom className={classes.title}>
            Calculator form
          </Typography>
          <div>
            <DropDown parentCallback={handleCallback} />
            {isClicked}
          </div>
        </Paper>
      </div>
    </Container>
  );
};

export { ContainerForm };

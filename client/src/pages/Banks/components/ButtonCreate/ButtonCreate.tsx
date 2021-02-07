import { FC } from 'react';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { useStyles } from './style';

type PropTypes = {
  handleClick: () => void;
};

const ButtonCreate: FC<PropTypes> = ({ handleClick }: PropTypes) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<AddCircleIcon />}
        onClick={handleClick}
      >
        Add bank
      </Button>
    </div>
  );
};

export { ButtonCreate };

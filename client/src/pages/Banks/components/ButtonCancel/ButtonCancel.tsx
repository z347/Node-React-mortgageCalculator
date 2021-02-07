import { FC } from 'react';
import Button from '@material-ui/core/Button';

import { useStyles } from './style';

type PropTypes = {
  handleClick: () => void;
};

const ButtonCancel: FC<PropTypes> = ({ handleClick }: PropTypes) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Button
        className={classes.root}
        variant="contained"
        size="large"
        onClick={handleClick}
      >
        Cancel
      </Button>
    </div>
  );
};

export { ButtonCancel };

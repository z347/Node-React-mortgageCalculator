import { FC } from 'react';

import { useStyles } from './styles';

const EmptyList: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <p className={classes.paragraph}>List of banks is empty.</p>
    </div>
  );
};

export { EmptyList };

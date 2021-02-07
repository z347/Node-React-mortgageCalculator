import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(2),
  },
  a: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
  linkTitle: {
    color: 'inherit',
    textDecoration: 'inherit',
    fontSize: '1.25rem',
  },
}));

export { useStyles };

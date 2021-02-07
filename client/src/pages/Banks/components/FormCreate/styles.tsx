import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(5),
    backgroundColor: theme.palette.grey[300],
  },
  paper: {
    flexGrow: 1,
    height: '100%',
    backgroundColor: 'primary',
  },
  title: {
    margin: theme.spacing(5),
    marginBottom: theme.spacing(10),
  },
  FormTask: {
    textAlign: 'center',
    verticalAlign: 'middle',
    width: '100%',
    '& > div': {
      margin: theme.spacing(1),
      width: '75%',
    },
    '& > button': {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(10),
      width: '75%',
      height: '4rem',
    },
    '& > div.MuiAlert-root': {
      display: 'inline-flex',
      width: '75%',
    },
  },
}));

export { useStyles };

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(15),
    backgroundColor: theme.palette.grey[300],
    textAlign: 'center',
  },
  paper: {
    flexGrow: 1,
    height: '100%',
    backgroundColor: 'primary',
  },
  title: {
    paddingTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(5),
    minWidth: 120,
  },
}));

export { useStyles };

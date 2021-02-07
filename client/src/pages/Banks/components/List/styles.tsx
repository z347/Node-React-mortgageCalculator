import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '75%',
    margin: '100px auto',

    '& .MuiAccordionDetails-root': {
      display: 'block',
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row-reverse',
    width: '100%',
    marginTop: '40px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '3rem',
  },
  paragraph: {
    fontSize: theme.typography.pxToRem(25),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    minWidth: '500px',
  },
  button: {
    float: 'right',
    marginTop: '25px',
  },
}));

export { useStyles };

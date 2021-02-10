import { FC } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { ListType } from 'store/types/get-list.types';

import { ButtonDelete } from './ButtonDelete';
import { ButtonEdit } from './ButtonEdit';
import { useStyles } from './styles';

type PropTypes = {
  list: ListType;
};

/* eslint-disable */

const BanksList: FC<PropTypes> = ({ list }: PropTypes) => {
  const classes = useStyles();

  const listJSX = list.map((item) => (
    <Accordion key={item._id}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>Bank: {item.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Interest rate: {item.interestRate} %</Typography>
        <Typography>Maximum loan: {item.maximumLoan} $</Typography>
        <Typography>Minimum down payment: {item.minimumDownPayment} %</Typography>
        <Typography>Loan term: {item.loanTerm} months</Typography>
        <div className={classes.wrapper}>
          <ButtonDelete data={item._id} />
          <ButtonEdit item={item} />
        </div>
      </AccordionDetails>
    </Accordion>
  ));

  return (
    <div className={classes.root}>
      <h1>List of the banks</h1>
      {listJSX}
    </div>
  );
};

export { BanksList };

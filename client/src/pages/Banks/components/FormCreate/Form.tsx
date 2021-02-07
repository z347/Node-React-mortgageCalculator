import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

import { creationRequest } from 'store/actions/create-new-bank.action';
import { requestGetListWithBanks } from 'store/actions/get-list.action';
import { ICreationBankArguments } from 'types/handlers/creation-bank.arguments';
import { useStyles } from './styles';

/* eslint-disable */

const FormCreateBank: FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm<ICreationBankArguments>();

  const submitHandler = async (data: ICreationBankArguments, event: any) => {
    event.preventDefault();
    await dispatch(creationRequest(data));
    await dispatch(requestGetListWithBanks());
    event.target.reset();
  };

  return (
    <>
      <form className={classes.FormTask} onSubmit={handleSubmit(submitHandler)}>
        <TextField
          label="Bank name *"
          id="name"
          name="name"
          type="text"
          variant="outlined"
          inputRef={register({
            required: true,
          })}
        />
        {errors.name && <Alert severity="error">Bank name is required</Alert>}

        <TextField
          label="Interest rate *"
          id="interestRate"
          name="interestRate"
          type="number"
          variant="outlined"
          inputRef={register({
            required: true,
          })}
        />
        {errors.interestRate && <Alert severity="error">Interest rate is required</Alert>}

        <TextField
          label="Maximum loan *"
          id="maximumLoan"
          name="maximumLoan"
          type="number"
          variant="outlined"
          inputRef={register({
            required: true,
          })}
        />
        {errors.maximumLoan && <Alert severity="error">Maximum loan is required</Alert>}

        <TextField
          label="Minimum down payment *"
          id="minimumDownPayment"
          name="minimumDownPayment"
          type="number"
          variant="outlined"
          inputRef={register({
            required: true,
          })}
        />
        {errors.maximumLoan && <Alert severity="error">Minimum down payment is required</Alert>}

        <TextField
          label="Loan term *"
          id="loanTerm"
          name="loanTerm"
          type="number"
          variant="outlined"
          inputRef={register({
            required: true,
          })}
        />
        {errors.loanTerm && <Alert severity="error">Loan term is required</Alert>}

        <Button variant="contained" size="large" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export { FormCreateBank };

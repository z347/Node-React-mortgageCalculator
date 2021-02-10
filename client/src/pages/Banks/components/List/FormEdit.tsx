import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import { editRequest } from 'store/actions/edit-bank.action';
import { requestGetListWithBanks } from 'store/actions/get-list.action';
import { IEditBankArguments, IEditBankItem } from 'types/handlers/edit-bank.arguments';
import { useStyles } from './styles';

type PropTypes = {
  item: IEditBankItem;
};

const FormEdit: FC<PropTypes> = ({ item }: PropTypes) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm<IEditBankArguments>();

  const submitHandler = async (data: any, event: any) => {
    event.preventDefault();
    // eslint-disable-next-line
    data.id = item._id;
    await dispatch(editRequest(data));
    await dispatch(requestGetListWithBanks());
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(submitHandler)}>
      <TextField
        label="Bank name *"
        id="name"
        name="name"
        type="text"
        variant="outlined"
        defaultValue={item.name}
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
        defaultValue={item.interestRate}
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
        defaultValue={item.maximumLoan}
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
        defaultValue={item.minimumDownPayment}
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
        defaultValue={item.loanTerm}
        inputRef={register({
          required: true,
        })}
      />
      {errors.loanTerm && <Alert severity="error">Loan term is required</Alert>}

      <div>
        <Button
          variant="contained"
          color="default"
          size="small"
          className={classes.button}
          startIcon={<SaveIcon />}
          type="submit"
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export { FormEdit };

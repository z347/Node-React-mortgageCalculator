import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

import { RootState } from 'store/root.store';

/* eslint-disable */

const CalculatorForm: FC = () => {
  const { register, handleSubmit, errors } = useForm();

  const [initialLoan, setInitialLoan] = useState<number>(0);
  const [downPayment, setDownPayment] = useState<number>(0);
  const [monthlyPayment ,setMonthlyPayment] = useState<number | null>(null);

  const { payload } = useSelector((state: RootState) => state.activeBank);

  const r = payload.interestRate;
  const n = payload.loanTerm;
  const P = initialLoan;

  const blockTop = P * ((r / 12) * Math.pow((1 + r / 12), n));
  const blockBottom = Math.pow((1 + r / 12), n) - 1;

  const submitHandler = (data: any, event: any) => {
    event.preventDefault();

    if(data.initialLoan) {
      setInitialLoan(data.initialLoan)
    } else {
      setDownPayment(data.downPayment)
      setMonthlyPayment((blockTop / blockBottom) / n)
    }
  };

  const resetHandler = () => {
    setInitialLoan(0);
    setDownPayment(0);
    setMonthlyPayment(null)
  };

  const initialLoanJSX = (
    <form onSubmit={handleSubmit(submitHandler)} key="initialLoanJSX">
      <TextField
        label="Initial loan *"
        id="initialLoan"
        name="initialLoan"
        type="number"
        variant="outlined"
        inputRef={register({
          required: true,
          min: 1,
          max: payload.maximumLoan,
        })}
      />
      {errors.initialLoan && errors.initialLoan.type === 'required' && <Alert severity="error">Initial loan is required</Alert>}
      {errors.initialLoan && errors.initialLoan.type === 'max' && <Alert severity="error">The bank does not lend so much money</Alert>}
      {errors.initialLoan && errors.initialLoan.type === 'min' && <Alert severity="error">The minimum loan amount: 1$</Alert>}

      <Button variant="contained" size="large" color="primary" type="submit">
        Next step
      </Button>
    </form>
  );

  const downPaymentJSX = (
    <form onSubmit={handleSubmit(submitHandler)} key="downPaymentJSX">
      <TextField
        label="Down payment *"
        id="downPayment"
        name="downPayment"
        type="number"
        variant="outlined"
        inputRef={register({
          required: true,
          max: initialLoan * 0.99,
          min: (initialLoan / 100) * payload.minimumDownPayment,
        })}
      />
      {errors.downPayment && <Alert severity="error">Down payment is required</Alert>}
      {errors.downPayment && errors.downPayment.type === 'min' && <Alert severity="error">The minimum down payment is {payload.minimumDownPayment} %</Alert>}
      {errors.downPayment && errors.downPayment.type === 'max' && <Alert severity="error">You don't need credit</Alert>}

      <Button variant="contained" size="large" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );

  const monthlyMortgagePaymentJSX = (
    <div key="monthlyMortgagePaymentJSX">
      <h2>Monthly mortgage payment</h2>
      <p>{monthlyPayment} $</p>
    </div>
  );

  const resetJSX = (
    <Button
      key="resetJSX"
      variant="contained"
      color="primary"
      size="large"
      onClick={resetHandler}
    >
      Reset data
    </Button>
  )

  const form = initialLoan === 0 ? [initialLoanJSX] : [downPaymentJSX];
  const content = monthlyPayment !== null ? [resetJSX] : form;
  const monthlyMortgagePayment = monthlyPayment !== null ? [monthlyMortgagePaymentJSX] : null;

  return (
    <>
      {content}
      {monthlyMortgagePayment}
    </>
  );
};

export { CalculatorForm };

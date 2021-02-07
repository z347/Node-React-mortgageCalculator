import { FC, ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { activeBankIsSet } from 'store/actions/active-bank.action';
import { ActiveBankType } from 'store/types/active-bank.types';
import { RootState } from 'store/root.store';
import { useStyles } from './styles';

type PropTypes = {
  parentCallback: (value: boolean) => void;
};

const DropDown: FC<PropTypes> = ({ parentCallback }: PropTypes) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [bank, setBank] = useState<string | number>('');
  const [open, setOpen] = useState(false);

  const { payload } = useSelector((state: RootState) => state.list);

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    setBank(event.target.value as number);
    parentCallback(true);
  };

  const handleClick = (data: ActiveBankType) => dispatch(activeBankIsSet(data));

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="select-bank">Bank</InputLabel>
      <Select
        labelId="select-bank"
        id="select-bank"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={bank}
        onChange={handleChange}
      >
        {payload.map((item) => (
          // eslint-disable-next-line no-underscore-dangle
          <MenuItem key={item._id} value={item.name} onClick={() => handleClick(item)}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { DropDown };

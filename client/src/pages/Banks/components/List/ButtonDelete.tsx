import { FC, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import { requestDeleteOneBankFromList } from 'store/actions/delete-from-list.action';
import { requestGetListWithBanks } from 'store/actions/get-list.action';

type PropTypes = {
  data: string;
};

const ButtonDelete: FC<PropTypes> = ({ data }: PropTypes) => {
  const dispatch = useDispatch();

  const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await dispatch(requestDeleteOneBankFromList(data));
    await dispatch(requestGetListWithBanks());
  };

  return (
    <IconButton aria-label="delete" onClick={handleClick}>
      <DeleteIcon />
    </IconButton>
  );
};

export { ButtonDelete };

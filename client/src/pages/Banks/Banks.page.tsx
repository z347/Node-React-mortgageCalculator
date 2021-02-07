import { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestGetListWithBanks } from 'store/actions/get-list.action';
import { RootState } from 'store/root.store';
import { Spinner } from 'components/Spinner/Spinner';

import { EmptyList } from './components/List/EmptyList';
import { BanksList } from './components/List';
import { ButtonCreate } from './components/ButtonCreate/ButtonCreate';
import { ButtonCancel } from './components/ButtonCancel/ButtonCancel';
import { ContainerForm } from './components/FormCreate';

const BanksPage: FC = () => {
  const dispatch = useDispatch();

  useEffect((): any => dispatch(requestGetListWithBanks()), [dispatch]);
  const { loading, payload } = useSelector((state: RootState) => state.list);

  const [createBank, setCreateBank] = useState<boolean>(false);

  const handleClick = () => setCreateBank((prevState) => !prevState);

  const buttons = createBank ? (
    <ButtonCancel handleClick={handleClick} />
  ) : (
    <ButtonCreate handleClick={handleClick} />
  );

  const list = payload.length > 0 ? <BanksList list={payload} /> : <EmptyList />;
  const form = createBank ? <ContainerForm /> : null;
  const requestProcessing = loading ? <Spinner /> : list;

  return (
    <>
      {requestProcessing}
      {buttons}
      {form}
    </>
  );
};

export default BanksPage;

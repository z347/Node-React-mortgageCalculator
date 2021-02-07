import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import 'typeface-roboto';

// import { store } from 'store/root.store';
import { store } from 'utils';
import MainRouter from 'routes';
import { AppBarCustom } from 'layouts/Header/Header.layout';

const App: FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <CssBaseline />
      <AppBarCustom />
      <main>
        <MainRouter />
      </main>
    </BrowserRouter>
  </Provider>
);

export { App };

import React, { FC, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import { Spinner } from 'components/Spinner/Spinner';

const HomePage = React.lazy(() => import('pages/Banks/Banks.page'));
const CalculatorPage = React.lazy(() => import('pages/Calculator/Calculator.page'));

const MainRouter: FC = () => (
  <Suspense fallback={Spinner}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/calculator" component={CalculatorPage} />
    </Switch>
  </Suspense>
);

export default withRouter(MainRouter);

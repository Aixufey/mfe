import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

// CSS prefix avoid class name collision
const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

export default function App({ history }) {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
}

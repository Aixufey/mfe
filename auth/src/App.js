import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import Signin from './components/Signin';
import Signup from './components/Signup';

// CSS prefix avoid class name collision
const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default function App({ history }) {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/sign" component={Signin} />
            <Route path="/auth/signup" component={Signup} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
}

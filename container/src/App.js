import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthApp from './components/AuthApp';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';

// CSS prefix avoid class name collision
const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default function App() {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          {/* Switch case for route based on matching route */}
          <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
          <MarketingApp />
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
}

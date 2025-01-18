import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
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
          <MarketingApp />
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
}

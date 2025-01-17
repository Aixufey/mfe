import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount fn to start the app
const mount = (e) => {
  ReactDOM.render(<App />, e);
};

// If dev mode mount dev
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#dev-root-marketing');
  if (devRoot) {
    mount(devRoot);
  }
}

// Otherwise assuming container is running in prod
export { mount };

import { createBrowserHistory, createMemoryHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount fn to start the app
const mount = (e, { onNavigate, defaultHistory }) => {
  // subapp will use memory history to avoid browser history when navigating
  // Marketing loads up, receives onNavigate from container, creates a memory history and listens to it.
  // When Marketing changes routes, returns
  const history = defaultHistory || createMemoryHistory();

  if (onNavigate) {
    // Receives location from container, pushes to memory history
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, e);

  return {
    // Returns a callback that will sync the container with the subapp
    onParentNavigate(location) {
      const { pathname: nextPathname } = location;
      const { pathname: currentPathname } = history.location;
      if (currentPathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// If dev mode mount dev
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#dev-root-marketing');
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// Otherwise assuming container is running in prod
export { mount };

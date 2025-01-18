// Importing remotes as mount functions - no coupling - generic integration only
import { mount } from 'marketing/MarketingIndex';
import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: (location) => {
        const { pathname: nextPathname } = location;

        const { pathname: currentPath } = history.location;
        if (currentPath !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });
    // Container listen to change to child's location - if child changes, update container
    history.listen(onParentNavigate)

  }, []);

  return <div ref={ref} />;
};

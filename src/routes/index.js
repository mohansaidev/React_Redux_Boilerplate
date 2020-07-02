import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import NotFound from 'components/NotFound';
import Home from 'components/Home';

const routes = (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </HashRouter>
);

export default routes;

import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import HomePage from './HomePage';
import ListPage from './ListPage';

const RouteConfig = (
    <Router history={hashHistory}>
          <Route path="/" component={HomePage}></Route>
          <Route path="/list" component={ListPage}></Route>
    </Router>
);

export default RouteConfig;

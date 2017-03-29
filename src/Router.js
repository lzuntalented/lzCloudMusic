import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import HomePage from './page/HomePage';
import ListPage from './page/ListPage';

const RouteConfig = (
    <Router history={hashHistory}>
          <Route path="/" component={HomePage}></Route>
          <Route path="/list" component={ListPage}></Route>
    </Router>
);

export default RouteConfig;

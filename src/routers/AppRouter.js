import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import {CardsList} from "../components/CardsList"
import {CardDetails} from "../components/CardDetails"
import {createBrowserHistory} from 'history';
import NotFoundPage from "../components/404"

export const history = createBrowserHistory();
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/"  component={CardsList} />
        <Route path="/cat/:id" component={CardDetails} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)
export default AppRouter;

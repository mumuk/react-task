import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';

export const history = createHistory();
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)
import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Sidebar from "./component/common/Sidebar";
const Client = lazy(() => import("./component/clients/Index"));
const Account = lazy(() => import("./component/account/Index"));

export default function Routes() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/invoicer/clients" />;
            }}
          ></Route>
          <Route path="/invoicer/clients">
            <Client />
          </Route>
          <Route path="/invoicer/accounts">
            <Account />
          </Route>
        </Suspense>
      </Switch>
    </Router>
  );
}

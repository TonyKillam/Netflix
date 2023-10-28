import React from "react";
import "normalize.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

export default function App() {
  const { user } = useAuthListener();
  console.log(user);

  return (
    <>
      {/* <Router>
        <Routes>
          <Route exact path={ROUTES.HOME} element={<Home />} />
          <Route exact path={ROUTES.BROWSE} element={<Browse />} />
          <Route exact path={ROUTES.SIGN_IN} element={<Signin />} />
          <Route exact path={ROUTES.SIGN_UP} element={<Signup />} />
        </Routes>
      </Router> */}
      <Router>
        <Switch>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_IN}
          >
            <Signin />
          </IsUserRedirect>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_UP}
          >
            <Signup />
          </IsUserRedirect>
          <ProtectedRoute user={user} path={ROUTES.BROWSE}>
            <Browse />
          </ProtectedRoute>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.HOME}
          >
            <Home />
          </IsUserRedirect>
        </Switch>
      </Router>
    </>
  );
}

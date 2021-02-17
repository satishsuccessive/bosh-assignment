import React, { lazy, Suspense, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import { createBrowserHistory } from "history";
import Home from "./components/Home";
import Sales from "./components/sales";
const history = createBrowserHistory();

// const Home = lazy(() => import("./module/TabPannel/TabPanel"));

function Routes(props) {
  const { location = {} } = props;
  return (
    <Router>
        <Suspense fallback={<>Loading...</>}>
          <Switch>
            <Route exact path="/Home" component={Home} />
             
            <Route exact path="/sales" component={Sales} />
             
            {/* <Route exact path="/add-notes">
              <Notes history={history} />
            </Route> */}
            <Redirect to={`/Home`} />

          </Switch>
        </Suspense>
    </Router>
  );
}

Routes.propTypes = {
  location: PropTypes.object.isRequired,
}


export default Routes;

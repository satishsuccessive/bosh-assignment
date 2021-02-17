import React, { lazy, Suspense, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PropTypes from 'prop-types';
import { createBrowserHistory } from "history";


const history = createBrowserHistory();

const Home = lazy(() => import("./module/TabPannel/TabPanel"));

function Routes(props) {
  const { location = {} } = props;
  return (
    <Router>
        <Suspense fallback={<>Loading...</>}>
          <Switch>
            <Route exact path="/">
              <Home history={history} />
            </Route>
            {/* <Route exact path="/add-notes">
              <Notes history={history} />
            </Route> */}
          </Switch>
        </Suspense>
    </Router>
  );
}

Routes.propTypes = {
  location: PropTypes.object.isRequired,
}


export default Routes;

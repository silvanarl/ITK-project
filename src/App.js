import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { auth } from './firebase.config';
import PropTypes from 'prop-types';
import Login from './views/Login';
import Home from './views/Home';
import Search from './components/Search';
import InitiativeStatus from './views/InitiativeStatus';
import Spinner from './components/general/Spinner';
// import Initiatives from './components/Initiatives';
// import Status from './components/Status';

function LoggedInRoute({ children, isUserLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (isUserLoggedIn) {
          return <Home>{children}</Home>;
        }
        return <Redirect to="/" />;
      }}
    />
  );
}

function NonLoggedInRoute({ children, isUserLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!isUserLoggedIn) {
          return <>{children}</>;
        }
        return <Redirect to="/home/initiatives" />;
      }}
    />
  );
}

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsUserLoggedIn(true);
        console.log('logeado');
      } else {
        setIsUserLoggedIn(false); // cambiar a false
        console.log('no está logueado');
      }
      setLoading(false);
    });
  }, []);

  if (loading) return <Spinner />;
  return (
    <Router>
      <Switch>
        <NonLoggedInRoute isUserLoggedIn={isUserLoggedIn} exact path="/">
          <Login />
        </NonLoggedInRoute>
        <LoggedInRoute isUserLoggedIn={isUserLoggedIn} exact path="/home">
          <Home />
        </LoggedInRoute>
        <LoggedInRoute
          isUserLoggedIn={isUserLoggedIn}
          exact
          path="/home/initiatives"
        >
          <Search />
        </LoggedInRoute>
        {/* <LoggedInRoute
          isUserLoggedIn={isUserLoggedIn}
          exact
          path="/home/initiatives:id"
        >
          <Status />
        </LoggedInRoute> */}
        <Route exact path="/home/initiative:id">
          <InitiativeStatus />
        </Route>
      </Switch>
    </Router>
  );
}

LoggedInRoute.propTypes = {
  children: PropTypes.object.isRequired,
  isUserLoggedIn: PropTypes.bool.isRequired,
};
NonLoggedInRoute.propTypes = {
  children: PropTypes.object.isRequired,
  isUserLoggedIn: PropTypes.bool.isRequired,
};
export default App;

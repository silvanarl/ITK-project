import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './views/Login';
import Home from './views/Home';
import Search from './components/general/Search';
import InitiativeStatus from './views/InitiativeStatus';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />,
          <Search/>
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/initiative:id">
          <InitiativeStatus />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

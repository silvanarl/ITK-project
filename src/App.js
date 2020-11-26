import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './views/Login';
import Home from './views/Home';
//import Search from './components/general/Search';
import InitiativeStatus from './views/InitiativeStatus';
import Search from './components/Search';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/Search">
          <Search />
        </Route>

        <Route exact path="/initiative:id">
          <InitiativeStatus />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

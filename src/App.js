import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './views/Login';
import Menu from './views/Menu';
import Search from './components/general/Search';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />,
          <Search/>
        </Route>
        <Route exact path="/menu">
          <Menu />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

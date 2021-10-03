import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './Pages/NoMatch';
import Home from './Pages/Home';
import Login from './Pages/Login';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Login} />
        <Route exact path="/dashboard/ft5" component={Login} />
        <Route exact path="/dashboard/ft10" component={Login} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  )
}

export default App;
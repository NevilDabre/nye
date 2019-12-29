import React from 'react';
import Main from './components/main'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path='/' component={Main} />
          <Route path="/publish" component={Main} />
      </Switch>
  </Router>
  );
}

export default App;

// Docs for API https://developer.dexcom.com/

import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Nav from './Components/Nav';
import About from './Components/About';

function App() {
  return(
    <div>
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About}/>
          
        </Switch>
      </Router>
    </div>
  )
}

export default App;
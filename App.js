import React from 'react';
import './App.css';
import Shop from './Shop';
import About from './About';
import Nav from './Nav';
import Home from './Home';
import Item from './ItemDetail';
import Gallery from './Gallery';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/shop/:id" component={Item}/>
          <Route path="/gallery" component={Gallery}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

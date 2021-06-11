
import './App.css';
import React, { Component } from 'react';
import About from './about' ;
import Contact from './contact' ;
import Home from './home' ;
import Nav from './Nav' ;
import {BrowserRouter as Router , Switch , Link, Route} from 'react-router-dom';

class App extends Component{

render(){
  return(
    <Router>
      <div>
        <h2> React router</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link">Home</Link></li>
            <li><Link to={'/contact'} className="nav-link">contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
        </nav>
        <hr/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route  path='/contact' component={Contact}/>
          <Route  path='/about' component={About}/>

        </Switch>
      </div>
    </Router>
    
  )
}
   }


export default App;

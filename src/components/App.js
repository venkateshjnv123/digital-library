
import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router , Switch , Link, Route} from 'react-router-dom';
import UBook from './dataUpload/Book';
import Ujournal from './dataUpload/Journal';
import Home from './pages/Home';
import Home1 from './Profile/Home1';
import Team from './pages/Team' ;
import Upload from './pages/Uploads' ;
import Request from './pages/Requests' ;
import Saved from './pages/Saved' ;
import Logout from './pages/Logout';

import Sidebar from './Navbar/sidebar';
import Navigation from './Navbar/Navigation';
import Send from './dataUpload/Send';
import Footer from './Navbar/Footer.js';
import ScrollToTop from './ScrollToTop';
import Doubt from './DoubtBox/DoubtBox';
import Question from './DoubtBox/Question';
import Unotes from './dataUpload/Notes';
import ULogin from './Profile/profile';
class App extends Component{

render(){
  return(
    <Router>
      <div className="app"> 
      <ScrollToTop/>
      <Navigation/>
       <Switch>
         <Route path='/' exact component={Home} /> 
        <Route path='/team' component={Team} />
        <Route path='/uploads' component={Upload} />
        <Route path='/requests' component={Request} />
        <Route path='/saved' component={Saved} />
        <Route path='/logout' component={Logout}/>
        <Route path='/send' component={Send}/>
        <Route path='/ubook' component={UBook}/>
        <Route path='/ujournal' component={Ujournal}/>
        <Route path='/unotes' component={Unotes}/>
        <Route path='/login' component={ULogin}/>
  
        

      </Switch> 
      <Footer/>
      </div>
      
    </Router>
    
  )
}
   }


export default App;

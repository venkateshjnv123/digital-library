import React, { Component } from 'react';
import {ReactComponent as Logo} from './home.svg';
import {ReactComponent as Logo2} from './home2.svg';
import {ReactComponent as Img2} from '../dataUpload/Send2.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import Send from '../dataUpload/Send';
import './Home.css';
function Home(){

    const  history=useHistory();

        return(
          <div className="main">
              <div> <Img2 className='imag2'/>
              <p className="head"> Hi Harry</p><br/>
              <p className="para"> Continue building your stack of knowledge</p>
              </div>


          <div className="Logo">
              <Logo /></div>
            <div className="circle"><Link to='/send'> <i className="fas fa-upload" /> </Link> </div>
           <div className="buttons">
                <button className="btn1">Books</button>
                <button className="btn1">Interns</button>
                <button className="btn1">Videos</button>
                <button className="btn1">Question papers</button>
                <button className="btn1">Journals</button>
           </div>
           </div>
        )
    }

export default Home;
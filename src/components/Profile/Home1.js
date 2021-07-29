import React, { Component } from 'react';
import { ReactComponent as Logo } from './home.svg';
import { ReactComponent as Logo2 } from './home2.svg';
import { ReactComponent as Book } from './book.svg';
import {Link } from 'react-router-dom';
function Home1(){
    const array= [{
        logo: 'https://www.figma.com/file/3Cu55ZSCIp8pGxJEry6b8g/Untitled?node-id=13%3A7257' }
    ]
    return(
        <div>
             <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'lightgreen', display:'flex', justifyContent: 'space-between'}} >
       <div> <a className="navbar-brand" href="#">D - library</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#">TEAM</a>
            <a className="nav-item nav-link" href="#">ABOUT</a>
            <a className="nav-item nav-link" href="#">BLOG</a>
            <a className="nav-item nav-link" href="#">CONTACTS</a>
            <button className='btn mx-3 px-2' style={{borderRadius:'5px', backgroundColor: 'white' }}><Link to='/login'>Join now </Link></button>
            <button className='btn mx-3 px-2' style={{backgroundColor:'lightgreen', border: '1px solid black'}}>Login</button>
          </div>
        </div>
      </nav>
      <div className='container row' style={{backgroundColor: 'lightgreen', width: '100%'}}>
      <div className='col-md-6'><Logo/></div>
      <div className='col-md-6'><Logo2/></div>
      <p>Connecting all the students of india to the free educational resources</p>
      </div>
      <div>
<img src={array.logo} alt='this is a image' />
      </div>
        </div>
    )
}
export default Home1;
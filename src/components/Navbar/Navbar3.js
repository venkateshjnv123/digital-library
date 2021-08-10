import React, { Component } from 'react';
import {Link } from 'react-router-dom';
export default function Navbar3(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'#FFF',alignItems:'center',display:'flex'}} >
        <div className='container' style={{justifyContent: 'space-between'}}> <div style={{display: 'flex', alignItems:'center'}}><p style={{fontFamily: 'Orbitron', fontSize: '72px',color:'#1C9469', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', transform:'rotate(-180deg)'}}> D </p> 
        <p style={{fontFamily: 'Philosopher', fontSize:'40px'}}> Library</p></div>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon" />
         </button>
         </div>
         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
           <div className="navbar-nav" >
             <a className="btn mx-2 px-2" href="#">HOME <span className="sr-only">(current)</span></a>
             <a className="btn mx-2 px-2 " href="#">TEAM</a>
             <a className="btn mx-2 px-2" href="#">ABOUT</a>
             <a className="btn mx-2 px-2" href="#">BLOG</a>
             <a className="btn mx-2 px-2" href="#">CONTACTS</a>
             <button className='btn mx-3 px-2' style={{borderRadius:'25px',width:100,boxShadow:' 0px 4px 4px rgba(0, 0, 0, 0.25)', backgroundColor: 'white' }}><Link to='/login'>Join now </Link></button>
             <button className='btn mx-3 px-2' style={{backgroundColor:'lightgreen',width:80, border: '1px solid black'}}>Login</button>
           </div>
         </div>
       </nav>
    )
}
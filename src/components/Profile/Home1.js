import React, { Component, useState } from 'react';
import { ReactComponent as Logo } from './home.svg';
import { ReactComponent as Logo2 } from './home2.svg';
import {ReactComponent as Book} from '../Homeimages/book.svg';
import {Link } from 'react-router-dom';
function Home1(){
  const arrayv= [
    { title: 'Books and Notes', img:'../Homeimages/book.png', des:'Explore'},
    { title: 'Student Community', img:'../Homeimages/book.png', des:'Explore'},
    { title: 'College media', img:'../Homeimages/book.png', des:'Explore'},
    { title: 'Journals and articals', img:'../Homeimages/book.png', des:'Explore'},
    { title: 'Careers', img:'../Homeimages/book.png', des:'Explore'},
    { title: 'Videos', img:'../Homeimages/book.png', des:'Explore'},
    { title: 'Helping Philanthropists', img:'../Homeimages/book.png', des:'Explore'},
    { title: 'Courses', img:'../Homeimages/book.png', des:'Explore'},
  ]
   
    return(
        <div>
             <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'#5CDB95',alignItems:'center',display:'flex'}} >
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
      <div className='row' style={{backgroundColor: '#5CDB95', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <div className='col-md-6' style={{textAlign: 'center'}}>
      <p style={{fontFamily: 'Philosopher', fontStyle: 'normal', fontSize: 50,}}>Connecting all the students of india to the free educational resources</p></div>
      {/* <div className='col-md-6'><Logo/></div> */}
     
       <div className='col-md-6'><Logo2/></div> 
      
      </div>
      <div className='container my-4'>
        <div className='row'>
        
          {arrayv.map(({title, img, des}) => <div className='col col-md-4 my-3' style={{justifyContent: 'center', textAlign:'center', justifyItems:'center'}} > <div className='card' style={{justifyContent: 'center'}} >
            <img src={img} className='card-img-top' alt='image' />
            <div className='card-body'>
              <h5 className='card-title' style={{fontFamily: 'Philosopher', fontSize: 24}}>{title}</h5>
              <a className='btn btn-success' href='#' style={{width: 100, borderRadius: 25}}>{des}</a>
            </div>
            </div> </div>)}
        </div>
        
      </div>
     
        </div>
    )
}
export default Home1;
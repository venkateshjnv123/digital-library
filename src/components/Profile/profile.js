import React, { Component } from 'react';
import {ReactComponent as Login} from './login.svg';
import {FaFacebook, FaGoogle, FaLinkedin}  from 'react-icons/fa';
import {ReactComponent as Google} from './google.svg';
import {ReactComponent as Apple} from './apple.svg';
import {ReactComponent as Linked} from './linked.svg';
import Icon from 'react-social-icons'; 
import './profile.css'
function ULogin(){
    const sty={
        left:0
    }

    return(
<div className='row'>
    <div className='col-md-6' style={{width:'50%'}}>
     <Login style={sty} style={{width:'100%'}}/>
     <div style={{display: 'flex', alignItems:'center', position:'absolute',top: 40, left: 40}}><p style={{fontFamily: 'Orbitron', fontSize: '72px',color:'#1C9469', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', transform:'rotate(-180deg)'}}> D </p> 
       <p style={{fontFamily: 'Philosopher', fontSize:'40px', color:'#fff'}}> Library</p></div>
    </div>
    <div className='col-md-6'>
        <div className='card ' style={{justifyContent:'center'}}>
        <div className="card-body" style={{marginTop: 100,}}>
        <h3 className="card-title mt-6 ml-3 pl-3" >Welcome !</h3>
          <h4 className="card-title mt-4 ml-3 pl-3" style={{color: 'green'}}>Join the community</h4>
         
          <h5  className='card-title ' style={{marginTop: 100, marginLeft:200, marginRight: 200}} >Sign up with</h5>
          <div className='col mt-3 pt-3 ' style={{display:'flex', justifyContent:'space-evenly'}}>
              <Google/>
              <Apple/>
              <Linked/>
              
          </div>
    
          <div className='card-title ' style={{marginTop:100, marginLeft: 100, fontSize:'24px', fontFamily:'DM sans'}}>If u  have an account?<a style={{color:'green'}}> sign in here</a></div>
        </div>
      </div>
      </div> 
</div>
    );
}
export default ULogin;
//style={{top: 50, left:100, position:'relative'}}
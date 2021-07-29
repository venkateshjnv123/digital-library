import React, { Component } from 'react';
import {ReactComponent as Login} from './login.svg';
import {FaFacebook, FaGoogle, FaLinkedin}  from 'react-icons/fa';
import {ReactComponent as Google} from './google.svg';
import {ReactComponent as Apple} from './apple.svg';
import {ReactComponent as Linked} from './linked.svg';
import './profile.css'
function ULogin(){
    const sty={
        left:0
    }

    return(
<div className='row'>
    <div className='col-md-6' style={{width:'50%'}}>
     <Login style={sty} style={{width:'100%'}}/>
    </div>
    <div className='col'>
        <div className='card'>
        <div className="card-body" style={{marginTop: 50,}}>
        <h3 className="card-title">Welcome !</h3>
          <h4 className="card-title mt-4" style={{color: 'green'}}>Join the community</h4>
          <div style={{justifyContent: 'center', marginTop: 20, margin:'auto'}}>
          <h5  className='card-title mx-auto mt-10' style={{alignSelf: 'center'}}>Sign up with</h5>
          <div className='col'>
              <Google/>
              <Apple/>
              <Linked/>
              
          </div>
          </div>
        </div>
      </div>
      </div> 
</div>
    );
}
export default ULogin;
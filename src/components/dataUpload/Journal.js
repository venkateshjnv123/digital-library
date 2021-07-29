
import React, { Component } from 'react';
import './Book.css';

import {ReactComponent as Img2} from './Send2.svg';
class Ujournal extends Component{
    render() {
        const label={
            fontFamily: 'Roboto',
            fontSize: 16,}
        return (
            <div >
            <Img2 className='img2'/>
            <div className='container text-center' id='form1'>
        <div className="card text-center shadow-lg p-3 mb-5 bg-white rounded"  >
        <p className="card-title text-success" style={{fontFamily:'Philosopher', fontSize: 25 , position:'realtive', left:-200}}>Enter the details of the Journal</p>
        <div className='card-body' style={{textAlign: 'center'}}>
        <form >
            <div className="form-group text-center">
            <label for="book" style={label}> TITLE: </label>
            <input id="book" className="form-control ml-1 p-1 mb-4" type="text"  required /> 
            </div>
            <div className="form-group">
            <label for="author" style={label} > DESCRIPTION:  </label>
            <textarea id="author" className="form-control ml-1 p-1 mb-4" type="text" required />
            </div>
        
            <div className="form-group">
            <label for="des" style={label} > TAGS: </label>
            <input id="des" className="form-control ml-1 p-1 mb-4" type="text"/>
            </div>
            <div className="form-group">
            {/* <input id="input-b1" name="input-b1" type="file" className="file form-control-lg"   */}
             <input id="link" className="form-control ml-1 p-1 mb-4" type="url" placeholder="Paste your link here"  required/>
</div> 
            <div className="form-group" id="btn1">
            <button type="button" id="btn" className="btn btn-success" >Upload </button> </div>
        </form>
        </div>
        </div>
   </div>
   </div>
        );
    }
}

export default Ujournal;
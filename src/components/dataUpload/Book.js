
import React, { Component } from 'react';
import {ReactComponent as Img2} from './Send2.svg';
import './Book.css';

class UBook extends Component{
    render() {
         const label={
             fontFamily: 'Roboto',
             fontSize: 16,}
        return (
            <div className='container' style={{position:'relative', height:'100%'}}  >
                <Img2 className='img2'/>
             <div id='form1' > 
            <div className="card text-center shadow-lg p-3 mb-5 bg-white rounded"  >
            <p className="card-title text-success" style={{fontFamily:'Philosopher', fontSize: 25 , position:'realtive', left:-200}}> Please fill the details of Book and upload</p>
            <div className='card-body' style={{textAlign: 'center'}}>
            <form >
                <div className="form-group text-center">
                <label for="book" style={label}> NAME OF THE BOOK: </label>
                <input id="book" className="form-control ml-1 p-1 mb-4" type="text"  required />
                </div>
                <div className="form-group">
                <label for="author" style={label} > AUTHOR:  </label>
                <input id="author" className="form-control ml-1 p-1 mb-4" type="text" required />
                </div>
                <div className="form-group">
                <label for="subject" style={label} >  SUBJECT (OPTIONAL): </label>
                <input id="subject" className="form-control ml-1 p-1 mb-4" type="text"/>
                </div>
                <div className="form-group">
                <label for="des" style={label} > TAGS: </label>
                <input id="des" className="form-control ml-1 p-1 mb-4" type="text"/>
                </div>
                <div className="form-group">
                <input id="link" className="form-control ml-1 p-1 mb-4" type="url" placeholder="Paste your link here"  required/>
                </div>
                {/* <div className="form-group">
                     <label for="file" > Upload the document of book :   </label><i id='icon1' className="fas fa-folder-open"/>
                     <input id="file" className=" ml-1 p-1 mb-4" type="file"/>
                     </div> */}
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

export default UBook;
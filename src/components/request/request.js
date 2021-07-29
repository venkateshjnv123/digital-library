import React from 'react';
import './Request.css';
import Requestimg1 from '../images/requestimg.svg';
function Request(){
    function books(){
        document.getElementById('requesttype').style.display='none';
        document.getElementById('bookrequest').style.display='block';
    }
    function notes(){
        document.getElementById('requesttype').style.display='none';
        document.getElementById('notesrequest').style.display='block';
    }
    return(
    <div className="request">
    <div className="text-center">
        <div id="requesttype">
    <img src={Requestimg1}></img>
    <p className="p1 mt-5">we apologize for bringing you to this page</p>
    <p className="p2">please fill the details of the book you are searching for we will notify you within few days</p>
    <p className="p3 mt-5">TYPE OF THE MATERIAL</p><br></br>
    <button className='btn px-5 mx-3' onClick={books}>Books</button><button onClick={notes} className='btn px-5 mx-3'>Notes</button>
    </div>
    </div>
    <div id="bookrequest" className="card bookrequest my-5">
        <div className="card-body">
        <div className="card-title"><p className="booktype">Enter the details of the book</p></div>
        <form className="mx-5 card-text"><div><label>NAME OF THE BOOK</label>
            <input type="text" required className="form-control"></input></div>
            <div><label>NAME OF THE AUTHOR</label>
            <input type="text" required className="form-control"></input></div>
            <div><label>NAME OF THE SUBJECT</label>
            <input type="text" required className="form-control"></input></div>
          <div className="text-center">  <button className="btn px-5 my-5 ">Send</button>
            </div></form></div>
        </div>
    <div id="notesrequest" className="card bookrequest my-5">
        <div className="card-body">
        <div className="card-title"><p className="booktype">Enter the details of the Notes</p></div>
        <form className="mx-5 card-text"><div><label>TYPE</label>
            <input type="text" required className="form-control"></input></div>
            <div><label>TOPIC</label>
            <input type="text" required className="form-control"></input></div>
            <div><label>NAME OF THE SUBJECT</label>
            <input type="text" required className="form-control"></input></div>
          <div className="text-center">  <button className="btn px-5 my-5 text-center">Send</button>
            </div></form></div>
        </div>
    </div>

      );
}
export default Request;

import React from 'react';
import './Request.css';
import Requestimg1 from '../images/requestimg.svg';
function Request(){
    return(
<div>
    
    <div className="request"><input type="text" value="request" className="input1" readOnly></input>
    <div className="text-center">
    <img src={Requestimg1}></img>
    <p className="p1">we apologize for bringing you to this page</p>
    <p className="p2">please fill the details of the book you are searching for we will notify you within few days</p>
    </div>
    </div>
    <div className="mt-5 pt-5 rf1 "><form>
        <div className="requestform">
    <label>Name Of The Book</label><br></br>
    <input type="text" name="bookname" className="form-control" required /><br></br>
    <label>Name Of The Author</label><br></br>
    <input type="text" name="authorname" className="form-control " required /><br></br>
    <label>Name Of The Subject</label><br></br>
    <input type="text" name="subjectname" className="form-control " required /><br></br>
    <div className="text-center"><button type="submit">send</button></div></div>
    </form></div>
</div>
      );
}
export default Request;
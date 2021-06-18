
import React, { Component } from 'react';
import './Book.css';

class UCourse extends Component{
    render() {
        return (
            <div className="container-sm" id="form1">
            <p className="venky"> Please fill the details of Journal and upload</p>
            <form >
                <div className="form-group">
                <label for="branch" > For whom it is useful: </label>
                <input id="branch" className="form-control ml-1 p-1 mb-4" type="text" required/>
                </div>
                <div className="form-group">
                     <label for="file" > Upload the image :   </label><i id="icon1" className="fas fa-folder-open"/>
                     <input id="file" className=" ml-1 p-1 mb-4" type="file"/>
                     </div>
                <p> Or </p>

                <div className="form-group">
                <label for="des" > Description: </label>
                <input id="des" className="form-control ml-1 p-1 mb-4" type="text"/>
                </div>
                <div className="form-group">
                <label for="author" > Name of the course:  </label>
                <input id="author" className="form-control ml-1 p-1 mb-4" type="text" required />
                </div>
                <div className="form-group">
                <label for="subject" > Cost: </label>
                <input id="subject" className="form-control ml-1 p-1 mb-4" type="text" required/>
                </div>
                
                <div className="form-group">
                <input id="link" className="form-control ml-1 p-1 mb-4" type="url" placeholder="paste your link here"  required/>
                </div>
                
                <div className="form-group" id="btn1">
                <button type="button" id="btn" className="btn btn-success" >Upload </button> </div>
            </form>
       </div>
        );
    }
}

export default UCourse;
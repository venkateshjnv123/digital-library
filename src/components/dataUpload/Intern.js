import React, { Component } from 'react';
import './Book.css' ;
class UIntern extends Component{
    render() {
        return (
             <div className="container-sm" id="form1">
                 <p className="venky"> Please fill the details of Intern and upload</p>
                 <form >
                     <div className="form-group">
                     <label for="branch" > For whom it is useful: </label>
                     <input id="branch" className="form-control ml-1 p-1 mb-4" type="text"/>
                     </div>
                     <div className="form-group">
                     <label for="file" > Upload a image or file :   </label><i id="icon1" className="fas fa-folder-open"/>
                     <input id="file" className=" ml-1 p-1 mb-4" type="file"/>
                     </div>
                     <div className="form-group">
                     <label for="company" >Name of the Company: </label>
                     <input id="company" className="form-control ml-1 p-1 mb-4" type="text"/>
                     </div>
                     <div className="form-group">
                     <label for="role" > Role:  </label>
                     <input id="role" className="form-control ml-1 p-1 mb-4" type="text"/>
                     </div>
                     <div className="form-group">
                     <label for="stipend" > Stipend: </label>
                     <input id="stipend" className="form-control ml-1 p-1 mb-4" type="number"/>
                     </div>
                     <div className="form-group">
                     <label for="des" > Description: </label>
                     <input id="des" className="form-control ml-1 p-1 mb-4" type="text"/>
                     </div>
                     <div className="form-group">
                     <label for="elig" > Eligibility: </label>
                     <input id="elig" className="form-control ml-1 p-1 mb-4" type="text"/>
                     </div>
                     <div className="form-group">
                     <label for="date" > Last date to apply: </label>
                     <input id="date" className="form-control ml-1 p-1 mb-4" type="date"/>
                     </div>
                     <div className="form-group">
                     <input id="link" className="form-control ml-1 p-1 mb-4" type="url" placeholder="paste your link here" /> <i  id="element2" className="fas fa-link"/>
                    
                     </div>
                     <div className="form-group" id="btn1">
                     <button type="button" id="btn" className="btn btn-success" >Upload </button> </div>
                 </form>
            </div>
        );
    }
}

export default UIntern;
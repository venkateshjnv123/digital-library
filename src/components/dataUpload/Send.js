import React, { Component } from 'react';
import {ReactComponent as Img} from './Send1.svg';
import {ReactComponent as Img2} from './Send2.svg';
import {Link} from 'react-router-dom';
import './Send.css';


class Send extends Component{
    render(){
        return(
            <div className="sent">
                <button className="btn2"> Upload </button>
                <Img className="img1"/>
                <p className="para1">we are flattened by your helping nature</p>
                <p className="para2"> what do u want to upload today</p>
                <div className="buttons1">
                <Link to='/ubook'><button className="btn1">Books</button></Link>
                <Link to='/ucourse'><button className="btn1">Courses</button></Link> 
                <Link to='/uvideo'> <button className="btn1">Videos</button></Link>
                <Link to='/uintern'><button className="btn1">Interns</button></Link>
               <Link to='/ujournal'> <button className="btn1">Journals</button></Link>
           </div>
           <Img2 className="img2"/>


            </div>
        )
    }
}
export default Send;
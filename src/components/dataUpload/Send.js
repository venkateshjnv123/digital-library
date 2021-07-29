import React, { Component } from 'react';
import {ReactComponent as Img} from './Send1.svg';
import {ReactComponent as Img2} from './Send2.svg';
import {Link} from 'react-router-dom';
import './Send.css';


class Send extends Component{
    render(){
        return(
            <div className='container col-md-6 justify-content-center' style={{ minHeight: '100%'}} id='sent'>
                <Img2 className='imag2'/>
                <Img className="img1"/>
                <p className="para1">we are flattened by your helping nature</p>
                <p className="para2"> what do u want to upload today</p>
                <div className="buttons1">
                <Link to='/ubook'><button className="btn1">Books</button></Link>
                <Link to='/unotes'><button className="btn1">Notes</button></Link> 
               <Link to='/ujournal'> <button className="btn1">Journals</button></Link>
               <Link to='/uquestion'><button className="btn1">Question papers</button></Link>
           </div>
            </div>
        )
    }
}
export default Send;
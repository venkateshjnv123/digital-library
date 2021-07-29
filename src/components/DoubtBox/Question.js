import React, { Component } from 'react';
import {ReactComponent as Ques1} from './Ques.svg';
import './Question.css' ;

class Question extends Component{
    render(){
        return(
            <div className="ques">
            <Ques1 className="qimg"/>
            <p  className="pques"> Write your doubts </p>
            <input type="text" id="adoubt" placeholder="Write the Question"/>
            <textarea type="text" id="info" placeholder="more info"/>
            <label for="file-img"> Upload the image </label>
            <input type="file" id="file-img"/>
            <button className="qbtn"> SEND </button>
            </div>
        )
    }
}

export default Question;
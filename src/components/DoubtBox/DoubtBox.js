import React, { Component } from 'react';
import {ReactComponent as Doubt1} from './Doubt1.svg';
import {ReactComponent as Doubt2} from './Doubt2.svg';
import './DoubtBox.css';

class Doubt extends Component{
    render(){
        return(
            <div className="doubt">
                <button className="dbtn1"> Doubt Box</button>
                <Doubt1 className="dimg1"/>
                <p className="dpara"> "Pondering about your doubt"</p>
                <p className="dpara1">Dont worry ask your doubt in our friendly student community</p>
                <div className="dbutton">
                    <button className="dbtn2">Public</button>
                    <button className="dbtn2">Private</button>
                </div>
                <Doubt2/>

            </div>
        )
    }
}

export default Doubt; 
import React, { Component } from 'react';
import "./Nav.css";
class Nav extends Component{
    render(){
        return (
            <nav>
            <h1> Nav</h1><br/>
            <ul className="navlinks">
                <li> about</li>
                <li> contact </li>
            </ul></nav>
        )
    }
}

export default Nav;

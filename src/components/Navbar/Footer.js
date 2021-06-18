import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component{
    render(){
        return(
                <div class="footer">
                    <button className="buttonf">faqs</button>
                    <button className="buttonf">About Us</button>
                    <button className="buttonf">Contact Us</button>
                </div>
            
        )
    }
}

export default Footer;
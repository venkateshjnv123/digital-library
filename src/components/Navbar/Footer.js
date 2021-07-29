import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component{
    render(){
        return(
                <div className="footer mt-auto py-3">
                    <button className="buttonf">faqs</button>
                    <button className="buttonf">About Us</button>
                    <button className="buttonf">Contact Us</button>
                </div>
            
        )
    }
}

export default Footer;
import React from 'react';
import './Start.css'
import Startimag from '../images/start img.svg';
import Startimag2 from '../images/start img2.svg';
import {Link} from 'react-router-dom';
function Start(){
    return(
        <div>
            <div className="text-center">
<img src={Startimag}></img>
<div className="start"><p className="p1">thankyou for considering our application</p>
<p className="p2 mt-5"> let us know more about you for hassle free experience of our app</p>
<Link to="/detail"><button>Start</button></Link>
</div><img src={Startimag2}></img><img src={Startimag2}></img>
        </div></div>
    );
}
export default Start;
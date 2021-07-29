import React from 'react';
import '../profile/Start.css'
import Startimag from '../images/sent.svg';
import Startimag2 from '../images/start img2.svg';
import {Link} from 'react-router-dom';
function Requestsent(){
    return(
        <div className="sent">
            <div className="text-center mt-5">
<img src={Startimag}></img>
<div className="start"><p className="p1">sent sucessfully</p>
<p className="p2 mt-5">we will notify within 3 days</p>
</div><img src={Startimag2}></img><img src={Startimag2}></img>
        </div></div>
    );
}
export default Requestsent;
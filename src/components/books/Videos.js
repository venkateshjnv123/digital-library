import React from 'react';
import './Videos.css';
import Likes from '../images/book likes.svg';
import Share from '../images/share.svg'
import Save from '../images/book save.svg';
import Videoimg1 from '../images/videos img.svg';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Btechimg2 from '../images/btechsubjectnotfoundimg.svg';
import {Link} from 'react-router-dom';
import Requestleaves from '../images/start img2.svg';

function Videos(){
  var array=[{
    book:"Magic of Maths",
    discription:"BS Grewal",
    youtube:"5000",
    website:"something",
    likes:361
  },
  {
    book:"Magic of Maths",
    discription:"BS Grewal",
    youtube:"5000",
    website:"something"
  },
  {
    book:"Magic of Maths",
    discription:"BS Grewal",
    youtube:"5000",
    website:"something"
  },
  {
    book:"Magic of Maths",
    discription:"BS Grewal",
    youtube:"5000",
    youtube:"something"
  },
  {
    book:"Magic of Maths",
   
    discription:"BS Grewal",
    youtube:"5000",
    website:"something"
  },
  {
    book:"Magic of Maths",
    discription:"BS Grewal",
    youtube:"5000",
    website:"something"
  },
];
  
      
      function filterFunction() {
        var count=0;
          //document.getElementById("siva1").style.display="none";
          //var siva=[];
         // var k=0;
          
          var input, filter,i;
          input = document.getElementById("myInput");
          filter = input.value.toUpperCase();
          for (i = 0; i < array.length; i++) {
           var txt = array[i].book;
            if (txt.toUpperCase().indexOf(filter) > -1) {
             
          document.getElementById(array[i].book).style.display = "";
          count++;
            }
          //console.log(a[i]);
       else {
           document.getElementById(array[i].book).style.display= "none";
        
             }
             
          }
          console.log(count);
          if(count===0){
            document.getElementById("videolist").style.display="none";
            document.getElementById("notfound").style.display="block";
          }
          else{
            document.getElementById("notfound").style.display="none"; 
            document.getElementById("videolist").style.display="block";
          }
        }
        function getid(event){
          alert(event.target.src);
          
      
        }
    return(
        <div className="videos">
            <div className="videosconst"><input type="text" readOnly value="Videos" ></input></div>
            <div><img src={Videoimg1} className="img1" alt={Videoimg1}></img></div>
            <div style={{textAlign:"center"}} className="mt-5 search"><input type="text" placeholder="Search for the video" id="myInput" onKeyUp={filterFunction} className="searchbar"></input>
        </div>
        <div id="videolist">
        <div className="text-center mt-5  buttons">{array.map((branch)=>(<div value={branch.book} id={branch.book} className="buttontype btn " ><h2 className="company">{branch.book}</h2><div className="eligibility"><div className="span2" id="span2">{branch.discription}</div></div><div className="stipend"><span className="span1">source</span><span className="span2">{branch.youtube}</span></div><div className="website"><span className="span1">{branch.website}</span></div><div className="lower"><span className="lowerimg1"><img src={Share}></img></span><img src={Likes} onClick={getid}></img><span>{branch.likes}</span><span className="lowerimg2"><img src={Save} alt={Save}></img></span></div></div>))}</div>
</div>
<div className="notfound text-center mt-5" id="notfound">
<img src={Btechimg2} ></img>
<p className="p1">sorry i dont have what you are looking for</p>

<img src={Requestleaves} className="imgs"></img><img src={Requestleaves} className='imgs'></img>
</div>
</div>
    );
}
export default Videos;
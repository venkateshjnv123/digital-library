import React from 'react';
import './Intern.css';
import Courseimg1 from '../images/Intern img.svg';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//import Btechimg2 from './images/btechsubjectnotfoundimg.svg';
//import {Link} from 'react-router-dom';
//import Requestleaves from './images/start img2.svg';

function Intern(){
    var array=[{
        company:"Magic of Maths",
        eligibility:"BS Grewal",
        duration:"Engineering Maths",
        applyby:"www.google.com",
        stipend:"5000",
        website:"something"
      },
      {
        company:"Magic of Maths",
        eligibility:"BS Grewal",
        duration:"Engineering Maths",
        applyby:"www.google.com",
        stipend:"5000",
        website:"something"
      },
               
      {
        company:"Magic of Maths",
        eligibility:"BS Grewal",
        duration:"Engineering Maths",
        applyby:"www.google.com",
        stipend:"5000",
        website:"something"
      },
      {
        company:"Magic of Maths",
        eligibility:"BS Grewal skldjgajtgj;lasdk;lasdkgopfk;lgk'alsdl;kgl;fkgl;a'kftgl;dfjkogiftjdfklgnkl;j;aflkfkdjadfjtokjkljhkldg'ad'hoptiymfghkl'fhjfghkuioyjfdghjfdhgksirtkrjgfgjij",
        duration:"Engineering Maths",
        applyby:"www.google.com",
        stipend:"5000",
        website:"something"
      },
      {
        company:"Magic of Maths",
        eligibility:"BS Grewal",
        duration:"Engineering Maths",
        applyby:"www.google.com",
        stipend:"5000",
        website:"something"
      },
      {
        company:"Magic of Maths",
        eligibility:"BS Grewal",
        duration:"Engineering Maths",
        applyby:"www.google.com",
        stipend:"5000",
        website:"something"
      },
    ];
      
      function filterFunction() {
        //var count=0;
          //document.getElementById("siva1").style.display="none";
          //var siva=[];
         // var k=0;
          
          var input, filter,i;
          input = document.getElementById("myInput");
          filter = input.value.toUpperCase();
          for (i = 0; i < array.length; i++) {
           var txt = array[i].company;
            if (txt.toUpperCase().indexOf(filter) > -1) {
             
          document.getElementById(array[i].company).style.display = "";
        
            }
          //console.log(a[i]);
       else {
           document.getElementById(array[i].company).style.display= "none";
        
             }
             
          }
         
        }
    return(
        <div className="intern">
        
            <div className="internconst"><input type="text" readOnly value="Interns" ></input></div>
            <div><img src={Courseimg1} className="img1" alt={Courseimg1}></img></div>
            <div style={{textAlign:"center"}} className="mt-5 search"><input type="text" placeholder="Search for the Intern" id="myInput" onKeyUp={filterFunction} className="searchbar"></input>
        </div>
  <div className="text-center mt-5  buttons">{array.map((branch)=>(<div value={branch.company} id={branch.company} className="buttontype btn " ><h2 className="company">{branch.company}</h2><div className="eligibility"><span className="span1">Eligibility</span><div className="span2" id="span2">{branch.eligibility}</div></div><div className="duration"><span className="span1">Duration</span><span className="span2">{branch.duration}</span></div><div className="apply"><span className="span1">Apply By</span><span className="span2">{branch.applyby}</span></div><div className="stipend"><span className="span1">Stipend</span><span className="span2">{branch.stipend}</span></div><div className="website"><span className="span1">{branch.website}</span></div></div>))}</div>
</div>

        
    );
}
export default Intern;

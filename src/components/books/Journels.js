import React from 'react';
import './Journels.css';
import Courseimg1 from '../images/journels img.svg';

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//import Btechimg2 from './images/btechsubjectnotfoundimg.svg';
//import {Link} from 'react-router-dom';
//import Requestleaves from './images/start img2.svg';

function Journels(){
    var array=[{
        book:"Magic of Maths",
        author:"BS Grewal",
        subject:"Engineering Maths",
        website:"www.google.com"
      },
      {
        book:"civil engineerig materials",
        author:"some",
        subject:"civil engineerig materials",
        website:"www.google1.com"
      },
      {
        book:"python",
        author:"dsfdf",
        subject:"civil engineerig materials",
        website:"www.google1.com"
      },
      {
        book:"theory +",
        author:"kgfs",
        subject:"civil engineerig materials",
        website:"www.google1.com"
      },
      {
        book:"java",
        author:"prepare",
        subject:"civil engineerig materials",
        website:"www.google1.com"
      },
      {
        book:"commom",
        author:"moreone",
        subject:"civil engineerig materials",
        website:"www.google1.com"
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
           var txt = array[i].book;
            if (txt.toUpperCase().indexOf(filter) > -1) {
             
          document.getElementById(array[i].book).style.display = "";
        
            }
          //console.log(a[i]);
       else {
           document.getElementById(array[i].book).style.display= "none";
        
             }
             
          }
         
        }
    return(
        <div className="journels">
            <div className="journelconst"><input type="text" readOnly value="Journals" ></input></div>
            <div><img src={Courseimg1} className="img1" alt={Courseimg1}></img></div>
            <div style={{textAlign:"center"}} className="mt-5 search"><input type="text" placeholder="Search for the Journal" id="myInput" onKeyUp={filterFunction} className="searchbar"></input>
        </div>
  <div className="text-center mt-5  buttons">{array.map((branch)=>(<button value={branch.book} id={branch.book} className="buttontype btn" ><p>{branch.book}</p><p>{branch.author}</p><p>{branch.subject}</p><p>{branch.website}</p></button>))}</div>
</div>
        
    );
}
export default Journels;

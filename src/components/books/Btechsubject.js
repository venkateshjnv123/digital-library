import React from 'react';
import './Btechsubject.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Likes from '../images/book likes.svg';
import Share from '../images/share.svg'
import Save from '../images/book save.svg';
import Btechimg1 from '../images/btechsubjectimg1.svg';
import Btechimg2 from '../images/btechsubjectnotfoundimg.svg';
import {Link} from 'react-router-dom';
import Requestleaves from '../images/start img2.svg';
function Btechsubject(){
    var array=[{
      book:"Magic of Maths",
      author:"BS Grewal",
      subject:"Engineering Maths",
      website:"www.google.com",
      likes:361
    },
    {
      book:"civil engineerig materials",
      author:"some",
      subject:"civil engineerig materials",
      website:"www.google1.com",
      likes:36
    },
    {
      book:"python",
      author:"dsfdf",
      subject:"civil engineerig materials",
      website:"www.google1.com",
      likes:3650
    },
    {
      book:"theory +",
      author:"kgfs",
      subject:"civil engineerig materials",
      website:"www.google1.com",
      likes:350
    },
    {
      book:"java",
      author:"prepare",
      subject:"civil engineerig materials",
      website:"www.google1.com",
      likes:300
    },
    {
      book:"commom",
      author:"moreone",
      subject:"civil engineerig materials",
      website:"www.google1.com",
      likes:30
    },
  ];
    var t=0;
    function filterFunction() {
      var count=0;
        //document.getElementById("siva1").style.display="none";
        //var siva=[];
       // var k=0;
        console.log("10");
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
          document.getElementById("notfound").style.visibility="visible";
        }
        else{
          document.getElementById("notfound").style.visibility="hidden"; 
        }
      }
      function getid(event){
        alert(event.target.src);
        
    
      }
     
      
    return(
<div className=" books">
  <div className="bookimg">
  <div className="listofbooks">
   <input type="text" readOnly value="Books" ></input></div>
   <div className="listofbookstagline"><p className=" display-4 p1">There’s a book  for everyone</p></div>
   <img src={Btechimg1} className="img1"></img></div>

<div style={{textAlign:"center"}} className="mt-5 search"><input type="text" placeholder="Search for the book" id="myInput" className="searchbar" onKeyUp={filterFunction}></input>
  
  <div className="text-center mt-5 ml-5 buttons">{array.map((branch)=>(<button value={branch.book} id={branch.book} className="buttontype btn" ><div className='name'><span className="span1">name of the book</span><br></br><span id="p1">{branch.book}</span></div><div className="name"><span className="span1">Author</span><br></br><span>{branch.author}</span></div><div className="name"><span className="span1">Subject</span><br></br><span>{branch.subject}</span></div><div className="name"><span className="span1">website</span><br></br><span>{branch.website}</span></div><div className="lower"><span className="lowerimg1"><img src={Share}></img></span><img src={Likes} onClick={getid}></img><span>{branch.likes}</span><span className="lowerimg2"><img src={Save} alt={Save}></img></span></div></button>))}</div>
</div>
<div className="notfound text-center mt-5" id="notfound">
<img src={Btechimg2} ></img>
<p className="p1">sorry i dont have what you are looking for</p>
<p className="p2">Dont worry we will find it in few days</p>
<p className="p3">please tap on request and fill the details of what you are looking for</p>
<Link to="/request"><div><button>request</button></div></Link>
<img src={Requestleaves} className="imgs"></img><img className="imgs" src={Requestleaves}></img>
</div>
</div>

    );
}
export default Btechsubject;
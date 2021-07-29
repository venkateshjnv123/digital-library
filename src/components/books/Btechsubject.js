import React from 'react';
import './Btechsubject.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Likes from '../images/book likes.svg';
import Share from '../images/share.svg'
import Save from '../images/book save.svg';
import Dots from '../images/bookdot.svg';
import Btechimg1 from '../images/btechsubjectimg1.svg';
import Btechimg2 from '../images/btechsubjectnotfoundimg.svg';
import {Link} from 'react-router-dom';
import searchtag1 from '../images/booksearch1.svg';
import line from '../images/book searchline.svg';
import Comment from '../images/book comment.svg';
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
    function filterFunction() {
      var count=0;
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
     else {
         document.getElementById(array[i].book).style.display= "none";
      
           }
           
        }
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
      function borderbottom(event){
        document.getElementById(event.target.id).style.borderBottom="1px solid black";
        for(var bb=1;bb<6;bb++){
          if(event.target.id!=='btn'+bb){
            document.getElementById('btn'+bb).style.borderBottom="0px";
          }
        }
      }
     
      
    return(
<div className="books container-fluid">
<div className="booking">
  <div className="d-flex justify-content-between mx-5">
   <div className="listofbookstagline display-5 mt-5 ">There is a book for everyone</div>
   <img src={Btechimg1} className="img1"></img>
</div>
<div className="search"><span>FILTER</span><span><img src={searchtag1}></img></span><span className='line mx-3'><img src={line}></img></span><span><i className='fa fa-search' style={{fontSize:'11px',color:'black'}}></i></span><input type="text" placeholder="Search for the book" id="myInput" className="searchbar form-control text-center" onKeyUp={filterFunction}></input>
  </div>
  </div>
  <br></br>
  <nav className="booksbar" style={{backgroundColor:'#C9EDDC',height:'25px'}}>
    <div className="bardiv" style={{paddingTop:'5px'}}>
    <button className="barbtn1" id="btn1" onClick={borderbottom}>HOME</button>
    <button className="barbtn2" id="btn2" onClick={borderbottom}>TRENDING</button>
    <button className="barbtn3" id="btn3" onClick={borderbottom}>NOVELS</button>
    <button className="barbtn4" id="btn4" onClick={borderbottom}>SAVED</button>
    <button className="barbtn5" id="btn5" onClick={borderbottom}>REQUESTS</button>
    </div>
  </nav>
  <div className="row">
      {array.map((book)=>( 
    <div className="col-sm-4 py-3" id={book.book}><div className="card maincard h-100"><div className="card-body mx-5"><div className="d-flex flex-row-reverse"><img src={Dots} style={{width:'3px'}}></img></div><p className="card-title title">{book.book}</p><p className="card-text"><span className="span1">Author : </span><span className="span2">{book.author}</span></p><p className="card-text"><span className="span1">Subject : </span><span className="span2">{book.subject}</span></p><button className="btn btn1">{book.website}</button><div className="lower my-5" style={{display:'flex'}}><span className="lowerimg1"><img src={Share} className="mx-3"></img></span><img src={Likes} className="mx-1" onClick={getid}></img><span>{book.likes}</span><span className="lowerimg2 mx-3"><img src={Save} alt={Save}></img></span><span className="mx-3"><img src={Comment}></img></span></div></div></div></div>))}
</div>
  <div className="notfound text-center mt-5" id="notfound" style={{visibility:'hidden'}}>
<img src={Btechimg2} ></img>
<p className="p1">sorry i dont have what you are looking for</p>
<p className="p3">please tap on request and fill the details of what you are looking for</p>
<Link to="/request"><div className='my-5'><button className='btn px-5'>Request</button></div></Link>
</div>
</div>
    );
}
export default Btechsubject;

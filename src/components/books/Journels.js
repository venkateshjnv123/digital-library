import React from 'react';
import './Btechsubject.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Likes from '../images/book likes.svg';
import Share from '../images/share.svg'
import Save from '../images/book save.svg';
import Dots from '../images/bookdot.svg';
import Btechimg1 from '../images/journels img.svg';
import searchtag1 from '../images/booksearch1.svg';
import line from '../images/book searchline.svg';
import Comment from '../images/book comment.svg'
function Journel(){
    var array=[{
      book:"Magic of Maths",
      channel:'something',
      source:"Engineering Maths",
      website:"www.google.com",
      likes:361
    },
    {
      book:"civil engineerig materials",
      channel:"some",
      source:"civil engineerig materials",
      website:"www.google1.com",
      likes:36
    },
    {
      book:"python",
      channel:"dsfdf",
      source:"civil engineerig materials",
      website:"www.google1.com",
      likes:3650
    },
    {
      book:"theory +",
      channel:"kgfs",
      source:"civil engineerig materials",
      website:"www.google1.com",
      likes:350
    },
    {
      book:"java",
      channel:"prepare",
      source:"civil engineerig materials",
      website:"www.google1.com",
      likes:300
    },
    {
      book:"commom",
      channel:"moreone",
      source:"civil engineerig materials",
      website:"www.google1.com",
      likes:30
    },
  ];

    function filterFunction() {
     
        console.log("10");
        var input, filter,i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        for (i = 0; i < array.length; i++) {
         var txt = array[i].book;
          if (txt.toUpperCase().indexOf(filter) > -1) {
           
        document.getElementById(array[i].book).style.display = "";
          }
     else {
         document.getElementById(array[i].book).style.display= "none";
      
           }
          }
      }
      function getid(event){
        alert(event.target.src);
      }
      function borderbottom(event){
        document.getElementById(event.target.id).style.borderBottom="1px solid black";
        for(var bb=1;bb<4;bb++){
          if(event.target.id!='btn'+bb){
            document.getElementById('btn'+bb).style.borderBottom="0px";
          }
        }
      }
    return(
<div className="books" style={{overflowX:'hidden'}}>
<div className="booking">
  <div className="d-flex justify-content-between mx-5">
   <div className="listofbookstagline display-5 mt-5 ">Journals</div>
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
    <button className="barbtn4" id="btn3" onClick={borderbottom}>SAVED</button>
    </div>
  </nav>
  <br></br>
  <div className="row">
  {array.map((book)=>( 
    <div className=" py-3 col-sm-12" id={book.book}><div className="card maincard h-100" style={{marginRight:'10%',marginLeft:'10%'}}><div className='d-flex'><div className="card-body"><p className="card-title title">{book.book}</p><p className="card-text"><span className="span1">{book.channel}</span></p><p className="card-text"><span className="span1">Source : </span><span className="span2">{book.source}</span></p><div className="text-center"><button className="btn btn1">{book.website}</button></div><div className="lower my-5 d-flex row"><div className="col-sm-6"><span className="lowerimg1"><img src={Share} className="mx-3"></img></span></div><div className="col-sm-6 text-right"><img src={Likes} className="mx-1" onClick={getid}></img><span>{book.likes}</span><span className="lowerimg2 mx-3"><img src={Save} alt={Save}></img></span><span className="mx-3"><img src={Comment}></img></span></div></div></div><div><img src={Dots} style={{width:'4px',marginRight:'10px',marginTop:'10px'}}></img></div></div></div></div>))}
</div>
</div>
    );
}
export default Journel;

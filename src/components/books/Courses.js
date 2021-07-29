import React from 'react';
import './Btechsubject.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Likes from '../images/book likes.svg';
import Share from '../images/share.svg'
import Save from '../images/book save.svg';
import Dots from '../images/bookdot.svg';
import Btechimg1 from '../images/course img.svg';
import searchtag1 from '../images/booksearch1.svg';
import line from '../images/book searchline.svg';
import Comment from '../images/book comment.svg';
import Cost from '../images/course cost.svg';
import Captions from '../images/course caption.svg';
import Language from '../images/course language.svg';
function Courses(){
  var array=[{
    company:"Magic of Maths",
    eligibility:"BS Grewal",
    duration:"Engineering Maths",
    applyby:"www.google.com",
    stipend:"5000",
    location:'dfgnsdlfjkskdlfjdks',
    website:"something",
    Language:'english',
    captions:'english',
    cost:'10000',
    id:0
  },
  {
    company:"Magic of Maths",
    eligibility:"BS Grewal",
    duration:"Engineering Maths",
    applyby:"www.google.com",
    stipend:"5000",
    website:"something",
    id:1
  },
  {
    company:"Magic of Maths",
    eligibility:"BS Grewal",
    duration:"Engineering Maths",
    applyby:"www.google.com",
    stipend:"5000",
    website:"something",
    id:2
  },
  {
    company:"Magic of Maths",
    eligibility:"BS Grewal skldjgajtgj;la sdk;lasdk gopfk; ghftdfgdftfgcfghrbftrdkkmdxdvghjhkghkdj hdjghdjryjkgfhkfgjhgdrgctyetfygvxrtjfybhkfxdtjv jhxgjgvjdfggiltfidrughdrutffgygyuijiojio;fguydtysdrus rfuyuhghitfuisdrufgujkbjkjkj hoyilrtsdrxghvjhbjknkljkjio;fgdrtserxdtvjhjm nmkljkjhifysdtsrfgbjhnkljkjhi oserydfvbjjnjio;gyiodruseyfgvjhiuiguydts xdcfvbjhbhjjfgutcfgghktfrfghjbjkhiluifucfdrtserfbjhnkmlg k'alsdl;kg l;fkgl ;a'kftgl;d fjkogif tjdfk lgnkl;j; aflkfk djadfjt okjkl jhkldg' ad'hoptiy mfghk jfgh kuioyj fdg hjfdhgk sirtkrj gfgjij",
    duration:"Engineering Maths",
    applyby:"www.google.com",
    stipend:"5000",
    website:"something",
    id:3
  },
  {
    company:"Magic of Maths",
    eligibility:"BS Grewal",
    duration:"Engineering Maths",
    applyby:"www.google.com",
    stipend:"5000",
    website:"something",
    id:4
  },
  {
    company:"Magic of Maths",
    eligibility:"BS Grewal",
    duration:"Engineering Maths",
    applyby:"www.google.com",
    stipend:"5000",
    website:"something",
    id:5
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
        count++;
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
        for(var bb=1;bb<5;bb++){
          if(event.target.id!='btn'+bb){
            document.getElementById('btn'+bb).style.borderBottom="0px";
          }
        }
      }
    return(
<div className="books">
<div className="booking">
  <div className="d-flex justify-content-between mx-5">
   <div className="listofbookstagline display-5 mt-5 ">Courses</div>
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
    <button className="barbtn4" id="btn3" onClick={borderbottom}>FREE</button>
    <button className="barbtn4" id="btn4" onClick={borderbottom}>SAVED</button>
    </div>
  </nav>
  <div className="row">
  {array.map((book)=>( 
     <div className=" py-3 col-sm-12 my-4" id={book.company}><div className="card maincard h-100" style={{marginRight:'10%',marginLeft:'10%'}}><div className='d-flex'><div className="card-body mx-5"><p className="card-title title">{book.company}</p><p className="card-text"><span className="span1">{book.location}</span></p><div className="card-text row"><div className="col-sm-3"><div className="card"><div className="card-body"><div className="span1 card-text">PROVIDER</div><div className="span2 card-text">{book.applyby}</div></div></div></div><div className="col-sm-3"><div className="card"><div className="card-body"><div className="span1 card-text d-flex"><img src={Captions} width="50px" style={{marginTop:"-5px"}}></img><div style={{marginTop:"5px"}}>{book.captions}</div></div></div></div></div><div className="col-sm-3"><div className="card"><div className="card-body"><div className="span1 card-text d-flex"><img src={Language} width="30px"></img><div>{book.Language}</div></div></div></div></div><div className="col-sm-3"><div className="card"><div className="card-body"><div className="span1 card-text"><img src={Cost} width='70px'></img><div style={{marginLeft:"10px"}}>{book.cost}</div></div></div></div></div></div><div className="text-center my-5"><button className="btn btn1">{book.website}</button></div><div className="lower my-5 d-flex row"><div className="col-sm-6"><span className="lowerimg1"><img src={Share} className="mx-3"></img></span></div><div className="col-sm-6 text-right"><img src={Likes} className="mx-1" onClick={getid}></img><span>{book.likes}</span><span className="lowerimg2 mx-3"><img src={Save} alt={Save}></img></span><span className="mx-3"><img src={Comment}></img></span></div></div></div><div><img src={Dots} style={{width:'4px',marginRight:'10px',marginTop:'10px'}}></img></div></div></div></div>))}

</div>
</div>
    );
}
export default Courses;

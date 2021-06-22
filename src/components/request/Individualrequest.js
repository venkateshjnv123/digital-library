import React from 'react';
import './Individualrequest.css';
//import Backimg from './images/individualimg.svg';
function In(){
    var array=[{
        user:"siva",
        time:"2002",
        collage:"nit",
        book:"Magic of Maths",
        author:"BS Grewal",
        subject:"Engineering Maths",
        id:1
        
      },
      {
        user:"siva",
        time:"2002",
        collage:"nit",
        book:"civil engineerig materials",
        author:"some",
        subject:"civil engineerig materials",
       id:2
      },
      {
        user:"siva",
        time:"2002",
        collage:"nit",
        book:"python",
        author:"dsfdf",
        subject:"civil engineerig materials",
        id:3
      },
      {
        user:"siva",
        time:"2002",
        collage:"nit",
        book:"theory +",
        author:"kgfs",
        subject:"civil engineerig materials",
        id:4
      },
      {
        user:"siva",
        time:"2002",
        collage:"nit",
        book:"java",
        author:"prepare",
        subject:"civil engineerig materials",
        id:5
      },
      {
        user:"siva",
        time:"2002",
        collage:"nit",
        book:"commom",
        author:"moreone",
        subject:"civil engineerig materials",
        id:6
      },
    ];
     
    function getid(event){
        alert(event.target.id);
    }
    return(
        <div className="individual"><div>
            <div className="allrequestconst"><input type="text" readOnly value="Request" ></input></div></div>
            <div className="text-center mt-5 ml-5 buttons">{array.map((branch)=>(<div value={branch.book} id={branch.book} className="buttontype btn"  style={{backgroundImage:'url(/individualimg.svg)',backgroundRepeat:'no-repeat'}}><div className="name"><span className="span1">{branch.book}</span><br></br><span className="span1">{branch.author}</span><br></br><span className="span1">{branch.subject}</span><br></br><span className="span1">{branch.website}</span><br></br><span className="span1">{branch.time}</span></div></div>))}</div>
</div>
    );
}
export default In;
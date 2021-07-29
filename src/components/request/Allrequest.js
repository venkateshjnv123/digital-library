import React from 'react';
import './Allrequest.css'
function Allrequest(){
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
        <div className="allrequest"><div>
            <div className="allrequestconst"><input type="text" readOnly value="Request" ></input></div></div>
            <div className="text-center mt-5 ml-5 buttons">{array.map((branch)=>(<div value={branch.book} id={branch.book} className="buttontype btn" ><div className="requesteddetail"><span className='span1'>{branch.user}</span><span className="span2">{branch.collage}</span><span className="span3">{branch.time}</span><br></br></div><div className="reports"><div className='name'><span className="span1">name of the book</span><br></br><span id="p1">{branch.book}</span></div><div className="name"><span className="span1">Author</span><br></br><span>{branch.author}</span></div><div className="name"><span className="span1">Subject</span><br></br><span>{branch.subject}</span></div><div className="name1"><button id={branch.id} onClick={getid}>Upload</button></div></div></div>))}</div>
</div>
    );
}
export default Allrequest;
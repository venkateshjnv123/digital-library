import React from 'react';
import './Individualrequest.css';
import Likes from '../images/book likes.svg';
import Share from '../images/share.svg';
import Delete from '../images/delete.svg';
import Save from '../images/book save.svg';
//import Backimg from './images/individualimg.svg';
function Inup(){
    var array=[{
        user:"siva",
        time:"2002",
        collage:"nit",
        book:"Magic of Maths",
        author:"BS Grewal",
        subject:"Engineering Maths",
        likes:301,
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
            <div className="allrequestconst"><input type="text" readOnly value="Upload" ></input></div></div>
            <div className="text-center mt-5 ml-5 buttons">{array.map((branch)=>(<div value={branch.book} id={branch.book} className="buttontype btn"  style={{backgroundImage:'url(/individualimg.svg)',backgroundRepeat:'no-repeat'}}><div className="name"><span className="span1">{branch.book}</span><br></br><span className="span1">{branch.book}</span><br></br><span className="span1">{branch.book}</span><br></br><span className="span1">{branch.book}</span><br></br><span  className="span1">{branch.book}</span></div><div className="lower"><span className="lowerimg1"><img src={Delete}></img></span><span className="lowerimg1"><img src={Share}></img></span><img src={Likes} onClick={getid}></img><span>{branch.likes}</span><span className="lowerimg2"><img src={Save} alt={Save}></img></span></div></div>))}</div>
</div>
    );
}
export default Inup;
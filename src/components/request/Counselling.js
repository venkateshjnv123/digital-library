import React ,{useState}from 'react';
import './Counselling.css';
import Counsellingimg from '../images/counselling img1.svg';
import Counsellingleaves from '../images/start img2.svg';
import {Link} from 'react-router-dom';
import './Cprivate.css';
import Girlvoice from '../images/cprivate girl voice.svg';
import Boyvoice from '../images/cprivate boy voice.svg';
import Girluser from '../images/Cprivate girl user.svg';
import Boyuser from '../images/Cprivate boy user.svg';
import Collegecap from '../images/Cprivate college.svg';
import Location from '../images/Cprivate location.svg';
function Counselling(){
    const[state,setstate]=useState({data1:0})
   // console.log(state.data1)
         var array=[{
             college:'NIT WARANGAL',
             name:'siva shankar',
             phone:'8340955026',
             gender:'male',
             language:['english','telugu'],
             id:0
         },
         {
             college:'nit agartala',
             name:'sathish',
             phone:'456456485456',
             gender:'male',
             language:['english','telugu'],
             id:1
         },
         {
             college:'iit hyd',
             name:'mnsfdnkf',
             phone:'467464231654',
             gender:'female',
             language:['english','telugu'],
             id:2
         },
         {
         college:'iit danbad',
         name:'viswa',
         phone:'6546445645645',
         gender:'male',
         language:['english','telugu'],
         id:3
         },
         {
             college:'iit tirupathi',
             name:'dfskff',
             phone:'56892687455',
             gender:'female',
             language:['english','telugu'],
             id:4
             },
             {
                 college:'nit trichy',
                 name:'virat',
                 phone:'546654654',
                 gender:'male',
                 language:['english','telugu'],
                 id:5
                 }];
         function getuser(){
                for(var k=0;k<array.length;k++){
                    if(array[k].gender==="male"){
                    document.getElementById("f"+k).style.display="none";
                    // var t= document.getElementById(array[k].gender);
                    //setstate({data1:1});
                    console.log(10)
                    }
                   else if(array[k].gender==="female"){
                       document.getElementById("m"+k).style.display="none";
                      // setstate({data1:2});
                      console.log(11);
                    }
                }
             }
             function getuserid(event){
                 setstate({data1:event.target.id})
                 for(var k=0;k<array.length;k++){
                    if(array[k].gender==="male"){
                    document.getElementById("f"+k).style.display="none";
                    document.getElementById("fv"+k).style.display="none";
                    // var t= document.getElementById(array[k].gender);
                    //setstate({data1:1});
                    console.log(10)
                    }
                   else if(array[k].gender==="female"){
                       document.getElementById("m"+k).style.display="none";
                       document.getElementById("mv"+k).style.display="none";
                      // setstate({data1:2});
                      console.log(11);
                    }
                }
             }
               // state.data1=event.target.id;
                console.log(state.data1)
               if(state.data1==="private"){
                    document.getElementById("cprivate").style.display="block";
                    document.getElementById("counselling").style.display="none";
                }
              //  else{
                  //  document.getElementById("cprivate").style.display="none";
                   // document.getElementById("couselling").style.display="";
               // }
             
     function search(){
         var input, filter,i;
         input = document.getElementById("myInput");
         filter = input.value.toUpperCase();
         for (i = 0; i < array.length; i++) {
          var txt = array[i].college;
        //  console.log(txt);
          if (txt.toUpperCase().indexOf(filter) > -1) {
              console.log(array[i].college);
            
             document.getElementById(array[i].college).style.display = "";
            // count++;
               }
             //console.log(a[i]);
          else {
              document.getElementById(array[i].college).style.display= "none";
           
               }
          
     }
 }
    
    return(
        <div>
        <div><div id="counselling"> 
            <div className="counselling"><div><input className="input1" type="text" readOnly value="Counselling"/></div>
           <div className="text-center"> <img className="img" src={Counsellingimg}></img><br></br>
           <button className="btn1">Public</button><br></br>
           <button className="btn2" onClick={getuserid} id="private">Private</button><br></br>
          <div> <img className="images" src={Counsellingleaves}></img><img className="images" src={Counsellingleaves}></img></div>
           </div></div></div>
           </div>
    <div id="cprivate">
    <div className="container-fluid cprivate">
         <div className="cprivate"><input type="text" readOnly value="Private" ></input></div>
         <div className="cprivatesearch"><input type="text" id='myInput' className="search" placeholder="search" onKeyUp={search}></input></div>
         <div className="text-center cprivatebutton">{array.map((branch)=>(<button value={branch.college} id={branch.college} className="buttontype btn"  ><div><img src={Collegecap}></img><p>{branch.college}</p></div><div id={"myDiv"+branch.id}><img src={Girluser}  onClick={getuserid} id={"f"+branch.id}></img><img src={Boyuser} onClick={getuserid} id={"m"+branch.id}></img><p>{branch.name}</p></div><div><img src={Location}></img><p>{branch.phone}</p></div><div><img src={Girlvoice} id={"fv"+branch.id}></img><img src={Boyvoice} id={"mv"+branch.id}></img>{branch.language.map((lang)=>(<p>{lang}</p>))}</div></button>))}</div>
         
     </div>
     </div>

</div>
    );
}
export default Counselling;
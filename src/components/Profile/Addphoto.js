import React  from 'react';
import Leave1 from '../images/detail leaves.svg';
import Leave2 from '../images/detail leaves2.svg';
import Img1 from '../images/photo img.svg';
import Img2 from '../images/detail img2.svg';
function Addphoto(){ 
    return (
    <div style={{overflow:"visible"}} className="datail container">
   <div className=" leave1" class="rounded float-start"> <img  src={Leave1}></img></div>
   <div className=" leave2" class="rounded float-end"> <img  src={Leave2}></img></div>
    <header className="profile text-center mt-5 pt-5"><h3>Photo</h3>
<p>Add a nice photo of Yourself for your profile</p><div className="line"></div></header>
<div className="photo img text-center mt-5"><img className="mt-5 pt-5" src={Img1} alt={Img1}></img></div>
<form>
   <div className="ml-5 upload" ><input  type="file"></input></div>
    </form>
    <div className="text-center"><button className="photoskip">Skip</button></div>
    </div>
    );
}
export default Addphoto;

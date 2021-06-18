import React, {useState} from 'react'
import Navbar1 from './Navbar1'
import Sidebar from './sidebar'
import Navbar2 from './Navbar2'
const Navigation = () => {
 const [isOpen, setIsOpen] = useState(false);
 
 const toggle =() => {
     setIsOpen(!isOpen);
 };

    return (
        <div>
            {/* <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar1 toggle={toggle}/> */}
            <Navbar2/>
        </div>
    )
}

export default Navigation

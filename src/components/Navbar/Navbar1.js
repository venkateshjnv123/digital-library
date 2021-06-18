import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';
import {
    Nav,
    NavLink,
    Bars,
    MobileIcon,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './Navbarelements';
const Navbar1 = ({toggle}) => {
        return(
            <div>
                 <Nav>
        <NavLink to='/'>
          <h1 className="head">D_library</h1>
        </NavLink>
        <MobileIcon onClick={toggle}>
          <Bars/>
        </MobileIcon>
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/team' activeStyle>
            Team
          </NavLink>
          <NavLink to='/uploads' activeStyle>
            Uploads
          </NavLink>
          <NavLink to='/requests' activeStyle>
            Requests
          </NavLink>
          <NavLink to='/saved' activeStyle>
            saved
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Logout'>logout</NavBtnLink>
        </NavBtn>
      </Nav>
                </div>
        )
    }
export default Navbar1;
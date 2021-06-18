import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from './globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavLogo1,
  NavAlign,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './Navbar.elements';

function Navbar2() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>

        <Nav>
          <NavbarContainer>
            <NavAlign>
            <NavLogo >
              D
            </NavLogo>
            <NavLogo1 >
              LIBRARY
            </NavLogo1 ></NavAlign>
            
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/team' onClick={closeMobileMenu}>
                  Team
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/uploads' onClick={closeMobileMenu}>
                  uploads
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/requests' onClick={closeMobileMenu}>
                  Requests
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/saved' onClick={closeMobileMenu}>
                  Saved
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/Logout'>
                    <Button primary>Logout</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/Logout'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Logout
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
 
    </>
  );
}

export default Navbar2;
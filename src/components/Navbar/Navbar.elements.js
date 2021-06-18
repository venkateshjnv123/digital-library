import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from './globalStyles';

export const Nav = styled.nav`
  background: #69BEA0;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container}
`;

export const NavLogo = styled.div`

  justify-self: flex-start;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-family: Orbitron;
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  color: #0D986A;
  text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  transform: rotate(-180deg);
`;

export const NavAlign=styled.div`
justify-content: space-around;
display: flex;`;

export const NavLogo1=styled.div`

text-decoration: none;
display:flex;
align-items: center;
font-family: Philosopher;
font-style: normal;
font-weight: normal;
font-size: 36px;
color: #002140;

`;


export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #0B845C;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 32px;
    width: 100%;
    display: table;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  @media screen and (max-width: 960px){
    position: absolute;
  }
`;
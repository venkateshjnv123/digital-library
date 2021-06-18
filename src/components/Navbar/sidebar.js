import React from 'react';
import Home from '../pages/Home';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper,SidebarMenu, SidebarLink, SidebtnWrap, sidebarRoute } from './Sidebarelements';
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                <SidebarLink to="/" activeStyle>
                    Home
                </SidebarLink>
                <SidebarLink to="/team" activeStyle>
                    Team
                </SidebarLink>
                <SidebarLink to="/uploads" activeStyle>
                    Uploads
                </SidebarLink>
                <SidebarLink to="/requests" activeStyle>
                    Requests
                </SidebarLink>
                <SidebarLink to="/saved" activeStyle>
                    Saved
                </SidebarLink>
                </SidebarMenu>
                <SidebtnWrap>
                    <sidebarRoute to='./logout'>Logout</sidebarRoute>
                </SidebtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;

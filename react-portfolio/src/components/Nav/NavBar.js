import React, { useEffect } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import Wood from '../../assets/cover/wood.jpg'





function NavBar() {
  return (
    <>
    <Nav style={{ backgroundImage: `url(${Wood})`}} >
      <Bars />

      <NavMenu style={{ backgroundImage: `url(${Wood})`}} > 
          <NavLink to='/' activeStyle>
            Home
            </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
          <NavLink to='/portfolio' activeStyle>
            Portfolio
          </NavLink>
          <NavLink to='/resume' activeStyle>
            Resume
          </NavLink>
          
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar;

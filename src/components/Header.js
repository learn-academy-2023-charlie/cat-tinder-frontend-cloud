import React, { useState } from 'react';
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function Header(args) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
<div style={{
            display: 'block', width: "100vw"
        }}>
            <Navbar color="dark" expand="md" fixed="top" className="mb-5">
                <NavbarBrand href="/" style={{color:"white"}}>VillainTender</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/" style={{color:"white"}}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/villainindex" style={{color:"white"}}>See All</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/villainnew" style={{color:"white"}}>New Villain</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
}
  
export default Header;
  

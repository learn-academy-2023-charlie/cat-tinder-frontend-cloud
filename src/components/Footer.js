import React from "react"
import { Navbar, NavbarBrand } from "reactstrap"

const Footer = () => {
    return (
      <>
       <Navbar
    className="my-2"
    // color="transparent"
    fixed="bottom"
  >
    <NavbarBrand href="/">
      &copy; V & C | 2023
    </NavbarBrand>
  </Navbar>
      </>
    )
  }
  
  export default Footer;
  
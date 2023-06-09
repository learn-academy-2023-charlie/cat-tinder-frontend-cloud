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
  // const toggle = () => setIsOpen(!isOpen);


//header currently inline. To make it drop down from top right corner, change expand="md" to expand="l" on line 27. not sure how to get an obvious clickable thing there though.
  return (
<div style={{
            display: 'block', width: "100vw"
        }}>
            <Navbar color="dark" expand="md" fixed="top">
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
  
  
  // <div>
  //   <Navbar dark="true" {...args} fixed="top">
  //     <NavbarBrand href="/">Villain Tinder</NavbarBrand>
  //   </Navbar>
  // </div>


// import React, { useState } from 'react';
// import { Container } from 'reactstrap';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText,
// } from 'reactstrap';


// // Header needs work, this whole page of code is messy and incomplete
// function Header(args) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <Container>
//     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Logo</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNav">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Villains</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Villainesses</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled">Disabled</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
//     </Container>
//   );
// }

// export default Header;
import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "./Nav.css";

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' color='white' style={{backgroundColor: "#d4d4d4"}}>
      <MDBContainer fluid>
        <img src="logoNav.png" id="navLogo" alt="logo" />
        <div className="linkBlock">
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
          style={{ color: "white" }}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='ml-auto mb-2 mb-lg'>
              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current='page'
                  href='/'
                  style={{ color: "#474646" }}
                >
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#' style={{ color: "#474646" }}>
                  Rules
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
          </div>

      </MDBContainer>
    </MDBNavbar>
  );
}

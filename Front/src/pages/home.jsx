import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import Portfolio from './portfolio';
import AboutMe from './aboutMe';
import Contact from './contact';
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBMask, MDBView, MDBBtn, MDBIcon } from "mdbreact";

class Home extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <div>
      <header>
      <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg">
          <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
            <h2>Hello! My name is Marion KOO SIN LIN</h2>
            <br />
            <p>I am a fullstack React/NodeJS developer who is also enjoying coding in SQL and is passionate about Japan</p>
            <NavLink to="/portfolio"><MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> View project</MDBBtn></NavLink>
          </MDBMask>
        </MDBView>
      </header>
    </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import logoblack from "../images/swiplogo main black.png";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  render() {
    return (
      <>
        <header>
          <MDBNavbar
            color="bg-primary"
            fixed="top"
            dark
            expand="md"
            scrolling
            transparent
          >
            <div
              className="wraps"
              style={{
                paddingBottom: "-20px !important",
                marginBottom: "-20px !important",
              }}
            >
              {" "}
              <MDBNavbarBrand href="/">
                <strong>
                  <Link className="logo-text" to="/">
                    <img
                      className="logoblack"
                      src={logoblack}
                      width="70px"
                      height="28px"
                      alt="Home Banner"
                    />
                  </Link>
                </strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && (
                <MDBNavbarToggler onClick={this.onClick} />
              )}
              <MDBCollapse
                className="collaper"
                isOpen={this.state.collapse}
                navbar
              >
                {" "}
                <MDBNavbarNav className="hang left" left></MDBNavbarNav>
                <MDBNavbarNav className="hanger" right>
                  <MDBNavItem>
                    <MDBNavLink to="#">
                      {" "}
                      <Link className="link" to="/">
                        Home
                      </Link>
                    </MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink to="#">
                      {" "}
                      <Link className="link" to="/pricing">
                        Pricing
                      </Link>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">
                      {" "}
                      <Link className="link" to="/howitworks">
                        How it works
                      </Link>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">
                      {" "}
                      <Link className="link" to="/search">
                        Search Stores
                      </Link>
                    </MDBNavLink>
                  </MDBNavItem>

                  <Link to="/auth/signin">
                    <nav className="bigger">
                      <ul>
                        <li
                          className="text"
                          style={{ opacity: "1 !important" }}
                        >
                          Login
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </li>
                      </ul>
                    </nav>
                  </Link>
                  <Link to="/auth/signup">
                    <nav className="bigger">
                      <ul>
                        <li
                          className="text"
                          style={{ opacity: "1 !important" }}
                        >
                          Sign up
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </li>
                      </ul>
                    </nav>
                  </Link>
                </MDBNavbarNav>
              </MDBCollapse>
            </div>
          </MDBNavbar>
        </header>
      </>
    );
  }
}

export default Nav;

import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";

import Aux from "../../../../../hoc/_Aux";
import DEMO from "../../../../../store/constant";

import Avatar1 from "../../../../../assets/images/user/avatar-1.jpg";

class NavRight extends Component {
  state = {
    listOpen: false,
  };
  async Logout() {
    localStorage.removeItem("store_id");
    localStorage.removeItem("username");
    localStorage.removeItem("owner_id");
    localStorage.removeItem("isLoggedin");
  }

  render() {
    const username = localStorage.getItem("usernmae");
    return (
      <Aux>
        <ul className="navbar-nav ml-auto">
          <li>
            <Dropdown alignRight={!this.props.rtlLayout} className="drp-user">
              <Dropdown.Toggle variant={"link"} id="dropdown-basic">
                <img
                  src={Avatar1}
                  height="40px"
                  width="40px"
                  style={{ marginLeft: "5px" }}
                  className="img-radius"
                  alt="User Profile"
                />
                {username}
              </Dropdown.Toggle>
              <Dropdown.Menu alignRight className="profile-notification">
                <div className="pro-head">
                  <img
                    src={Avatar1}
                    className="img-radius"
                    alt="User Profile"
                  />
                  <span>{username}</span>
                  <a
                    href={DEMO.BLANK_LINK}
                    className="dud-logout"
                    title="Logout"
                  >
                    <i className="feather icon-log-out" />
                  </a>
                </div>
                <ul className="pro-body">
                  <li>
                    <a
                      onClick={() => {
                        if (window.confirm("Do you wish to Logout?")) {
                          this.Logout();
                        }
                      }}
                      href={DEMO.BLANK_LINK}
                      className="dropdown-item"
                    >
                      <i className="feather icon-settings" /> Logout
                    </a>
                  </li>
                </ul>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </Aux>
    );
  }
}

export default NavRight;

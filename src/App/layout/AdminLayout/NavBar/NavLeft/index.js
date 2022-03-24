import React, { Component } from "react";
import { connect } from "react-redux";
import windowSize from "react-window-size";
import Button from "../../../../../dashboard/otherbutton2";

import Aux from "../../../../../hoc/_Aux";

import * as actionTypes from "../../../../../store/actions";

class NavLeft extends Component {
  render() {
    return (
      <Aux>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a
              href={"http://" + localStorage.getItem("username") + ".swip.ng"}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "relative",
                lineHeight: "2em",
              }}
            >
              <Button
                name={"Login"}
                value={"Store Front"}
                style={{ width: "100% !important" }}
                placeholder={"Enter your name"}
                handleChange={this.handleFullName}
              />
            </a>
          </li>
        </ul>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFullScreen: state.isFullScreen,
    rtlLayout: state.rtlLayout,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFullScreen: () => dispatch({ type: actionTypes.FULL_SCREEN }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(windowSize(NavLeft));

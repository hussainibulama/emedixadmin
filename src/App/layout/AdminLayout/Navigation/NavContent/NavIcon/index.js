import React from "react";

const navIcon = (props) => {
  let navIcons = false;
  if (props.items.icon) {
    navIcons = (
      <span className="pcoded-micon">
        <i> {props.items.icon} </i>
      </span>
    );
  }
  return navIcons;
};

export default navIcon;

import React from "react";

const Buttons = (props) => {
  return (
    <div className="otherfielder">
      <button
        disabled={props.disabled}
        name={props.name}
        onClick={props.onClick}
      >
        {" "}
        {props.value}{" "}
      </button>
    </div>
  );
};
export default Buttons;

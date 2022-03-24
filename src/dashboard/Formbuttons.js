import React from "react";

const Button = (props) => {
  return (
    <div className="fielder">
      <button
        name={props.name}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {" "}
        {props.value}{" "}
      </button>
    </div>
  );
};
export default Button;

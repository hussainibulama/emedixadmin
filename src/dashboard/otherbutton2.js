import React from "react";

const Button = (props) => {
  return (
    <div className="otherfielder2">
      <button name={props.name} onClick={props.onClick}>
        {props.value}{" "}
      </button>
    </div>
  );
};
export default Button;

import React from "react";

const Modal = (props) => {
  const divStyle = {
    display: props.displayModal ? "block" : "none",
  };
  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }

  return (
    <div className="modal" onClick={closeModal} style={divStyle}>
      {" "}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {" "}
        <span className="close" onClick={closeModal}>
          &times;
        </span>{" "}
        <div className="contentent" style={{ margin: "0 auto", width: "90%" }}>
          <div className="Predesc">
            <div className="psuc">
              <h3>Payment successful. Thanks for shopping with us</h3>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
export default Modal;

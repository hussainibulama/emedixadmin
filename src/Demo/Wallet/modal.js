import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Buttons from "../../dashboard/otherbutton";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";

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
        <div className="contentent" style={{ margin: "0 auto", width: "60%" }}>
          <p style={{ color: "#000000" }}> {props.message}</p>
          <Form onSubmit={props.onSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>{props.doing}</Form.Label>
              <Form.Control
                type="password"
                pattern="[0-9]{4}"
                size="4"
                required
                name="store_wallet_pin"
                value={props.store_wallet_pin ? props.store_wallet_pin : ""}
                onChange={props.onChange}
                placeholder="e.g 1971"
              />
            </Form.Group>

            <Buttons
              disabled={props.loading}
              name={"Login"}
              onClick={props.onClick}
              value={
                <>
                  {props.loading && (
                    <FontAwesomeIcon
                      style={{ position: "relative", top: "0px" }}
                      icon={faSpinner}
                      spin
                    />
                  )}{" "}
                  {!props.loading && <> {props.value}</>}
                </>
              }
            />
          </Form>
        </div>
      </div>{" "}
    </div>
  );
};
export default Modal;

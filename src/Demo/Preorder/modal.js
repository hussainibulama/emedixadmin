import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Buttons from "../../dashboard/otherbutton";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Form, FormControl, InputGroup } from "react-bootstrap";

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
              <Form.Label>Preorder Link Username</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon3">
                    swip.ng/preorder/
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  name="pre_username"
                  value={props.pre_username ? props.pre_username : ""}
                  onChange={props.onChange}
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Preorder expires in:</Form.Label>
              <Form.Control
                type="date"
                name="expire"
                value={props.expire ? props.expire : ""}
                onChange={props.onChange}
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
                  {!props.loading && <> Create Preorder</>}
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

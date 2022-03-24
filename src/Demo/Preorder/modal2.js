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
          <div style={{ lineHeight: "30px", marginLeft: "10px" }}>
            {" "}
            Uplaod images for {props.image_name}
          </div>
          <Form onSubmit={props.onSubmit}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <input
                style={{
                  position: "relative",
                  left: "0",
                  marginLeft: "-8px",
                }}
                onChange={props.singleFileChangedHandler}
                type="file"
                name="file"
              />
            </Form.Group>

            <Buttons
              onClick={props.singleFileUploadHandler}
              value={
                <>
                  {props.loading && (
                    <FontAwesomeIcon
                      style={{ position: "relative", top: "0px" }}
                      icon={faSpinner}
                      spin
                    />
                  )}{" "}
                  {!props.loading && <> Upload Image</>}
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

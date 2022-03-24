import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Buttons from "../../dashboard/otherbutton";
import instance from "../../authaxios";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import { Link } from "react-router-dom";

class BasicButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      discount_code: "",
      discount_type: "",
      discount_value: "",
      expire: "",
      results: [],
    };
  }
  handleform(e) {
    e.preventDefault();
  }

  setInputValue(property, e) {
    this.setState({
      [property]: e,
    });
  }
  async componentDidMount() {
    try {
      let res = await instance.post("/discounthistoryspecific", {
        update_id: this.props.update_id,
      });

      const results = await res.data;
      this.setState({ results });
      this.state.results.map((result, index) =>
        this.setState({
          discount_code: result.discount_code,
          discount_type: result.discount_type,
          discount_value: result.discount_value,
          expire: result.expire,
        })
      );
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <Card
              title={
                <div className="scaleto">
                  <div className="backer">
                    <Link onClick={this.props.onClick}>
                      <FontAwesomeIcon
                        style={{ fontSize: "20px", color: "#000000" }}
                        icon={faArrowLeft}
                      />
                    </Link>
                  </div>{" "}
                  <div style={{ lineHeight: "30px", marginLeft: "10px" }}>
                    {" "}
                    Edit Discount Record
                  </div>
                </div>
              }
            >
              <Row>
                <Col md={8}>
                  <div className="smallcards" style={{ height: "100%" }}>
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>
                          Discount Code {this.props.update_id}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          value={
                            this.state.discount_code
                              ? this.state.discount_code
                              : ""
                          }
                          onChange={(e) =>
                            this.setInputValue("discount_code", e.target.value)
                          }
                          placeholder="DST101, XSMNFT, 112DST, ABUJA101"
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Discount Type</Form.Label>
                        <Form.Control
                          onChange={(e) =>
                            this.setInputValue("discount_type", e.target.value)
                          }
                          as="select"
                          defaultValue="Choose..."
                        >
                          <option>
                            {this.state.discount_type
                              ? this.state.discount_type
                              : ""}
                          </option>
                          <option>Percentage</option>
                          <option>Amount</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Discount Value</Form.Label>
                        <Form.Control
                          type="text"
                          value={
                            this.state.discount_value
                              ? this.state.discount_value
                              : ""
                          }
                          onChange={(e) =>
                            this.setInputValue("discount_value", e.target.value)
                          }
                          placeholder="like 200 if amount or 2% if percent"
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Discount Expiring Date</Form.Label>
                        <Form.Control
                          value={this.state.expire ? this.state.expire : ""}
                          onChange={(e) =>
                            this.setInputValue("expire", e.target.value)
                          }
                          type="date"
                          required
                          placeholder="Expiring date"
                        />
                      </Form.Group>

                      <Link
                        style={{
                          position: "relative",
                          lineHeight: "2.5em",
                        }}
                      >
                        <Buttons
                          name={"Login"}
                          value={"Save Product"}
                          placeholder={"Enter your name"}
                          handleChange={this.handleFullName}
                        />
                      </Link>
                    </Form>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default BasicButton;

import React from "react";
import { Row, Col, Form } from "react-bootstrap";

import instance from "../../authaxios";
import Error from "../../dashboard/errmessage";
import Good from "../../dashboard/goodmessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Buttons from "../../dashboard/otherbutton";
import { faArrowLeft, faSpinner } from "@fortawesome/free-solid-svg-icons";

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
      error: false,
      errmsg: null,
      good: false,
      gmsg: null,
      loading: false,
    };
  }
  handleSubmit(e) {
    e.preventDefault();
  }

  resetForm() {
    this.setState({
      discount_code: "",
      discount_type: "",
      discount_value: "",
      expire: "",
    });
  }
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  async CreateDiscount() {
    this.setState({ loading: true });
    if (
      this.state.discount_code !== "" &&
      this.state.discount_type !== "" &&
      this.state.discount_value !== "" &&
      this.state.expire !== ""
    ) {
      try {
        let store_id = localStorage.getItem("store_id");
        let res = await instance.post("/discount", {
          store_id: store_id,
          discount_code: this.state.discount_code,
          discount_type: this.state.discount_type,
          discount_value: this.state.discount_value,
          expire: this.state.expire,
        });

        let result = await res.data;

        if (result && result.success) {
          this.setState({ loading: false });
          this.resetForm();
          this.setState({ gmsg: result.msg });
          this.setState({ good: true });
          this.setState({ error: false });
        } else if (result && result.success === false) {
          this.setState({ loading: false });
          this.setState({ errmsg: result.msg });
          this.setState({ error: true });
          this.setState({ good: false });
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      this.setState({ loading: false });
      this.setState({ errmsg: "Please Fill out your form Correctly" });
      this.setState({ error: true });
    }
  }
  render() {
    const { loading, error, errmsg, good, gmsg } = this.state;
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
                    Create Discount
                  </div>
                </div>
              }
            >
              <Row>
                <Col md={8}>
                  {error && <Error msg={errmsg} />}
                  {good && <Good msg={gmsg} />}
                  <div className="smallcards" style={{ height: "100%" }}>
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Discount Code</Form.Label>
                        <Form.Control
                          type="text"
                          required
                          name="discount_code"
                          value={
                            this.state.discount_code
                              ? this.state.discount_code
                              : ""
                          }
                          onChange={this.handleChange}
                          placeholder="DST101, XSMNFT, 112DST, ABUJA101"
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Discount Type</Form.Label>
                        <Form.Control
                          name="discount_type"
                          value={
                            this.state.discount_type
                              ? this.state.discount_type
                              : ""
                          }
                          onChange={this.handleChange}
                          as="select"
                          required
                          defaultValue="Choose..."
                        >
                          <option></option>
                          <option>Percentage</option>
                          <option>Amount</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Discount Value</Form.Label>
                        <Form.Control
                          type="text"
                          name="discount_value"
                          value={
                            this.state.discount_value
                              ? this.state.discount_value
                              : ""
                          }
                          onChange={this.handleChange}
                          required
                          placeholder="like 200 if amount or 2% if percent"
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Discount Expiring Date</Form.Label>
                        <Form.Control
                          name="expire"
                          onChange={this.handleChange}
                          type="date"
                          required
                          placeholder="Expiring date"
                        />
                      </Form.Group>

                      <Buttons
                        disabled={this.state.loading}
                        name={"Login"}
                        onClick={() => this.CreateDiscount()}
                        value={
                          <>
                            {loading && (
                              <FontAwesomeIcon
                                style={{ position: "relative", top: "0px" }}
                                icon={faSpinner}
                                spin
                              />
                            )}{" "}
                            {!loading && <> Create Discount</>}
                          </>
                        }
                      />
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

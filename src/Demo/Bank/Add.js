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
      store_acc_name: "",
      store_bank_name: "",
      store_acc_no: "",
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
  async componentDidMount() {
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/displaybank", {
        store_id: store_id,
      });

      let result = await res.data;
      if (result && result.success) {
        this.setState({
          store_acc_name: result.store_acc_name,
          store_bank_name: result.store_bank_name,
          store_acc_no: result.store_acc_no,
          expire: result.expire,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
  resetForm() {
    this.setState({
      store_acc_name: "",
      store_bank_name: "",
      store_acc_no: "",
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
      this.state.store_acc_name !== "" &&
      this.state.store_bank_name !== "" &&
      this.state.store_acc_no !== ""
    ) {
      try {
        let store_id = localStorage.getItem("store_id");
        let res = await instance.post("/updatebank", {
          store_id: store_id,
          store_acc_name: this.state.store_acc_name,
          store_bank_name: this.state.store_bank_name,
          store_acc_no: this.state.store_acc_no,
        });

        let result = await res.data;

        if (result && result.success) {
          this.setState({ loading: false });
          this.setState({ gmsg: result.msg });
          this.setState({ good: true });
          this.setState({ error: false });
          try {
            let store_id = localStorage.getItem("store_id");
            let res = await instance.post("/displaybank", {
              store_id: store_id,
            });

            let result = await res.data;
            if (result && result.success) {
              this.setState({
                store_acc_name: result.store_acc_name,
                store_bank_name: result.store_bank_name,
                store_acc_no: result.store_acc_no,
              });
            }
          } catch (e) {
            console.log(e);
          }
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
                    {this.props.info}
                  </div>
                </div>
              }
            >
              <Row>
                <Col md={8}>
                  {error && <Error msg={errmsg} />}
                  {good && <Good msg={gmsg} />}
                  <div className="smallcards">
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Account Name</Form.Label>
                        <Form.Control
                          type="text"
                          required
                          name="store_acc_name"
                          value={
                            this.state.store_acc_name
                              ? this.state.store_acc_name
                              : ""
                          }
                          onChange={this.handleChange}
                          placeholder="Lightweb Technology Limited"
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Bank Name</Form.Label>
                        <Form.Control
                          type="text"
                          required
                          name="store_bank_name"
                          value={
                            this.state.store_bank_name
                              ? this.state.store_bank_name
                              : ""
                          }
                          onChange={this.handleChange}
                          placeholder="Guaranty Trust Bank"
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Account No</Form.Label>
                        <Form.Control
                          type="number"
                          name="store_acc_no"
                          pattern={([0 - 9], 10)}
                          value={
                            this.state.store_acc_no
                              ? this.state.store_acc_no
                              : ""
                          }
                          onChange={this.handleChange}
                          required
                          placeholder="0449797541"
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
                            {!loading && <> {this.props.info}</>}
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

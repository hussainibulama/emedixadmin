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
      name: "",
      username: "",
      password: "",

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
      name: "",
      username: "",
      password: "",
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
      this.state.name !== "" &&
      this.state.username !== "" &&
      this.state.password !== ""
    ) {
      try {
        let store_id = localStorage.getItem("store_id");
        let res = await instance.post("/addusers", {
          store_id: store_id,
          name: this.state.name,
          username: this.state.username,
          password: this.state.password,
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
                    Create User
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
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          required
                          name="name"
                          value={this.state.name ? this.state.name : ""}
                          onChange={this.handleChange}
                          placeholder="Hussaini Bulama"
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                          type="text"
                          required
                          value={this.state.username ? this.state.username : ""}
                          name="username"
                          onChange={this.handleChange}
                          placeholder="bulama"
                        />
                      </Form.Group>

                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          value={this.state.password ? this.state.password : ""}
                          onChange={this.handleChange}
                          required
                          placeholder="Password"
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
                            {!loading && <> Create User</>}
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

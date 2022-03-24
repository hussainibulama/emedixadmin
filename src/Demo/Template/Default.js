import React from "react";
import {
  Row,
  Col,
  Card as Cards,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import Buttons from "../../dashboard/otherbutton";
import today from "../../images/today.png";
import { Redirect } from "react-router-dom";
import Aux from "../../hoc/_Aux";
import instance from "../../authaxios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { Grid, Cell } from "react-mdl";
import { SketchPicker } from "react-color";
import Error from "../../dashboard/errmessage";
import Good from "../../dashboard/goodmessage";

class BasicButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewer: "no",
      view: "",
      error: false,
      errmsg: null,
      loading: false,
      good: false,
      gmsg: null,
      name: "",
      facebook: "",
      twitter: "",
      instagram: "",
      email: "",
      whatsapp: "",
      customize: false,
      update_id: "",
      delete_id: "",
      results: [],
      background: "",
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  handleSubmit(e) {
    e.preventDefault();
  }
  async Socials() {
    this.setState({ loading: true });
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/socials", {
        store_id: store_id,
        facebook: this.state.facebook,
        instagram: this.state.instagram,
        twitter: this.state.twitter,
        whatsapp: this.state.whatsapp,
        mail: this.state.email,
      });

      let result = await res.data;

      if (result && result.success) {
        this.setState({ gmsg: result.msg });
        this.setState({ good: true });
        this.setState({ error: false });
        this.setState({ loading: false });
      } else if (result && result.success === false) {
        this.setState({ errmsg: result.msg });
        this.setState({ error: true });
        this.setState({ good: false });
        this.setState({ loading: false });
      }
    } catch (e) {
      this.setState({ loading: false });
      console.log(e);
    }
  }
  async componentDidMount() {
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/selectbg", {
        store_id: store_id,
      });

      let result = await res.data;

      if (result && result.success) {
        this.setState({ background: result.bg, name: result.name });
      }
    } catch (e) {
      console.log(e);
    }
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/selectsocials", {
        store_id: store_id,
      });

      let result = await res.data;

      if (result && result.success) {
        this.setState({
          facebook: result.facebook,
          twitter: result.twitter,
          instagram: result.instagram,
          whatsapp: result.whatsapp,
          email: result.email,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
  async refresh() {
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/selectbg", {
        store_id: store_id,
      });

      let result = await res.data;

      if (result && result.success) {
        this.setState({ background: result.bg, name: result.name });
      }
    } catch (e) {
      console.log(e);
    }
  }

  async createAdd() {
    this.setState({ view: "add" });
  }
  async customize() {
    if (this.state.customize === true) {
      this.setState({ customize: false });
    } else if (this.state.customize === false) {
      this.setState({ customize: true });
    }
  }
  async selecttemplate(name) {
    this.setState({ loading: true });
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/currentemplate", {
        store_id: store_id,
        name: name,
      });

      const result = await res.data;
      if (result && result.success) {
        this.setState({ gmsg: result.msg, good: true, loading: false });
        this.refresh();
      }
    } catch (e) {
      console.log(e);
    }
  }

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
    try {
      let store_id = localStorage.getItem("store_id");
      let res = instance.post("/bgcolor", {
        store_id: store_id,
        background: this.state.background,
      });
      const result = res.data;
      this.setState({ gmsg: result.msg });
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    const { loading, customize, good, error } = this.state;
    let store_id = localStorage.getItem("store_id");
    if (store_id === null) {
      return <Redirect to="/auth/signin" />;
    } else {
      return (
        <Aux>
          <Row>
            <Col>
              <Cards>
                <Cards.Header>
                  <Cards.Title as="h5">Templates </Cards.Title>
                </Cards.Header>
                <Cards.Body>
                  {good && <Good msg={this.state.gmsg} />}
                  {error && <Error msg={this.state.errmsg} />}
                  <div className="templates">
                    <div className="template">
                      <div>
                        <img src={today} alt="default template" />
                      </div>
                      <div>
                        <span> Free Template</span>
                      </div>
                      <div>
                        {String(this.state.name) !== "default" && (
                          <button
                            onClick={() => this.selecttemplate("default")}
                          >
                            {" "}
                            {loading && (
                              <FontAwesomeIcon
                                style={{ position: "relative", top: "0px" }}
                                icon={faSpinner}
                                spin
                              />
                            )}{" "}
                            {!loading && <> Select</>}
                          </button>
                        )}
                        {String(this.state.name) === "default" && (
                          <button>Selected</button>
                        )}

                        <button onClick={() => this.customize()}>
                          {customize && (
                            <>
                              Customize{" "}
                              <FontAwesomeIcon
                                style={{ position: "relative", top: "0px" }}
                                icon={faArrowAltCircleDown}
                              />
                            </>
                          )}
                          {!customize && (
                            <>
                              Customize{" "}
                              <FontAwesomeIcon
                                style={{ position: "relative", top: "0px" }}
                                icon={faArrowAltCircleUp}
                              />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </Cards.Body>
              </Cards>
              {customize && (
                <Cards>
                  <Cards.Header>
                    <Cards.Title as="h5">Customize Template </Cards.Title>
                  </Cards.Header>
                  <Cards.Body>
                    <div className="customize">
                      <Grid>
                        <Cell col={6}>
                          <div
                            className="customize-body"
                            style={{ background: this.state.background }}
                          >
                            <div>
                              <h6>{localStorage.getItem("username")}</h6>
                            </div>
                            <br></br>
                            <div className="poper"></div>
                          </div>
                        </Cell>
                        <Cell col={6}>
                          <div className="color-changer">
                            <SketchPicker
                              color={this.state.background}
                              onChangeComplete={this.handleChangeComplete}
                            />
                          </div>
                        </Cell>

                        <Cell col={12}>
                          <Form onSubmit={this.handleSubmit}>
                            <Grid>
                              <Cell col={6}>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>
                                    Instagram Business account
                                  </Form.Label>
                                  <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                      <InputGroup.Text id="basic-addon3">
                                        https://instagram.com/
                                      </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                      name="instagram"
                                      id="basic-url"
                                      value={
                                        this.state.instagram
                                          ? this.state.instagram
                                          : ""
                                      }
                                      onChange={this.handleChange}
                                      aria-describedby="basic-addon3"
                                    />
                                  </InputGroup>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>
                                    Facebook Business account
                                  </Form.Label>
                                  <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                      <InputGroup.Text id="basic-addon3">
                                        https://facebook.com/
                                      </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                      name="facebook"
                                      id="basic-url"
                                      value={
                                        this.state.facebook
                                          ? this.state.facebook
                                          : ""
                                      }
                                      onChange={this.handleChange}
                                      aria-describedby="basic-addon3"
                                    />
                                  </InputGroup>
                                </Form.Group>
                              </Cell>
                              <Cell col={6}>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>
                                    Twitter Business account
                                  </Form.Label>
                                  <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                      <InputGroup.Text id="basic-addon3">
                                        https://twitter.com/
                                      </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                      name="twitter"
                                      id="basic-url"
                                      value={
                                        this.state.twitter
                                          ? this.state.twitter
                                          : ""
                                      }
                                      onChange={this.handleChange}
                                      aria-describedby="basic-addon3"
                                    />
                                  </InputGroup>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>
                                    Whatsapp Business Phone no.
                                  </Form.Label>
                                  <Form.Control
                                    type="number"
                                    name="whatsapp"
                                    value={
                                      this.state.whatsapp
                                        ? this.state.whatsapp
                                        : ""
                                    }
                                    onChange={this.handleChange}
                                    placeholder="e.g 08136668344"
                                  />
                                </Form.Group>
                              </Cell>
                              <Cell col={6}>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>
                                    Email Business account
                                  </Form.Label>
                                  <Form.Control
                                    type="email"
                                    name="email"
                                    value={
                                      this.state.email ? this.state.email : ""
                                    }
                                    onChange={this.handleChange}
                                    placeholder="e.g hello@swip.ng"
                                  />
                                </Form.Group>
                                <Buttons
                                  name={"Login"}
                                  disabled={this.state.loading}
                                  onClick={() => this.Socials()}
                                  value={
                                    <>
                                      {this.state.loading && (
                                        <FontAwesomeIcon
                                          style={{
                                            position: "relative",
                                            top: "0px",
                                          }}
                                          icon={faSpinner}
                                          spin
                                        />
                                      )}{" "}
                                      {!this.state.loading && (
                                        <> Update Record</>
                                      )}
                                    </>
                                  }
                                />
                              </Cell>
                            </Grid>
                          </Form>
                        </Cell>
                      </Grid>
                    </div>
                  </Cards.Body>
                </Cards>
              )}
            </Col>
          </Row>
        </Aux>
      );
    }
  }
}
document.title = "Users | " + localStorage.getItem("username");
export default BasicButton;

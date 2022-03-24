import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import Buttons from "../../dashboard/otherbutton";
import instance from "../../authaxios";
import instances from "../../authaxios";
import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Error from "../../dashboard/errmessage";
import Good from "../../dashboard/goodmessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect } from "react-router-dom";
class BasicButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store_username: "",
      store_name: "",
      store_address: "",
      store_phone_no: "",
      store_logo: null,
      store_state: "",
      store_description: "",
      brief_description: "",
      delivery: "",
      delivery_fee: "",
      error: false,
      errmsg: null,
      good: false,
      gmsg: null,
      loading: false,
      loader: false,
      selectedFile: null,
    };
  }
  singleFileChangedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };
  singleFileUploadHandler = () => {
    const data = new FormData(); // If file selected
    this.setState({
      loader: true,
    });
    if (this.state.selectedFile) {
      data.append(
        "profileImage",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      let store_id = localStorage.getItem("store_id");
      instances
        .post("uploadlogo/" + store_id, data, {
          headers: {
            boundary: data._boundary,
          },
        })
        .then((response) => {
          if (200 === response.status) {
            // If file size is larger than expected.

            if (response.data.success === false) {
              this.setState({ errmsg: response.data.msg });
              this.setState({ error: true, loader: false });
              this.setState({ good: false });
            } else if (response.data.success === true) {
              // Success
              this.setState({ gmsg: response.data.msg });
              this.refresh();
              this.setState({ good: true, loader: false });
              this.setState({ error: false });
            }
          }
        })
        .catch((error) => {
          // If another error
          console.log(error);
        });
    } else {
      // if file not selected throw error
      this.setState({ errmsg: "No file selected, please upload a file" });
      this.setState({ error: true });
      this.setState({ good: false, loader: false });
    }
  };

  handleSubmit(e) {
    e.preventDefault();
  }
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  async refresh() {
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/selectprofile", {
        store_id: store_id,
      });

      let result = await res.data;
      if (result && result.success) {
        this.setState({
          store_username: result.store_username,
          store_name: result.store_name,
          store_address: result.store_address,
          store_phone_no: result.store_phone_no,
          store_logo: result.store_logo,
          store_state: result.store_state,
          brief_description: result.brief_description,
          store_description: result.store_description,
          delivery: result.delivery,
          delivery_fee: 0 + parseInt(result.delivery_fee),
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
  async componentDidMount() {
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/selectprofile", {
        store_id: store_id,
      });

      let result = await res.data;
      if (result && result.success) {
        this.setState({
          store_username: result.store_username,
          store_name: result.store_name,
          store_address: result.store_address,
          store_phone_no: result.store_phone_no,
          store_logo: result.store_logo,
          store_state: result.store_state,
          brief_description: result.brief_description,
          store_description: result.store_description,
          delivery: result.delivery,
          delivery_fee: 0 + parseInt(result.delivery_fee),
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
  async UpdateProfile() {
    this.setState({ loading: true });
    if (
      this.state.store_name !== "" &&
      this.state.store_address !== "" &&
      this.state.store_phone_no !== "" &&
      this.state.store_description !== "" &&
      this.state.delivery !== "" &&
      this.state.delivery_fees !== ""
    ) {
      if (this.state.delivery === "no") {
        try {
          let store_id = localStorage.getItem("store_id");
          let res = await instance.post("/updateprofile", {
            store_id: store_id,
            store_name: this.state.store_name,
            brief_description: this.state.brief_description,
            store_description: this.state.store_description,
            store_state: this.state.store_state,
            delivery: this.state.delivery,
            delivery_fee: 0,
            store_address: this.state.store_address,
            store_phone_no: this.state.store_phone_no,
          });

          let result = await res.data;

          if (result && result.success) {
            this.setState({ loading: false });
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
        try {
          let store_id = localStorage.getItem("store_id");
          let res = await instance.post("/updateprofile", {
            store_id: store_id,
            store_name: this.state.store_name,
            brief_description: this.state.brief_description,
            store_description: this.state.store_description,
            store_state: this.state.store_state,
            delivery: this.state.delivery,
            delivery_fee: 0 + parseInt(this.state.delivery_fee),
            store_address: this.state.store_address,
            store_phone_no: this.state.store_phone_no,
          });

          let result = await res.data;

          if (result && result.success) {
            this.setState({ loading: false });
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
      }
    } else {
      this.setState({ loading: false });
      this.setState({ errmsg: "Please Fill out your form Correctly" });
      this.setState({ error: true });
    }
  }
  render() {
    const { loading, loader, error, errmsg, good, gmsg } = this.state;
    let store_id = localStorage.getItem("store_id");
    if (store_id === null) {
      return <Redirect to="/auth/signin" />;
    } else {
      return (
        <Aux>
          <Row>
            <Col>
              <Card title="Profile">
                {error && <Error msg={errmsg} />}
                {good && <Good msg={gmsg} />}
                <Row>
                  <Col md={8}>
                    <div style={{ height: "100% !important" }}>
                      <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Store Username</Form.Label>
                          <Form.Control
                            type="email"
                            disabled
                            value={
                              this.state.store_username
                                ? this.state.store_username
                                : ""
                            }
                          />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Store Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="store_name"
                            value={
                              this.state.store_name ? this.state.store_name : ""
                            }
                            onChange={this.handleChange}
                            placeholder="Chef Teemama Store"
                          />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Store Location</Form.Label>
                          <Form.Control
                            name="store_state"
                            as="select"
                            onChange={this.handleChange}
                          >
                            <option>
                              {this.state.store_state
                                ? this.state.store_state
                                : ""}
                            </option>
                            <option value="Abia">Abia</option>
                            <option value="Adamawa">Adamawa</option>
                            <option value="Akwa Ibom">Akwa Ibom</option>
                            <option value="Anambra">Anambra</option>
                            <option value="Bauchi">Bauchi</option>
                            <option value="Bayelsa">Bayelsa</option>
                            <option value="Benue">Benue</option>
                            <option value="Borno">Borno</option>
                            <option value="Cross Rive">Cross River</option>
                            <option value="Delta">Delta</option>
                            <option value="Ebonyi">Ebonyi</option>
                            <option value="Edo">Edo</option>
                            <option value="Ekiti">Ekiti</option>
                            <option value="Enugu">Enugu</option>
                            <option value="FCT">
                              Federal Capital Territory
                            </option>
                            <option value="Gombe">Gombe</option>
                            <option value="Imo">Imo</option>
                            <option value="Jigawa">Jigawa</option>
                            <option value="Kaduna">Kaduna</option>
                            <option value="Kano">Kano</option>
                            <option value="Katsina">Katsina</option>
                            <option value="Kebbi">Kebbi</option>
                            <option value="Kogi">Kogi</option>
                            <option value="Kwara">Kwara</option>
                            <option value="Lagos">Lagos</option>
                            <option value="Nasarawa">Nasarawa</option>
                            <option value="Niger">Niger</option>
                            <option value="Ogun">Ogun</option>
                            <option value="Ondo">Ondo</option>
                            <option value="Osun">Osun</option>
                            <option value="Oyo">Oyo</option>
                            <option value="Plateau">Plateau</option>
                            <option value="Rivers">Rivers</option>
                            <option value="Sokoto">Sokoto</option>
                            <option value="Taraba">Taraba</option>
                            <option value="Yobe">Yobe</option>
                            <option value="Zamfara">Zamfara</option>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Contact No</Form.Label>
                          <Form.Control
                            value={
                              this.state.store_phone_no
                                ? this.state.store_phone_no
                                : ""
                            }
                            onChange={this.handleChange}
                            name="store_phone_no"
                            type="number"
                            placeholder="08136668344"
                          />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Label>
                            Brief Description{" "}
                            <small>
                              This box only accept text or coma (,), all other
                              punctuations are not accepted{" "}
                            </small>
                          </Form.Label>

                          <Form.Control
                            value={
                              this.state.brief_description
                                ? this.state.brief_description
                                : ""
                            }
                            onChange={this.handleChange}
                            name="brief_description"
                            as="textarea"
                            rows="4"
                          />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Label>
                            Store Description{" "}
                            <small>
                              This box only accept text or coma (,), all other
                              punctuations are not accepted{" "}
                            </small>
                          </Form.Label>

                          <Form.Control
                            value={
                              this.state.store_description
                                ? this.state.store_description
                                : ""
                            }
                            onChange={this.handleChange}
                            name="store_description"
                            as="textarea"
                            rows="4"
                          />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Do you accept deliveries?</Form.Label>
                          <Form.Control
                            name="delivery"
                            as="select"
                            onChange={this.handleChange}
                          >
                            <option>
                              {this.state.delivery ? this.state.delivery : ""}
                            </option>
                            <option>yes</option>
                            <option>no</option>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>
                            if yes ? Constant Delivery fee
                          </Form.Label>
                          <Form.Control
                            value={
                              this.state.delivery_fee
                                ? this.state.delivery_fee
                                : ""
                            }
                            onChange={this.handleChange}
                            name="delivery_fee"
                            type="number"
                            placeholder="e.g 1000"
                          />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Contact Address</Form.Label>
                          <Form.Control
                            value={
                              this.state.store_address
                                ? this.state.store_address
                                : ""
                            }
                            onChange={this.handleChange}
                            name="store_address"
                            as="textarea"
                            rows="4"
                          />
                        </Form.Group>

                        <Buttons
                          name={"Login"}
                          disabled={this.state.loading}
                          value={
                            <>
                              {loading && (
                                <FontAwesomeIcon
                                  style={{ position: "relative", top: "0px" }}
                                  icon={faSpinner}
                                  spin
                                />
                              )}{" "}
                              {!loading && <> Update Profile</>}
                            </>
                          }
                          onClick={() => this.UpdateProfile()}
                        />
                      </Form>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div
                      className="smallcards"
                      style={{ height: "100% !important" }}
                    >
                      <h5>Store Logo</h5>
                      {this.state.store_logo != null && (
                        <img
                          src={"" + this.state.store_logo}
                          height="80px"
                          alt={"" + this.state.store_logo}
                          width="80px"
                        />
                      )}
                      <Form
                        onSubmit={this.handleSubmit}
                        style={{ position: "relative", top: "2em" }}
                      >
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <input
                            style={{
                              position: "relative",
                              left: "0",
                              marginLeft: "-8px",
                            }}
                            onChange={this.singleFileChangedHandler}
                            type="file"
                            name="file"
                          />
                        </Form.Group>

                        <Buttons
                          disabled={this.state.loader}
                          onClick={this.singleFileUploadHandler}
                          value={
                            <>
                              {loader && (
                                <FontAwesomeIcon
                                  style={{ position: "relative", top: "0px" }}
                                  icon={faSpinner}
                                  spin
                                />
                              )}{" "}
                              {!loader && <> Upload Image</>}
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
}
document.title = "Profile | " + localStorage.getItem("username");
export default BasicButton;

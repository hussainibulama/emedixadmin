import React from "react";
import { Row, Col, Form, FormControl, InputGroup } from "react-bootstrap";
import Error from "../../dashboard/errmessage";
import Good from "../../dashboard/goodmessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Buttons from "../../dashboard/otherbutton";
import { faArrowLeft, faSpinner } from "@fortawesome/free-solid-svg-icons";
import instance from "../../authaxios";
import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import { Link } from "react-router-dom";

class BasicButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      p_title: "",
      p_description: "",
      p_price: "",
      p_cprice: "",
      p_cpu: "",
      p_sku: "",
      p_quantity: "",
      p_status: "",
      p_category: "",
      error: false,
      errmsg: null,
      good: false,
      loading: false,
      gmsg: null,
      update_id: props.update_id,
      updateneed: props.updateneed,

      results: [],
      resultss: [],
    };
  }

  async componentDidMount() {
    if (this.state.updateneed) {
      try {
        let res = await instance.post("/selectsproduct", {
          p_id: this.state.update_id,
        });

        let result = await res.data;

        this.setState({
          p_title: result.p_title,
          p_description: result.p_description,
          p_price: result.p_price,
          p_cprice: result.p_cprice,
          p_cpu: result.p_cpu,
          p_sku: result.p_sku,
          p_quantity: result.p_quantity,
          p_status: result.p_status,
          p_category: result.p_category,
        });
      } catch (e) {
        console.log(e);
      }
    }
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/selectcategory", {
        store_id: store_id,
      });

      const resultss = await res.data;
      this.setState({ resultss });
    } catch (e) {
      console.log(e);
    }
  }
  async addProduct() {
    this.setState({ loading: true });
    if (
      this.state.p_title !== "" &&
      this.state.p_description !== "" &&
      this.state.p_price !== "" &&
      this.state.p_quantity !== "" &&
      this.state.p_status !== ""
    ) {
      try {
        let store_id = localStorage.getItem("store_id");
        let res = await instance.post("/addproduct", {
          store_id: store_id,
          p_title: this.state.p_title,
          p_description: this.state.p_description,
          p_price: this.state.p_price,
          p_cprice: this.state.p_cprice,
          p_cpu: this.state.p_cpu,
          p_sku: this.state.p_sku,
          p_quantity: this.state.p_quantity,
          p_status: this.state.p_status,
          p_category: this.state.p_category,
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
  async updateProduct() {
    this.setState({ loading: true });

    try {
      let res = await instance.post("/updateproduct", {
        p_id: this.state.update_id,
        p_title: this.state.p_title,
        p_description: this.state.p_description,
        p_price: this.state.p_price,
        p_cprice: this.state.p_cprice,
        p_cpu: this.state.p_cpu,
        p_sku: this.state.p_sku,
        p_quantity: this.state.p_quantity,
        p_status: this.state.p_status,
        p_category: this.state.p_category,
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
  resetForm() {
    this.setState({
      p_title: "",
      p_description: "",
      p_price: "",
      p_cprice: "",
      p_cpu: "",
      p_sku: "",
      p_quantity: "",
      p_status: "",
    });
  }
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    const { loading, updateneed, errmsg, error, good, gmsg } = this.state;
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
                    {this.props.head}
                  </div>
                </div>
              }
            >
              {error && <Error msg={errmsg} />}
              {good && <Good msg={gmsg} />}
              <Row>
                <Col md={8}>
                  <Form onSubmit={this.handleSubmit}>
                    <div className="smallcards">
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                          type="text"
                          name="p_title"
                          value={this.state.p_title ? this.state.p_title : ""}
                          onChange={this.handleChange}
                          placeholder="Long Sleeve T shirt"
                        />
                      </Form.Group>

                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>
                          Description{" "}
                          <small>
                            This box only accept text or coma (,), all other
                            punctuations are not accepted{" "}
                          </small>
                        </Form.Label>
                        <Form.Control
                          name="p_description"
                          value={
                            this.state.p_description
                              ? this.state.p_description
                              : ""
                          }
                          onChange={this.handleChange}
                          as="textarea"
                          rows="10"
                        />
                      </Form.Group>
                    </div>

                    <div className="smallcards">
                      <h5>Pricing</h5>
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Price</Form.Label>
                            <InputGroup className="mb-3">
                              <InputGroup.Prepend>
                                <InputGroup.Text>&#8358;</InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl
                                name="p_price"
                                value={
                                  this.state.p_price ? this.state.p_price : ""
                                }
                                onChange={this.handleChange}
                              />
                              <InputGroup.Append>
                                <InputGroup.Text>.00</InputGroup.Text>
                              </InputGroup.Append>
                            </InputGroup>
                          </Form.Group>
                        </Col>

                        <Col md={6}>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Compare Price (Promo)</Form.Label>
                            <InputGroup className="mb-3">
                              <InputGroup.Prepend>
                                <InputGroup.Text>&#8358;</InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl
                                name="p_cprice"
                                value={
                                  this.state.p_cprice ? this.state.p_cprice : ""
                                }
                                onChange={this.handleChange}
                              />
                              <InputGroup.Append>
                                <InputGroup.Text>.00</InputGroup.Text>
                              </InputGroup.Append>
                            </InputGroup>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Cost Per Unit</Form.Label>
                            <InputGroup className="mb-3">
                              <InputGroup.Prepend>
                                <InputGroup.Text>&#8358;</InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl
                                name="p_cpu"
                                value={this.state.p_cpu ? this.state.p_cpu : ""}
                                onChange={this.handleChange}
                              />
                              <InputGroup.Append>
                                <InputGroup.Text>.00</InputGroup.Text>
                              </InputGroup.Append>
                            </InputGroup>
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>
                    <div className="smallcards">
                      <h5>Inventory</h5>
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Stock Keeping Unit (SKU)</Form.Label>
                            <Form.Control
                              type="text"
                              name="p_sku"
                              value={this.state.p_sku ? this.state.p_sku : ""}
                              onChange={this.handleChange}
                              placeholder="Long sleev t-shirt"
                            />
                          </Form.Group>
                        </Col>

                        <Col md={6}>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                              type="number"
                              name="p_quantity"
                              value={
                                this.state.p_quantity
                                  ? this.state.p_quantity
                                  : ""
                              }
                              onChange={this.handleChange}
                              placeholder="e.g 99"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>
                  </Form>
                </Col>
                <Col md={4}>
                  <div className="smallcards">
                    <h5>Product Status</h5>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Status</Form.Label>
                      <Form.Control
                        name="p_status"
                        as="select"
                        onChange={this.handleChange}
                        defaultValue="Choose..."
                      >
                        <option>
                          {this.state.p_status ? this.state.p_status : ""}
                        </option>
                        <option>Draft</option>
                        <option>Active</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Product Category</Form.Label>
                      <Form.Control
                        name="p_category"
                        as="select"
                        onChange={this.handleChange}
                        defaultValue="Choose..."
                      >
                        <option>
                          {this.state.p_category ? this.state.p_category : ""}
                        </option>
                        {this.state.resultss.map((result, index) => (
                          <option>{result.title}</option>
                        ))}
                      </Form.Control>
                    </Form.Group>

                    {updateneed === "true" && (
                      <Buttons
                        name={"Login"}
                        value={
                          <>
                            {loading && (
                              <FontAwesomeIcon
                                style={{ position: "relative", top: "0px" }}
                                icon={faSpinner}
                                spin
                              />
                            )}{" "}
                            {!loading && <> Update Product</>}
                          </>
                        }
                        onClick={() => this.updateProduct()}
                        placeholder={"Enter your name"}
                        handleChange={this.handleFullName}
                      />
                    )}
                    {updateneed === "false" && (
                      <Buttons
                        name={"Login"}
                        onClick={() => this.addProduct()}
                        value={
                          <>
                            {loading && (
                              <FontAwesomeIcon
                                style={{ position: "relative", top: "0px" }}
                                icon={faSpinner}
                                spin
                              />
                            )}{" "}
                            {!loading && <>Add Product</>}
                          </>
                        }
                        placeholder={"Enter your name"}
                        handleChange={this.handleFullName}
                      />
                    )}
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

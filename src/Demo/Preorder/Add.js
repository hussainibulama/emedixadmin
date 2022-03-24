import React from "react";
import {
  Row,
  Col,
  Form,
  FormControl,
  Card as Cards,
  Table,
  InputGroup,
} from "react-bootstrap";
import Error from "../../dashboard/errmessage";
import Good from "../../dashboard/goodmessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Buttons from "../../dashboard/otherbutton";
import {
  faArrowLeft,
  faSpinner,
  faTrashAlt,
  faPhotoVideo,
} from "@fortawesome/free-solid-svg-icons";
import instance from "../../authaxios";
import instances from "../../authaxios";
import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import { Link } from "react-router-dom";
import Modal from "./modal2";
class BasicButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preorder_id: this.props.preorder_id,
      results: [],
      item_name: "",
      item_price: "",
      loading: false,
      selectedFile: null,
      loader: false,
      modal: false,
      image_id: "",
      image_name: "",
      error: false,
      errmsg: null,
      good: false,
      gmsg: null,
    };
  }
  selectModal = (info) => {
    this.setState({ modal: !this.state.modal }); // true/false toggle
  };
  singleFileChangedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };
  singleFileUploadHandler = () => {
    const data = new FormData(); // If file selected
    this.setState({
      loading: true,
    });
    if (this.state.selectedFile) {
      data.append(
        "profileImage",
        this.state.selectedFile,
        this.state.selectedFile.name
      );

      instances
        .post("uploadpreorder/" + this.state.image_id, data, {
          headers: {
            boundary: data._boundary,
          },
        })
        .then((response) => {
          if (200 === response.status) {
            // If file size is larger than expected.
            if (response.data.success === false) {
              this.setState({ errmsg: response.data.msg });
              this.setState({ error: true, loading: false, modal: false });

              this.setState({ good: false });
            } else {
              // Success
              this.setState({ gmsg: response.data.msg, modal: false });
              this.resetForm();
              this.refresh();

              this.setState({ good: true, loading: false });

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
      this.setState({ error: true, modal: false });
      this.setState({ good: false });
    }
  };
  async componentDidMount() {
    try {
      let res = await instance.post("/preorderitem", {
        preorder_id: this.state.preorder_id,
      });

      const results = await res.data;
      this.setState({ results });
      if (this.state.results && this.state.results.length > 0) {
        this.setState({ available: true });
      }
    } catch (e) {
      console.log(e);
    }
  }
  async deleteRecord(item_id) {
    try {
      let res = await instance.post("/deletepreorderitem", {
        item_id: item_id,
      });

      let result = await res.data;
      if (result && result.success) {
        this.setState({ gmsg: result.msg });
        this.setState({ good: true });
        this.refresh();
      } else if (result && result.success === false) {
        this.setState({ loading: false });
        this.setState({ errmsg: result.msg });
        this.setState({ error: true });
      }
    } catch (e) {
      console.log(e);
    }
  }
  async refresh() {
    try {
      let res = await instance.post("/preorderitem", {
        preorder_id: this.state.preorder_id,
      });

      const results = await res.data;
      this.setState({ results });
      if (this.state.results && this.state.results.length > 0) {
        this.setState({ available: true });
      }
    } catch (e) {
      console.log(e);
    }
  }
  async addItem() {
    this.setState({ loading: true });
    if (this.state.item_name !== "" && this.state.item_price !== "") {
      try {
        let res = await instance.post("/insertitems", {
          preorder_id: this.state.preorder_id,
          item_name: this.state.item_name,
          item_price: this.state.item_price,
        });

        let result = await res.data;

        if (result && result.success) {
          this.setState({ loading: false });
          this.resetForm();
          this.setState({ gmsg: result.msg });
          this.setState({ good: true });
          this.setState({ error: false });
          try {
            let res = await instance.post("/preorderitem", {
              preorder_id: this.state.preorder_id,
            });

            const results = await res.data;
            this.setState({ results });
            if (this.state.results && this.state.results.length > 0) {
              this.setState({ available: true });
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

  resetForm() {
    this.setState({
      item_name: "",
      item_price: "",
    });
  }
  async editRecord(item_id, item_name) {
    this.setState({ image_id: item_id, image_name: item_name, modal: true });
  }
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  handleSubmit(e) {
    e.preventDefault();
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
    const { loading, modal, errmsg, error, good, gmsg } = this.state;

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
                    Add items for {this.props.head}
                  </div>
                </div>
              }
            >
              {error && <Error msg={errmsg} />}
              {good && <Good msg={gmsg} />}
              {modal && (
                <Modal
                  loading={this.state.loading}
                  value="Withdraw"
                  image_name={this.state.image_name}
                  singleFileChangedHandler={this.singleFileChangedHandler}
                  singleFileUploadHandler={this.singleFileUploadHandler}
                  onClick={() => this.Preorder()}
                  displayModal={this.state.modal}
                  closeModal={this.selectModal}
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                  image_id={this.state.image_id}
                />
              )}
              <Row>
                <Col md={12}>
                  <Form onSubmit={this.handleSubmit}>
                    <Row>
                      <div className="smallcards">
                        <Col md={12}>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                              type="text"
                              name="item_name"
                              value={
                                this.state.item_name ? this.state.item_name : ""
                              }
                              onChange={this.handleChange}
                              placeholder="Long sleev t-shirt"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={12}>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Price</Form.Label>
                            <InputGroup className="mb-3">
                              <InputGroup.Prepend>
                                <InputGroup.Text>&#8358;</InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl
                                name="item_price"
                                value={
                                  this.state.item_price
                                    ? this.state.item_price
                                    : ""
                                }
                                onChange={this.handleChange}
                              />
                              <InputGroup.Append>
                                <InputGroup.Text>.00</InputGroup.Text>
                              </InputGroup.Append>
                            </InputGroup>
                          </Form.Group>
                          <Buttons
                            name={"Login"}
                            onClick={() => this.addItem()}
                            value={
                              <>
                                {loading && (
                                  <FontAwesomeIcon
                                    style={{
                                      position: "relative",
                                      top: "0px",
                                    }}
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
                        </Col>
                      </div>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Card>
            <Cards>
              <Cards.Header>
                <Cards.Title as="h5">Item List </Cards.Title>
              </Cards.Header>

              <Cards.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Item Name</th>
                      <th>Item Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.results.map((result, index) => (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{result.item_name}</td>
                        <td>{result.item_price}</td>

                        <td>
                          <div>
                            <FontAwesomeIcon
                              className="editing"
                              onClick={() =>
                                this.editRecord(
                                  result.item_id,
                                  result.item_name
                                )
                              }
                              icon={faPhotoVideo}
                            />

                            <FontAwesomeIcon
                              onClick={() => this.deleteRecord(result.item_id)}
                              className="editing"
                              icon={faTrashAlt}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Cards.Body>
            </Cards>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default BasicButton;

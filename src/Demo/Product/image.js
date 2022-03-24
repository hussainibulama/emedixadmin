import React from "react";
import { Row, Col, Card as Cards, Form, Table } from "react-bootstrap";

import Error from "../../dashboard/errmessage";
import Good from "../../dashboard/goodmessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Buttons from "../../dashboard/otherbutton";
import {
  faArrowLeft,
  faSpinner,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import instance from "../../authaxios";
import instances from "../../authaxios";
import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import { Link } from "react-router-dom";

class BasicButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errmsg: null,
      good: false,
      loading: false,
      gmsg: null,
      update_id: props.update_id,
      results: [],
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
      loading: true,
    });
    if (this.state.selectedFile) {
      data.append(
        "profileImage",
        this.state.selectedFile,
        this.state.selectedFile.name
      );

      instances
        .post("uploadimage/" + this.state.update_id, data, {
          headers: {
            boundary: data._boundary,
          },
        })
        .then((response) => {
          if (200 === response.status) {
            // If file size is larger than expected.
            if (response.data.success === false) {
              this.setState({ errmsg: response.data.msg });
              this.setState({ error: true, loading: false });

              this.setState({ good: false });
            } else {
              // Success
              this.setState({ gmsg: response.data.msg });
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
      this.setState({ error: true });
      this.setState({ good: false });
    }
  };

  async componentDidMount() {
    try {
      let res = await instance.post("/productmedia", {
        p_id: this.state.update_id,
      });

      const results = await res.data;
      this.setState({ results });
    } catch (e) {
      console.log(e);
    }
  }
  async refresh() {
    try {
      let res = await instance.post("/productmedia", {
        p_id: this.state.update_id,
      });

      const results = await res.data;
      this.setState({ results });
    } catch (e) {
      console.log(e);
    }
  }
  async deleteRecord(id) {
    try {
      let res = await instance.post("/deleteproductmedia", {
        id: id,
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

  resetForm() {
    this.setState({
      selectedFile: null,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    const { loading, errmsg, error, good, gmsg } = this.state;
    return (
      <Aux>
        <Row>
          <Col>
            <Card
              title={
                <div className="scaleto">
                  <div id="oc-alert-container"></div>
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
                    Uplaod images for {this.props.p_title}
                  </div>
                </div>
              }
            >
              {error && <Error msg={errmsg} />}
              {good && <Good msg={gmsg} />}
              <Cards.Body>
                <div className="decenter">
                  <h6 className="mb-4" style={{ marginLeft: "6px" }}>
                    {" "}
                    Upload Image: jpeg, jpg, png, gif
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
                        onClick={this.singleFileUploadHandler}
                        value={
                          <>
                            {loading && (
                              <FontAwesomeIcon
                                style={{ position: "relative", top: "0px" }}
                                icon={faSpinner}
                                spin
                              />
                            )}{" "}
                            {!loading && <> Upload Image</>}
                          </>
                        }
                      />
                    </Form>
                  </h6>
                  <div className="row d-flex align-items-center">
                    <div className="col-9"></div>
                  </div>
                </div>
              </Cards.Body>
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
                      <th>Image View </th>
                      <th>Image Link</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.results.map((result, index) => (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>
                          {}
                          <img
                            src={"" + result.image_link}
                            width="100px"
                            alt={"" + result.image_link}
                            height="100px"
                          />
                        </td>
                        <td>{result.image_link}</td>

                        <td>
                          <div>
                            <FontAwesomeIcon
                              onClick={() => this.deleteRecord(result.id)}
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

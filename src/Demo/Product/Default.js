import React from "react";
import { Row, Col, Card as Cards, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect } from "react-router-dom";
import {
  faPhotoVideo,
  faTags,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import Error from "../../dashboard/errmessage";
import Good from "../../dashboard/goodmessage";
import Buttons from "../../dashboard/otherbutton";
import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import instance from "../../authaxios";
import Add from "./Add";
import Image from "./image";

class BasicButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewer: "no",
      view: "",
      error: false,
      errmsg: null,
      good: false,
      gmsg: null,
      update_id: "",
      title: "",
      delete_id: "",
      results: [],
    };
  }
  async componentDidMount() {
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/selectproduct", {
        store_id: store_id,
      });

      const results = await res.data;
      this.setState({ results });
      if (this.state.results && this.state.results.length > 0) {
        this.setState({ viewer: "yes" });
      }
    } catch (e) {
      console.log(e);
    }
  }
  async createAdd() {
    this.setState({ view: "add" });
  }
  async editRecord(update) {
    this.setState({ update_id: update, view: "edit" });
  }
  async upLoad(update, title) {
    this.setState({ update_id: update, title: title, view: "upload" });
  }
  async goBack() {
    this.setState({ view: "" });
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/selectproduct", {
        store_id: store_id,
      });

      const results = await res.data;
      this.setState({ results });
      if (this.state.results && this.state.results.length > 0) {
        this.setState({ viewer: "yes" });
      }
    } catch (e) {
      console.log(e);
    }
  }
  async deleteRecord(p_id) {
    try {
      let res = await instance.post("/deleteproduct", {
        p_id: p_id,
      });

      let result = await res.data;
      if (result && result.success) {
        this.setState({ gmsg: result.msg });
        this.setState({ good: true });
        try {
          let store_id = localStorage.getItem("store_id");
          let res = await instance.post("/selectproduct", {
            store_id: store_id,
          });

          const results = await res.data;
          this.setState({ results });
          if (this.state.results && this.state.results.length > 0) {
            this.setState({ viewer: "yes" });
          }
        } catch (e) {
          console.log(e);
        }
      } else if (result && result.success === false) {
        this.setState({ loading: false });
        this.setState({ errmsg: result.msg });
        this.setState({ error: true });
      }
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const { viewer, view, errmsg, error, good, gmsg } = this.state;
    let store_id = localStorage.getItem("store_id");
    if (store_id === null) {
      return <Redirect to="/auth/signin" />;
    } else {
      if (viewer === "yes" && view === "") {
        return (
          <Aux>
            <Row>
              <Col>
                <Cards>
                  <Cards.Header>
                    <Cards.Title as="h5">Products </Cards.Title>
                    <span className="d-block m-t-5">
                      <div
                        style={{
                          textAlign: "right",
                          float: "right",
                          alignItems: "right",
                          justifyContent: "right",
                          display: "inline-flex",
                        }}
                        className="leftadd"
                      >
                        <Buttons
                          name={"Login"}
                          value={"Add new product"}
                          onClick={() => this.createAdd()}
                          placeholder={"Enter your name"}
                          handleChange={this.handleFullName}
                        />
                      </div>
                    </span>
                  </Cards.Header>
                  <Cards.Body>
                    {error && <Error msg={errmsg} />}
                    {good && <Good msg={gmsg} />}
                    <Table responsive hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Title</th>
                          <th>Description</th>
                          <th>Pricing</th>
                          <th>Quantity</th>
                          <th>Status</th>

                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.results.map((result, index) => (
                          <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{result.p_title}</td>
                            <td>{result.p_description}</td>
                            <td>{result.p_price}</td>
                            <td>{result.p_quantity}</td>
                            <td>{result.p_status}</td>
                            <td>
                              <div>
                                <FontAwesomeIcon
                                  className="editing"
                                  onClick={() => this.editRecord(result.p_id)}
                                  icon={faEdit}
                                />
                                <FontAwesomeIcon
                                  className="editing"
                                  onClick={() =>
                                    this.upLoad(result.p_id, result.p_title)
                                  }
                                  icon={faPhotoVideo}
                                />

                                <FontAwesomeIcon
                                  onClick={() => this.deleteRecord(result.p_id)}
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
      } else if (
        (viewer === "yes" && view === "add") ||
        (viewer === "no" && view === "add")
      ) {
        return (
          <Add
            head="Add Product"
            updateneed="false"
            onClick={() => this.goBack()}
          />
        );
      } else if (
        (viewer === "yes" && view === "edit") ||
        (viewer === "no" && view === "edit")
      ) {
        return (
          <Add
            head="Add Product"
            update_id={this.state.update_id}
            updateneed="true"
            onClick={() => this.goBack()}
          />
        );
      } else if (
        (viewer === "yes" && view === "upload") ||
        (viewer === "no" && view === "upload")
      ) {
        return (
          <Image
            p_title={this.state.title}
            update_id={this.state.update_id}
            updateneed="true"
            onClick={() => this.goBack()}
          />
        );
      } else if (viewer === "no" && view === "") {
        return (
          <Aux>
            <Row>
              <Col>
                <Card title="Products">
                  <div className="precards">
                    <div className="preimage">
                      <FontAwesomeIcon className="precc" icon={faTags} />
                    </div>
                    <h3>Add and manage your products</h3>
                    <p style={{ color: "#000000" }}>
                      {" "}
                      This is where you???ll add products and manage your pricing.
                      You can also import and export your product inventory.
                    </p>
                    <div className="scaleto">
                      <Buttons
                        name={"Login"}
                        value={"Add Products"}
                        onClick={() => this.createAdd()}
                        placeholder={"Enter your name"}
                        handleChange={this.handleFullName}
                      />
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Aux>
        );
      }
    }
  }
}
document.title = "Products | " + localStorage.getItem("username");

export default BasicButton;

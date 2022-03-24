import React from "react";
import { Row, Col, Card as Cards, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect } from "react-router-dom";
import { faTrashAlt, faPersonBooth } from "@fortawesome/free-solid-svg-icons";
import Error from "../../dashboard/errmessage";
import Good from "../../dashboard/goodmessage";
import Buttons from "../../dashboard/otherbutton";
import Add from "./Add";
import Edit from "./Edit";
import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";

import instance from "../../authaxios";

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
      delete_id: "",
      results: [],
    };
  }

  async componentDidMount() {
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/discounthistory", {
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
  async editRecord() {
    this.setState({ view: "edit" });
  }
  async goBack() {
    this.setState({ view: "" });
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/discounthistory", {
        store_id: store_id,
      });

      const results = await res.data;
      this.setState({ results });
      if (this.state.results && this.state.results.length > 0) {
        this.setState({ viewer: "yes" });
        this.setState({ error: false });
        this.setState({ good: false });
      }
    } catch (e) {
      console.log(e);
    }
  }
  async deleteRecord(discount_id) {
    try {
      let res = await instance.post("/deletediscount", {
        discount_id: discount_id,
      });

      let result = await res.data;
      if (result && result.success) {
        this.setState({ gmsg: result.msg });
        this.setState({ good: true });
        try {
          let store_id = localStorage.getItem("store_id");
          let res = await instance.post("/discounthistory", {
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
                    <Cards.Title as="h5">Discounts </Cards.Title>
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
                          value={"Create discount"}
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
                          <th>Discount Code</th>
                          <th>Type</th>
                          <th>Value</th>
                          <th>Expiring Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.results.map((result, index) => (
                          <tr>
                            <th scope="row">1</th>
                            <td>{result.discount_code}</td>
                            <td>{result.discount_type}</td>
                            <td>{result.discount_value}</td>
                            <td>{result.expire}</td>
                            <td>
                              <div>
                                <FontAwesomeIcon
                                  onClick={() =>
                                    this.deleteRecord(result.discount_id)
                                  }
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
        return <Add onClick={() => this.goBack()} />;
      } else if (
        (viewer === "yes" && view === "edit") ||
        (viewer === "no" && view === "edit")
      ) {
        return (
          <Edit
            update_id={this.state.update_id}
            onClick={() => this.goBack()}
          />
        );
      } else {
        return (
          <Aux>
            <Row>
              <Col>
                <Card title="Discount(s)">
                  <div className="precards">
                    <div className="preimage">
                      <FontAwesomeIcon className="precc" icon={faPersonBooth} />
                    </div>
                    <h3>Create and Manage Discounts</h3>
                    <p style={{ color: "#000000" }}>
                      {" "}
                      This is where you’ll create promotional discount for your
                      customers and manage it entirely.
                    </p>
                    <div className="scaleto">
                      <Buttons
                        name={"Login"}
                        value={"Create Discount"}
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
document.title = "Discounts | " + localStorage.getItem("username");

export default BasicButton;

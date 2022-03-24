import React from "react";
import { Row, Col, Card as Cards, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";
import Buttons from "../../dashboard/otherbutton";
import { Redirect } from "react-router-dom";
import Aux from "../../hoc/_Aux";
import Add from "./Add";
import instance from "../../authaxios";
import Card from "../../App/components/MainCard";

class BasicButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store_acc_name: "",
      store_bank_name: "",
      store_acc_no: "",
      viewer: "no",
      view: "",
      error: false,
      errmsg: null,
      good: false,
      gmsg: null,
      update_id: "",
      results: [],
    };
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
        if (this.state.store_acc_name && this.state.store_acc_no !== "") {
          this.setState({ viewer: "yes" });
        }
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
        if (this.state.store_acc_name && this.state.store_acc_no !== "") {
          this.setState({ viewer: "yes" });
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const { viewer, view } = this.state;
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
                    <Cards.Title as="h5">Bank Information </Cards.Title>
                    <span className="d-block m-t-5"></span>
                  </Cards.Header>
                  <Cards.Body>
                    <Table responsive hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Account Name</th>
                          <th>Bank Name</th>
                          <th>Account No</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>{this.state.store_acc_name}</td>
                          <td>{this.state.store_bank_name}</td>
                          <td>{this.state.store_acc_no}</td>
                          <td>
                            {" "}
                            <>
                              <FontAwesomeIcon
                                className="editing"
                                icon={faEdit}
                                onClick={() => this.editRecord()}
                              />
                            </>
                          </td>
                        </tr>
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
        return <Add info="Insert Bank Info" onClick={() => this.goBack()} />;
      } else if (
        (viewer === "yes" && view === "edit") ||
        (viewer === "no" && view === "edit")
      ) {
        return <Add info="Update Bank Info" onClick={() => this.goBack()} />;
      } else {
        return (
          <Aux>
            <Row>
              <Col>
                <Card title="Bank Information">
                  <div className="precards">
                    <div className="preimage">
                      <FontAwesomeIcon
                        className="precc"
                        icon={faMoneyCheckAlt}
                      />
                    </div>
                    <h3>Customer Bank Information</h3>
                    <p style={{ color: "#000000" }}>
                      {" "}
                      This is where you’ll add your bank details. Any payment
                      you received will be saved on your wallet and will be sent
                      to this Bank Account
                    </p>
                    <div className="scaleto">
                      <Buttons
                        name={"Login"}
                        onClick={() => this.createAdd()}
                        value={"Add Account Info"}
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
document.title = "Bank | " + localStorage.getItem("username");
export default BasicButton;

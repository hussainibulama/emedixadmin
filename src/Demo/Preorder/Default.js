import React from "react";
import { Row, Col, Card as Cards, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faEllipsisV,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import Add from "./Add";
import View from "./View";
import Buttons from "../../dashboard/otherbutton";
import { Redirect } from "react-router-dom";
import Aux from "../../hoc/_Aux";
import Error from "../../dashboard/errmessage";
import Good from "../../dashboard/goodmessage";
import instance from "../../authaxios";
import Modal from "./modal";
import Card from "../../App/components/MainCard";

class BasicButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewer: "no",
      view: "",
      balance: "",
      head: "",
      preorder_id: "",
      image: false,
      results: [],
      pre_username: "",
      expire: "",
      loading: false,
      loader: false,
      modal: false,
      error: false,
      errmsg: null,
      good: false,
      gmsg: null,
    };
  }
  selectModal = (info) => {
    this.setState({ modal: !this.state.modal }); // true/false toggle
  };
  handleSubmit(e) {
    e.preventDefault();
  }
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  async CreatePreorder() {
    this.setState({
      modal: true,
    });
  }
  async editRecord(update, head) {
    this.setState({ preorder_id: update, head: head, view: "add" });
  }
  async viewOrders(update, head) {
    this.setState({ preorder_id: update, head: head, view: "view" });
  }
  async goBack() {
    this.setState({ view: "", good: false, error: false });
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/preorderhistory", {
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
  async componentDidMount() {
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/preorderhistory", {
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
  async Preorder() {
    this.setState({
      loading: true,
    });
    if (this.state.pre_username !== "" && this.state.expire !== "") {
      try {
        let store_id = localStorage.getItem("store_id");
        let res = await instance.post("/preorder", {
          store_id: store_id,
          preorder_name: this.state.pre_username,
          expire: this.state.expire,
        });

        let result = await res.data;
        if (result && result.success) {
          this.setState({ loading: false });
          this.setState({ gmsg: result.msg });
          this.setState({ good: true });
          this.setState({ error: false });
          this.setState({ modal: false });
          try {
            let store_id = localStorage.getItem("store_id");
            let res = await instance.post("/preorderhistory", {
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
        } else {
          this.setState({ loading: false });
          this.setState({ errmsg: result.msg });
          this.setState({ error: true });
          this.setState({ good: false });
          this.setState({ modal: false });
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      this.setState({ loading: false });
      this.setState({ errmsg: "Please Fill out your form Correctly" });
      this.setState({ error: true });
      this.setState({ good: false });
      this.setState({ modal: false });
    }
  }
  render() {
    const {
      modal,
      error,
      errmsg,
      good,
      gmsg,

      viewer,
      view,
    } = this.state;
    let store_id = localStorage.getItem("store_id");
    if (store_id === null) {
      return <Redirect to="/auth/signin" />;
    } else {
      if (viewer === "yes" && view === "") {
        return (
          <Aux>
            {modal && (
              <Modal
                loading={this.state.loading}
                value="Withdraw"
                onClick={() => this.Preorder()}
                displayModal={this.state.modal}
                closeModal={this.selectModal}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                pre_username={this.state.pre_username}
                expire={this.state.expire}
                message={this.state.message}
              />
            )}
            <Row>
              <Col>
                <Cards>
                  <Cards.Header>
                    <Cards.Title as="h5">Preorder </Cards.Title>

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
                          onClick={() => this.CreatePreorder()}
                          value={"Create Preorder"}
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
                          <th>Link Name</th>
                          <th>Expires in</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.results.map((result, index) => (
                          <tr>
                            <th scope="row">{index + 1}</th>
                            <td
                              style={{
                                display: "inline-flex",
                                fontSize: "16px",
                                color: "#000000",
                              }}
                            >
                              swip.ng/preorder/
                              <div
                                style={{
                                  color: "green",
                                  fontWeight: "900",
                                  display: "inline-flex",
                                }}
                              >
                                {result.preorder_name}
                              </div>
                            </td>

                            <td>{result.expdate} </td>
                            <td>
                              <div>
                                <FontAwesomeIcon
                                  className="editing"
                                  onClick={() =>
                                    this.editRecord(
                                      result.preorder_id,
                                      result.preorder_name
                                    )
                                  }
                                  icon={faEdit}
                                />
                                <FontAwesomeIcon
                                  className="editing"
                                  onClick={() =>
                                    this.viewOrders(
                                      result.preorder_id,
                                      result.preorder_name
                                    )
                                  }
                                  icon={faNewspaper}
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
            head={this.state.head}
            preorder_id={this.state.preorder_id}
            onClick={() => this.goBack()}
          />
        );
      } else if (
        (viewer === "yes" && view === "view") ||
        (viewer === "no" && view === "view")
      ) {
        return (
          <View
            head={this.state.head}
            preorder_id={this.state.preorder_id}
            onClick={() => this.goBack()}
          />
        );
      } else {
        return (
          <Aux>
            <Row>
              <Col>
                <Card title="Preorder(s)">
                  {error && <Error msg={errmsg} />}
                  {good && <Good msg={gmsg} />}
                  <div className="precards">
                    <div className="preimage">
                      <FontAwesomeIcon className="precc" icon={faEllipsisV} />
                    </div>
                    <h3>Create and Manage Preorders</h3>
                    <p style={{ color: "#000000" }}>
                      {" "}
                      This is where you’ll create preorder and manage its
                      orders. you can attach all your preorder items with
                      images.
                    </p>
                    <div className="scaleto">
                      <Buttons
                        name={"Login"}
                        value={"Create Pre-order"}
                        onClick={() => this.CreatePreorder()}
                        placeholder={"Enter your name"}
                        handleChange={this.handleFullName}
                      />
                      {modal && (
                        <Modal
                          loading={this.state.loading}
                          value="Withdraw"
                          onClick={() => this.Preorder()}
                          displayModal={this.state.modal}
                          closeModal={this.selectModal}
                          onChange={this.handleChange}
                          onSubmit={this.handleSubmit}
                          pre_username={this.state.pre_username}
                          expire={this.state.expire}
                          message={this.state.message}
                        />
                      )}
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
document.title = "Preorder | " + localStorage.getItem("username");
export default BasicButton;

import React from "react";
import { Row, Col, Card as Cards, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Buttons from "../../dashboard/otherbutton";
import { Redirect } from "react-router-dom";
import Aux from "../../hoc/_Aux";
import Error from "../../dashboard/errmessage";
import Good from "../../dashboard/goodmessage";
import instance from "../../authaxios";
import Modal from "./modal";

class BasicButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: "",
      results: [],
      pin: null,
      pinno: "",
      store_wallet_pin: "",
      loading: false,
      loader: false,
      confirm: "",
      message: "",
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
  async UpdatePin() {
    this.setState({
      loading: true,
    });
    if (this.state.store_Wallet_pin !== "") {
      try {
        let store_id = localStorage.getItem("store_id");
        let res = await instance.post("/updatepin", {
          store_id: store_id,
          store_wallet_pin: this.state.store_wallet_pin,
        });

        let result = await res.data;
        if (result && result.success) {
          this.setState({ loading: false });
          this.setState({ gmsg: result.msg });
          this.setState({ good: true });
          this.setState({ error: false });
          this.setState({ modal: false });
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
  async Widthdraw() {
    this.setState({
      loading: true,
    });
    if (this.state.store_Wallet_pin !== "") {
      if (this.state.pinno === this.state.store_wallet_pin) {
        if (this.state.balance !== "0") {
          try {
            let store_id = localStorage.getItem("store_id");
            let res = await instance.post("/withdraw", {
              store_id: store_id,
              amount: this.state.balance,
              store_wallet_pin: this.state.store_wallet_pin,
              username: localStorage.getItem("username"),
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
                let res = await instance.post("/walletbalance", {
                  store_id: store_id,
                });

                let result = await res.data;
                if (result && result.success) {
                  if (result.wallet === "") {
                    this.setState({
                      balance: "0",
                    });
                  } else {
                    this.setState({
                      balance: result.wallet,
                    });
                  }
                }
              } catch (e) {
                console.log(e);
              }
              try {
                let store_id = localStorage.getItem("store_id");
                let res = await instance.post("/withdrawhistory", {
                  store_id: store_id,
                });

                const results = await res.data;
                this.setState({ results });
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
          this.setState({ errmsg: "You cannot withdraw an empty account" });
          this.setState({ error: true });
          this.setState({ good: false });
          this.setState({ modal: false });
        }
      } else {
        this.setState({ loading: false });
        this.setState({ errmsg: "Invalid Pin" });
        this.setState({ error: true });
        this.setState({ good: false });
        this.setState({ modal: false });
      }
    } else {
      this.setState({ loading: false });
      this.setState({ errmsg: "Please Fill out your form Correctly" });
      this.setState({ error: true });
      this.setState({ good: false });
      this.setState({ modal: false });
    }
  }
  async checkButton() {
    this.setState({
      loader: true,
    });
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/checkpin", {
        store_id: store_id,
      });

      let result = await res.data;
      if (result && result.success) {
        if (result.pin === null) {
          this.setState({
            pin: false,
            pinno: result.pin,
            modal: true,
            message:
              "Your first time huh!, please create a 4 digit pin to continue",
            loader: false,
          });
        } else {
          this.setState({
            pin: true,
            pinno: result.pin,
            modal: true,
            message: "Enter your pin to withdraw",
            loader: false,
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
  async componentDidMount() {
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/walletbalance", {
        store_id: store_id,
      });

      let result = await res.data;
      if (result && result.success) {
        if (result.wallet == null) {
          this.setState({
            balance: "0",
          });
        } else {
          this.setState({
            balance: result.wallet,
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/withdrawhistory", {
        store_id: store_id,
      });

      const results = await res.data;
      this.setState({ results });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const {
      balance,
      modal,
      pin,

      error,
      errmsg,
      good,
      gmsg,
      loader,
    } = this.state;
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
                  <Cards.Title as="h5">Wallet </Cards.Title>
                  <span className="d-block m-t-5"></span>
                </Cards.Header>
                {error && <Error msg={errmsg} />}
                {good && <Good msg={gmsg} />}
                <Cards>
                  <Cards.Body>
                    <div className="decenter">
                      <h6 className="mb-4" style={{ marginLeft: "6px" }}>
                        {" "}
                        Wallet Balance
                      </h6>
                      <div className="row d-flex align-items-center">
                        <div className="col-9">
                          <h3 className="f-w-300 d-flex align-items-center m-b-0">
                            NGN{" "}
                            {balance
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </h3>
                        </div>
                        <div
                          className="withdraw"
                          style={{
                            position: "relative",
                            right: "0",
                            justifyContent: "right",
                          }}
                        >
                          <Buttons
                            name={"Login"}
                            value={
                              <>
                                {loader && (
                                  <FontAwesomeIcon
                                    style={{ position: "relative", top: "0px" }}
                                    icon={faSpinner}
                                    spin
                                  />
                                )}{" "}
                                {!loader && <> Withdraw</>}
                              </>
                            }
                            onClick={() => this.checkButton()}
                            placeholder={"Enter your name"}
                            handleChange={this.handleFullName}
                          />
                          {modal && pin && (
                            <Modal
                              loading={this.state.loading}
                              value="Withdraw"
                              onClick={() => this.Widthdraw()}
                              displayModal={this.state.modal}
                              closeModal={this.selectModal}
                              onChange={this.handleChange}
                              onSubmit={this.handleSubmit}
                              store_wallet_pin={this.state.store_wallet_pin}
                              message={this.state.message}
                            />
                          )}
                          {modal && !pin && (
                            <Modal
                              onClick={() => this.UpdatePin()}
                              loading={this.state.loading}
                              onChange={this.handleChange}
                              onSubmit={this.handleSubmit}
                              value="Create Pin"
                              store_wallet_pin={this.state.store_wallet_pin}
                              displayModal={this.state.modal}
                              closeModal={this.selectModal}
                              message={this.state.message}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </Cards.Body>
                </Cards>
                <Cards.Header>
                  <Cards.Title as="h5">Withdraw History </Cards.Title>
                </Cards.Header>

                <Cards.Body>
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Amount</th>
                        <th>By User</th>
                        <th>Account Info</th>
                        <th>Account No</th>
                        <th>Date and Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.results.map((result, index) => (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{result.amount}</td>
                          <td>{result.username}</td>
                          <td>{result.acc_info}</td>
                          <td>{result.acc_no}</td>
                          <td>{result.datetime}</td>
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
}
document.title = "Wallet | " + localStorage.getItem("username");
export default BasicButton;

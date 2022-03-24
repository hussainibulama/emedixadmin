import React from "react";
import { Row, Col, Card as Cards, Table, Form } from "react-bootstrap";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Error from "../../dashboard/errmessage";
import Good from "../../dashboard/goodmessage";
import { Redirect } from "react-router-dom";
import Aux from "../../hoc/_Aux";
import instance from "../../authaxios";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
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
      resultss: [],
      domain: "",
      price: "",
      availability: false,
      avail: "",
      loading: "",
      store_email: "",
      paytxt: "",
    };
  }

  async componentDidMount() {
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/selectusers", {
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
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/selectdomains", {
        store_id: store_id,
      });

      const resultss = await res.data;
      this.setState({ resultss });
    } catch (e) {
      console.log(e);
    }
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/selectprofile", {
        store_id: store_id,
      });

      let result = await res.data;
      if (result && result.success) {
        this.setState({
          store_email: result.store_email,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
  async refresh() {
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/selectdomains", {
        store_id: store_id,
      });

      const resultss = await res.data;
      this.setState({ resultss });
    } catch (e) {
      console.log(e);
    }
  }

  async createAdd() {
    this.setState({ view: "add" });
  }

  async goBack() {
    this.setState({ view: "" });
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/selectusers", {
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
  async deleteRecord(owner_id) {
    try {
      let res = await instance.post("/deleteuser", {
        owner_id: owner_id,
      });

      let result = await res.data;
      if (result && result.success) {
        this.setState({ gmsg: result.msg });
        this.setState({ good: true });
        try {
          let store_id = localStorage.getItem("store_id");
          let res = await instance.post("/selectusers", {
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
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  handleSubmit(e) {
    e.preventDefault();
  }
  async Domain() {
    this.setState({ loading: true });
    try {
      let res = await instance.post("/domainsearch", {
        domain: this.state.domain,
      });

      let result = await res.data;
      if (result && result.success) {
        this.state.avail = result.msg;
        if (this.state.avail === "available") {
          this.setState({ paytxt: "Buy Now" });
        } else if (this.state.avail === "unavailable") {
          this.setState({ paytxt: "Transfer Now" });
        }
        this.setState({ loading: false });
        let dom = this.state.domain.split(".");
        if (dom[dom.length - 1] === "com") {
          this.state.price = "6500";
        } else if (dom[dom.length - 1] === "ng") {
          this.state.price = "13000";
        } else if (dom[dom.length - 1] === "org") {
          this.state.price = "9000";
        } else if (dom[dom.length - 1] === "net") {
          this.state.price = "9000";
        } else if (dom[dom.length - 1] === "biz") {
          this.state.price = "13000";
        } else if (dom[dom.length - 1] === "me") {
          this.state.price = "15000";
        } else {
          this.state.price = "5000";
        }
        this.setState({ avail: result.msg, availability: true });
      } else if (result && result.success === false) {
        this.state.avail = result.msg;
        if (this.state.avail === "available") {
          this.setState({ paytxt: "Buy Now" });
        } else if (this.state.avail === "unavailable") {
          this.setState({ paytxt: "Transfer Now" });
        }
        this.setState({ loading: false });
        let dom = this.state.domain.split(".");
        if (dom[dom.length - 1] === "com") {
          this.setState({ price: "6500" });
          this.state.price = "6500";
        } else if (dom[dom.length - 1] === "ng") {
          this.setState({ price: "13000" });
          this.state.price = "13000";
        } else if (dom[dom.length - 1] === "org") {
          this.setState({ price: "9000" });
          this.state.price = "9000";
        } else if (dom[dom.length - 1] === "net") {
          this.setState({ price: "9000" });
          this.state.price = "9000";
        } else if (dom[dom.length - 1] === "biz") {
          this.setState({ price: "13000" });
          this.state.price = "13000";
        } else if (dom[dom.length - 1] === "me") {
          this.setState({ price: "15000" });
          this.state.price = "15000";
        } else {
          this.setState({ price: "5000" });
          this.state.price = "5000";
        }
        this.setState({ avail: result.msg, availability: true });
      }
    } catch (e) {
      console.log(e);
    }
  }
  async payDomain() {
    try {
      let res = await instance.post("/domainbought", {
        store_id: localStorage.getItem("store_id"),
        store_username: localStorage.getItem("username"),
        domain: this.state.domain,
      });

      let result = await res.data;
      if (result && result.success) {
        this.setState({ gmsg: result.msg });
        this.setState({ good: true });
        this.setState({ error: false });
        this.refresh();
      } else if (result && result.success === false) {
        this.setState({ errmsg: result.msg });
        this.setState({ error: true });
        this.setState({ good: false });
        this.refresh();
      }
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const { errmsg, error, good, gmsg, loading, price } = this.state;
    const config = {
      public_key: "FLWPUBK-7ca020fc14447f7b59861061438060ae-X",
      tx_ref: "" + Date.now(),
      amount: parseInt(price),
      currency: "NGN",
      payment_options: "card,mobilemoney,ussd",
      customer: {
        email: this.state.store_email,
        phonenumber: "08136668344",
        name: "swip",
      },
      customizations: {
        title: "Store with us and increase profits",
        description: "Payment for Domain Name",
        logo:
          "https://swipimages.s3.us-east-2.amazonaws.com/swiplogo-1616367741259.png",
      },
    };
    const fwConfig = {
      ...config,
      text: this.state.paytxt,
      callback: (response) => {
        console.log(response);
        if (response.status === "successful") {
          closePaymentModal();
          this.payDomain();
        }
        // this will close the modal programmatically
      },
      onClose: () => {},
    };
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
                  <Cards.Title as="h5">Domain Name</Cards.Title>
                </Cards.Header>
                <Cards.Body>
                  {error && <Error msg={errmsg} />}
                  {good && <Good msg={gmsg} />}
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Domain Name</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>{localStorage.getItem("username")}.swip.ng</td>
                        <td>Online</td>
                      </tr>
                      {this.state.resultss.map((result, index) => (
                        <tr>
                          <th scope="row">{index + 2}</th>
                          <td>{result.domain}</td>
                          <td>{result.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>

                  <Form onSubmit={this.handleSubmit}>
                    <div class="wrapk">
                      <div class="search">
                        <input
                          type="text"
                          name="domain"
                          onChange={this.handleChange}
                          class="searchTerm"
                          placeholder="Search for domain you want to buy or transfer e.g swip.ng"
                        />
                        <button
                          disabled={this.state.loading}
                          type="submit"
                          onClick={() => this.Domain()}
                          class="searchButton"
                        >
                          {loading && (
                            <FontAwesomeIcon
                              style={{ position: "relative", top: "0px" }}
                              icon={faSpinner}
                              spin
                            />
                          )}
                          {!loading && <i class="fa fa-search"></i>}
                        </button>
                      </div>
                    </div>
                    <div className="doaminfoot">
                      {this.state.availability && (
                        <p className="doaminsearcher">
                          this domain <samp>{this.state.domain} </samp> is{" "}
                          {this.state.avail === "unavailable" && (
                            <>
                              <code>{this.state.avail}</code>
                              <br></br>
                              pay <samp>{this.state.price}</samp> to transer now
                              <br></br>
                              <div className="otherfielder">
                                <FlutterWaveButton {...fwConfig} />
                              </div>
                            </>
                          )}
                          {this.state.avail === "available" && (
                            <>
                              <samp>{this.state.avail}</samp>
                              <br></br>
                              pay <code>{this.state.price}</code> to buy now
                              <br></br>
                              <div className="otherfielder">
                                <FlutterWaveButton {...fwConfig} />
                              </div>
                            </>
                          )}
                        </p>
                      )}
                    </div>
                  </Form>
                </Cards.Body>
              </Cards>
            </Col>
          </Row>
        </Aux>
      );
    }
  }
}
document.title = "Users | " + localStorage.getItem("username");
export default BasicButton;

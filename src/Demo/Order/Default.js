import React from "react";
import { Row, Col, Card as Cards, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAmountDownAlt } from "@fortawesome/free-solid-svg-icons";
import instance from "../../authaxios";
import Archieved from "./Archieved";
import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import { Redirect } from "react-router-dom";
import Button from "../../dashboard/otherbutton2";
class BasicButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewer: "no",

      results: [],
    };
  }
  async componentDidMount() {
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/orderhistories", {
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
  async Refresh() {
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/orderhistories", {
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
  async UpdateItem(order_id) {
    try {
      let res = await instance.post("/orderupdate", {
        order_id: order_id,
      });

      const result = await res.data;

      if (result && result.success) {
        this.Refresh();
      }
    } catch (e) {
      console.log(e);
    }
  }

  async Archieved() {
    this.setState({ viewer: "archieved" });
  }
  render() {
    const { viewer } = this.state;
    let store_id = localStorage.getItem("store_id");
    if (store_id === null) {
      return <Redirect to="/auth/signin" />;
    } else {
      if (viewer === "yes") {
        return (
          <Aux>
            <Row>
              <Col>
                <Cards>
                  <Cards.Header>
                    <Cards.Title as="h5">Order History </Cards.Title>
                    <span className="d-block m-t-5"></span>
                  </Cards.Header>
                  <Cards.Body>
                    <Button
                      name={"Login"}
                      value={"Archieved Orders"}
                      onClick={() => this.Archieved()}
                      placeholder={"Enter your name"}
                      handleChange={this.handleFullName}
                    />

                    <Table responsive hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Customer Information</th>
                          <th>Option</th>
                          <th>Reference No</th>
                          <th>Product Name</th>
                          <th>Amount Paid</th>
                          <th>Date/Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.results.map((result, index) => (
                          <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{result.customer_info}</td>
                            <td>{result.delivery}</td>
                            <td>{result.reference_no}</td>
                            <td>{result.product_name}</td>
                            <td>
                              {result.amount
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </td>
                            <td>{result.date}</td>
                            <td>{result.time}</td>
                            <td>
                              <button
                                onClick={() => this.UpdateItem(result.order_id)}
                              >
                                Archieve
                              </button>
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
      } else if (viewer === "archieved") {
        return (
          <>
            <Archieved />
          </>
        );
      } else {
        return (
          <Aux>
            <Row>
              <Col>
                <Card title="Orders">
                  <div className="precards">
                    <div className="preimage">
                      <FontAwesomeIcon
                        className="precc"
                        icon={faSortAmountDownAlt}
                      />
                    </div>
                    <h3>Your orders will show here</h3>
                    <p style={{ color: "#000000" }}>
                      {" "}
                      This is where your orders will show, if a customer place
                      an order, it will show on this page.
                    </p>
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
document.title = "Orders | " + localStorage.getItem("username");
export default BasicButton;

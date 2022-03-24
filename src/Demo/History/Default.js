import React from "react";
import { Row, Col, Card as Cards, Table } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Aux from "../../hoc/_Aux";
import instance from "../../authaxios";

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
      let res = await instance.post("/orderhistory", {
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
  render() {
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
                  <Cards.Title as="h5">Transaction History </Cards.Title>
                  <span className="d-block m-t-5"></span>
                </Cards.Header>
                <Cards.Body>
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Reference No</th>
                        <th>Amount</th>
                        <th>Date and Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.results.map((result, index) => (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{result.reference_no}</td>
                          <td>{result.amount}</td>
                          <td>
                            {result.date}
                            {result.time}
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
}
document.title = "Transaction History | " + localStorage.getItem("username");
export default BasicButton;

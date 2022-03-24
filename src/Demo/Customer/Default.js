import React from "react";
import { Row, Col, Card as Cards, Table } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Aux from "../../hoc/_Aux";

import instance from "../../authaxios";

class BasicButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }
  async componentDidMount() {
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/customerdetails", {
        store_id: store_id,
      });

      const results = await res.data;

      this.setState({ results });
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
                  <Cards.Title as="h5">Customer </Cards.Title>
                </Cards.Header>
                <Cards.Body>
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone NO.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.results.map((result, index) => (
                        <tr>
                          <th scope="row">{index + 1}</th>

                          <td> {result.c_name}</td>
                          <td> {result.username}</td>
                          <td> {result.c_phone}</td>
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
document.title = "Customer`s | " + localStorage.getItem("username");
export default BasicButton;

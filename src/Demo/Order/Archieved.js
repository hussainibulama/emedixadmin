import React from "react";
import { Row, Col, Card as Cards, Table } from "react-bootstrap";
import instance from "../../authaxios";
import Aux from "../../hoc/_Aux";
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
    return (
      <Aux>
        <Row>
          <Col>
            <Cards>
              <Cards.Header>
                <Cards.Title as="h5">Archieved Order History </Cards.Title>
                <span className="d-block m-t-5"></span>
              </Cards.Header>
              <Cards.Body>
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
document.title = "Orders | " + localStorage.getItem("username");
export default BasicButton;

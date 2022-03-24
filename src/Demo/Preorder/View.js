import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import instance from "../../authaxios";
import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import { Link } from "react-router-dom";
class BasicButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preorder_id: this.props.preorder_id,
      results: [],
      item_name: "",
      item_price: "",
      loading: false,
      selectedFile: null,
      loader: false,
      modal: false,
      image_id: "",
      image_name: "",
      error: false,
      errmsg: null,
      good: false,
      gmsg: null,
    };
  }
  selectModal = (info) => {
    this.setState({ modal: !this.state.modal }); // true/false toggle
  };

  async componentDidMount() {
    try {
      let res = await instance.post("/preorderorderhistory", {
        preorder_id: this.state.preorder_id,
      });

      const results = await res.data;
      this.setState({ results });
      if (this.state.results && this.state.results.length > 0) {
        this.setState({ available: true });
      }
    } catch (e) {
      console.log(e);
    }
  }
  async Refresh() {
    try {
      let res = await instance.post("/preorderorderhistory", {
        preorder_id: this.state.preorder_id,
      });

      const results = await res.data;
      this.setState({ results });
      if (this.state.results && this.state.results.length > 0) {
        this.setState({ available: true });
      }
    } catch (e) {
      console.log(e);
    }
  }
  async UpdateItem(id) {
    try {
      let res = await instance.post("/preorderupdate", {
        id: id,
      });

      const result = await res.data;

      if (result && result.success) {
        this.Refresh();
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
            <Card
              title={
                <div className="scaleto">
                  <div className="backer">
                    <Link onClick={this.props.onClick}>
                      <FontAwesomeIcon
                        style={{ fontSize: "20px", color: "#000000" }}
                        icon={faArrowLeft}
                      />
                    </Link>
                  </div>{" "}
                  <div style={{ lineHeight: "30px", marginLeft: "10px" }}>
                    {" "}
                    View Orders for {this.props.head}
                  </div>
                </div>
              }
            >
              <Row>
                <Col md={12}>
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Customer Information</th>
                        <th>Order Information</th>
                        <th>Amount Paid</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.results.map((result, index) => (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{result.customer_info}</td>
                          <td>{result.order_details}</td>
                          <td>{result.amount}</td>
                          <td>
                            {" "}
                            {result.status === "now" && (
                              <button
                                onClick={() => this.UpdateItem(result.id)}
                              >
                                Archieve
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default BasicButton;

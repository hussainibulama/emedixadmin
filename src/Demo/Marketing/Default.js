import React from "react";
import { Row, Col, Card as Cards, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import Buttons from "../../dashboard/otherbutton";
import Button from "../../dashboard/otherbutton2";
import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
class BasicButton extends React.Component {
  render() {
    const viewer = "no";
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
                    <Cards.Title as="h5">Products </Cards.Title>
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
                        <Link
                          to="/addproduct"
                          style={{
                            position: "relative",
                            lineHeight: "2em",
                          }}
                        >
                          <Buttons
                            name={"Login"}
                            value={"Add New Product"}
                            placeholder={"Enter your name"}
                            handleChange={this.handleFullName}
                          />
                        </Link>
                        <Link
                          to="/addproduct"
                          style={{
                            position: "relative",
                            lineHeight: "2em",
                          }}
                        >
                          <Button
                            name={"Login"}
                            value={"Find Product"}
                            placeholder={"Enter your name"}
                            handleChange={this.handleFullName}
                          />
                        </Link>
                      </div>
                    </span>
                  </Cards.Header>
                  <Cards.Body>
                    <Table responsive hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Title</th>
                          <th>Description</th>
                          <th>Pricing</th>
                          <th>Quantity</th>
                          <th>Status</th>
                          <th>Category</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                          <td>@fat</td>
                          <td>@fat</td>
                          <td>@fat</td>
                          <td>@fat</td>
                          <td>@fat</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                          <td>@twitter</td>
                          <td>@twitter</td>
                          <td>@twitter</td>
                          <td>@twitter</td>
                          <td>@twitter</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Cards.Body>
                </Cards>
              </Col>
            </Row>
          </Aux>
        );
      } else {
        return (
          <Aux>
            <Row>
              <Col>
                <Card title="Marketing">
                  <div className="precards">
                    <div className="preimage">
                      <FontAwesomeIcon className="precc" icon={faBullhorn} />
                    </div>
                    <h3>Launch a one-click campaign</h3>
                    <p style={{ color: "#000000" }}>
                      {" "}
                      Grow your audience, promote a sales event, or showcase new
                      products across channels. Our customizable templates make
                      it easy, with recommended sales channels, prefilled
                      content, and scheduling.
                    </p>
                    <div className="scaleto">
                      <Link
                        to="#"
                        style={{
                          position: "relative",
                        }}
                      >
                        <Buttons
                          name={"Login"}
                          value={"Create Campaign"}
                          placeholder={"Enter your name"}
                          handleChange={this.handleFullName}
                        />
                      </Link>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card title="Marketing Apps">
                  <div className="precards"></div>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card title="Learn more about marketing">
                  <div className="precards"></div>
                </Card>
              </Col>
            </Row>
          </Aux>
        );
      }
    }
  }
}
document.title = "Marketing | " + localStorage.getItem("username");

export default BasicButton;

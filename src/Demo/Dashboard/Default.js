import React from "react";
import { Redirect } from "react-router-dom";
import { Row, Col, Card as Cards } from "react-bootstrap";
import Button from "../../dashboard/otherbutton2";
import Aux from "../../hoc/_Aux";
import { Link } from "react-router-dom";
import instance from "../../authaxios";
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sumday: "",
      sumdaypre: "",
      summonth: "",
      summonthpre: "",
      sumyear: "",
      sumyearpre: "",
      store_email: "",
    };
  }
  async componentDidMount() {
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/sumday", {
        store_id: store_id,
      });

      let result = await res.data;

      if (result && result.success) {
        if (result.sumday === null) {
          this.setState({ sumday: "0" });
        } else {
          this.setState({ sumday: result.sumday });
        }
      } else if (result && result.success === false) {
        this.setState({ sumday: "0" });
      }
    } catch (e) {
      console.log(e);
    }
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/sumdaypreorder", {
        store_id: store_id,
      });

      let result = await res.data;

      if (result && result.success) {
        if (result.sumdaypre === null) {
          this.setState({ sumdaypre: "0" });
        } else {
          this.setState({ sumdaypre: result.sumdaypre });
        }
      } else if (result && result.success === false) {
        this.setState({ sumdaypre: "0" });
      }
    } catch (e) {
      console.log(e);
    }
    try {
      let res = await instance.post("/summonth", {
        store_id: localStorage.store_id,
      });

      let result = await res.data;

      if (result && result.success) {
        if (result.summonth === null) {
          this.setState({ summonth: "0" });
        } else {
          this.setState({ summonth: result.summonth });
        }
      } else if (result && result.success === false) {
        this.setState({ summonth: "0" });
      }
    } catch (e) {
      console.log(e);
    }
    try {
      let res = await instance.post("/summonthpreorder", {
        store_id: localStorage.store_id,
      });

      let result = await res.data;

      if (result && result.success) {
        if (result.summonthpre === null) {
          this.setState({ summonthpre: "0" });
        } else {
          this.setState({ summonthpre: result.summonthpre });
        }
      } else if (result && result.success === false) {
        this.setState({ summonthpre: "0" });
      }
    } catch (e) {
      console.log(e);
    }
    try {
      let res = await instance.post("/sumyear", {
        store_id: localStorage.store_id,
      });

      let result = await res.data;

      if (result && result.success) {
        if (result.sumyear === null) {
          this.setState({ sumyear: "0" });
        } else {
          this.setState({ sumyear: result.sumyear });
        }
      } else if (result && result.success === false) {
        this.setState({ sumyear: "0" });
      }
    } catch (e) {
      console.log(e);
    }
    try {
      let res = await instance.post("/sumyearpreorder", {
        store_id: localStorage.store_id,
      });

      let result = await res.data;

      if (result && result.success) {
        if (result.sumyearpre === null) {
          this.setState({ sumyearpre: "0" });
        } else {
          this.setState({ sumyearpre: result.sumyearpre });
        }
      } else if (result && result.success === false) {
        this.setState({ sumyearpre: "0" });
      }
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
  render() {
    const {
      sumday,
      sumdaypre,
      summonth,
      summonthpre,
      sumyear,
      sumyearpre,
    } = this.state;
    let store_id = localStorage.getItem("store_id");
    if (store_id === null) {
      return <Redirect to="/auth/signin" />;
    } else {
      return (
        <Aux>
          <Row>
            <Col md={6} xl={4}>
              <Cards>
                <Cards.Body>
                  <h6 className="mb-4">Daily Sales</h6>
                  <div className="row d-flex align-items-center">
                    <div className="col-9">
                      <h3 className="f-w-300 d-flex align-items-center m-b-0">
                        <i className="feather icon-arrow-up text-c-green f-30 m-r-5" />{" "}
                        NGN{" "}
                        {(parseInt(sumday) + parseInt(sumdaypre))
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </h3>
                    </div>

                    <div className="col-3 text-right">
                      <p className="m-b-0">50%</p>
                    </div>
                  </div>
                  <div className="progress m-t-30" style={{ height: "7px" }}>
                    <div
                      className="progress-bar progress-c-theme"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </Cards.Body>
              </Cards>
            </Col>
            <Col md={6} xl={4}>
              <Cards>
                <Cards.Body>
                  <h6 className="mb-4">Monthly Sales</h6>
                  <div className="row d-flex align-items-center">
                    <div className="col-9">
                      <h3 className="f-w-300 d-flex align-items-center m-b-0">
                        <i className="feather icon-arrow-down text-c-red f-30 m-r-5" />{" "}
                        NGN{" "}
                        {(parseInt(summonth) + parseInt(summonthpre))
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </h3>
                    </div>

                    <div className="col-3 text-right">
                      <p className="m-b-0">36%</p>
                    </div>
                  </div>
                  <div className="progress m-t-30" style={{ height: "7px" }}>
                    <div
                      className="progress-bar progress-c-theme2"
                      role="progressbar"
                      style={{ width: "35%" }}
                      aria-valuenow="35"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </Cards.Body>
              </Cards>
            </Col>
            <Col xl={4}>
              <Cards>
                <Cards.Body>
                  <h6 className="mb-4">Yearly Sales</h6>
                  <div className="row d-flex align-items-center">
                    <div className="col-9">
                      <h3 className="f-w-300 d-flex align-items-center m-b-0">
                        <i className="feather icon-arrow-up text-c-green f-30 m-r-5" />{" "}
                        NGN{" "}
                        {(parseInt(sumyear) + parseInt(sumyearpre))
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </h3>
                    </div>

                    <div className="col-3 text-right">
                      <p className="m-b-0">70%</p>
                    </div>
                  </div>
                  <div className="progress m-t-30" style={{ height: "7px" }}>
                    <div
                      className="progress-bar progress-c-theme"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </Cards.Body>
              </Cards>
            </Col>
          </Row>
          <Row>
            <Col>
              <Cards style={{ padding: "20px" }}>
                <a
                  href="https://www.youtube.com/channel/UCUM0FF8vNNsj22sKzA1HFPQ"
                  target="__blank"
                >
                  <h6 className="mb-4">Learn More</h6>
                </a>
                <iframe
                  allowfullscreen=""
                  src="https://youtube.com/embed/RLhcRrh04f8?autoplay=0&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3"
                  title="Get Started with swip"
                  class="iframes"
                  frameborder="0"
                />
              </Cards>
            </Col>
          </Row>
          <Row>
            <Col>
              <Cards style={{ padding: "20px" }}>
                <h6 className="mb-4">
                  Customize your online store to match your brand
                </h6>
                <p className="plot">
                  Your current domain is {localStorage.getItem("username")}
                  .swip.ng. Add or buy a custom domain to help customers
                  remember your online store.
                </p>
                <Link
                  to="/domain"
                  style={{
                    position: "relative",
                    lineHeight: "2em",
                  }}
                >
                  <Button
                    name={"Login"}
                    value={"Add Domain "}
                    placeholder={"Enter your name"}
                    handleChange={this.handleFullName}
                  />
                </Link>
              </Cards>
            </Col>
          </Row>
          <Row>
            <Col>
              <Cards style={{ padding: "20px" }}>
                <h6 className="mb-4">
                  Customize your online store to match your brand
                </h6>
                <p className="plot">
                  Choose a theme and make it stand out with a custom logo,
                  product slideshow, and other features.
                </p>
                <Link
                  to="/storetemplate"
                  style={{
                    position: "relative",
                    lineHeight: "2em",
                  }}
                >
                  <Button
                    name={"Login"}
                    value={"Add Template"}
                    placeholder={"Enter your name"}
                    handleChange={this.handleFullName}
                  />
                </Link>
              </Cards>
            </Col>
          </Row>
        </Aux>
      );
    }
  }
}

document.title = "Dashboard | " + localStorage.getItem("username");

export default Dashboard;

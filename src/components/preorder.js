import React from "react";
import { Grid, Cell } from "react-mdl";

import instance from "../authaxios";
import Pre from "./pre";
import AliceCarousel from "react-alice-carousel";
import "../assets/scss/style.scss";

const subdomain = window.location.href;
const sublength1 = subdomain.split("/");
const sublength = sublength1.length;
class Preorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      p_id: props.p_id,
      preorder_id: null,
      store_id: null,
      expire: null,
      item_id: null,
      item_name: null,
      item_price: null,
      invalid: false,
      avail: true,
      store_name: null,
      store_description: null,
      delivery: null,
      delivery_fee: null,
      logo: "",
      modal: false,
    };
  }

  async componentDidMount() {
    try {
      let res = await instance.post("/preordercheck", {
        username: this.props.match.params.id,
      });

      let result = await res.data;
      if (result && result.success) {
        this.setState({
          preorder_id: result.preorder_id,
          store_id: result.store_id,
          expire: result.expire,
          item_id: result.item_id,
          item_name: result.item_name,
          item_price: result.item_price,
          store_name: result.store_name,
          store_description: result.store_description,
          delivery: result.delivery,
          delivery_fee: result.delivery_fee,
          logo: result.logo,
        });
      } else {
        this.setState({ invalid: true });
      }
    } catch (e) {
      console.log(e);
    }
    try {
      let res = await instance.post("/preorderImage", {
        item_id: this.state.item_id,
      });

      const results = await res.data;
      if (results.length > 0) {
        this.setState({ results });
      } else {
        this.setState({ avail: false });
      }
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const { results, avail, item_price, invalid } = this.state;
    if (invalid === false) {
      if (sublength === 5) {
        return (
          <>
            <div className="preparings">
              <div className="wrapss">
                <Grid>
                  <Cell col={8}>
                    <div className="m-header">
                      <a href="http://swip.ng" className="b-brand">
                        <span className="b-title">Swip</span>
                      </a>
                    </div>
                    <div className="precolor">
                      <div>
                        {" "}
                        {avail && (
                          <AliceCarousel autoPlay autoPlayInterval="3000">
                            {results.map((result, index) => (
                              <>
                                <img
                                  src={"" + result.image_link}
                                  className="productimage"
                                  alt=""
                                  style={{ borderRadius: "10px" }}
                                />
                              </>
                            ))}
                          </AliceCarousel>
                        )}
                        {!avail && (
                          <div
                            style={{
                              position: "relative",
                              color: "white",
                              fontSize: "20px",
                            }}
                          >
                            No image uploaded
                          </div>
                        )}
                      </div>
                    </div>
                  </Cell>
                  <Cell col={4}>
                    <div className="precolor1">
                      <Pre
                        item_name={this.state.item_name}
                        item_price={item_price}
                        store_id={this.state.store_id}
                        preorder_id={this.state.preorder_id}
                        expire={this.state.expire}
                        store_name={this.state.store_name}
                        store_description={this.state.store_description}
                        delivery={this.state.delivery}
                        delivery_fee={this.state.delivery_fee}
                        logo={this.state.logo}
                      />
                    </div>
                  </Cell>
                </Grid>
              </div>
            </div>
          </>
        );
      } else if (sublength === 6 && sublength1[5] === "success") {
        return (
          <>
            <div className="preparings">
              <div className="wrapss">
                <Grid>
                  <Cell col={8}>
                    <div className="precolor">
                      <div className="m-header">
                        <a href="http://swip.ng" className="b-brand">
                          <span className="b-title">Swip</span>
                        </a>
                      </div>
                      <div>
                        {" "}
                        <center>
                          {avail && (
                            <AliceCarousel autoPlay autoPlayInterval="3000">
                              {results.map((result, index) => (
                                <>
                                  <div className="switchimages">
                                    <img
                                      src={"" + result.image_link}
                                      className="productimage"
                                      alt=""
                                      style={{ borderRadius: "10px" }}
                                    />
                                  </div>
                                </>
                              ))}
                            </AliceCarousel>
                          )}
                          {!avail && (
                            <div
                              style={{
                                position: "relative",
                                color: "white",
                                fontSize: "20px",
                              }}
                            >
                              No image uploaded
                            </div>
                          )}
                        </center>
                      </div>
                    </div>
                  </Cell>
                  <Cell col={4}>
                    <div className="precolor1">
                      <div className="Predesc">
                        <div className="maga">
                          <h3>Payment Confirmed Successfully</h3>
                          <p>please contact the store owner for more</p>
                        </div>
                      </div>
                    </div>
                  </Cell>
                </Grid>
              </div>
            </div>
          </>
        );
      } else {
        return (
          <>
            <div
              className="jj"
              style={{ position: "absolute", marginTop: "10% !important" }}
            >
              <center>
                <p style={{ color: "#000000", fontSize: "30px" }}>
                  404 Invalid Link address
                </p>
                <a href="http://swip.ng">Home</a>
              </center>
            </div>
          </>
        );
      }
    } else {
      return (
        <>
          <div
            className="jj"
            style={{ position: "absolute", marginTop: "10% !important" }}
          >
            <center>
              <p style={{ color: "#000000", fontSize: "30px" }}>
                404 Invalid Link address
              </p>
              <a href="http://swip.ng">Home</a>
            </center>
          </div>
        </>
      );
    }
  }
}
document.title = "Swip | Preorder Store with us and increase profits";
export default Preorder;

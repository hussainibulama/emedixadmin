import React from "react";
import { Form } from "react-bootstrap";
import Button from "../dashboard/otherbutton";
import instance from "../authaxios";
import Countdown from "./countdown";
import "../assets/scss/style.scss";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

class Pre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      unit: 1,
      amount: null,
      total: null,
      alltotal: null,
      alltotaldb: null,
      results: [],
      name: null,
      email: null,
      number: null,
      address: null,
      delivery: null,
      suc: "",
      vat: null,
    };
  }

  async goback() {
    let step = this.state.step;
    this.setState({ step: step - 1 });
  }
  async forward() {
    if (this.state.total === null) {
      this.setState({
        total: this.props.item_price,
      });

      this.setState({
        total: this.state.total + this.props.item_price,
      });
    }

    let step = this.state.step;
    this.setState({ step: step + 1 });
  }
  async forward1() {
    if (
      this.state.name != null &&
      this.state.address != null &&
      this.state.number != null &&
      this.state.delivery != null &&
      this.state.email != null
    ) {
      if (this.state.delivery === "delivery") {
        this.setState({
          alltotal:
            this.state.total +
            this.props.delivery_fee +
            this.state.total * 0.03,
        });
        this.setState({
          alltotaldb: this.state.total + this.props.delivery_fee,
        });
        let step = this.state.step;
        this.setState({ step: step + 1 });
      } else if (this.state.delivery === "pickup") {
        this.setState({
          alltotal: this.state.total + this.state.total * 0.03,
        });
        this.setState({
          alltotaldb: this.state.total,
        });
        let step = this.state.step;
        this.setState({ step: step + 1 });
      }
    }
  }
  async plus() {
    if (this.state.total === null) {
      let unit = this.state.unit;
      this.setState({
        total: this.props.item_price,
      });
      this.setState({
        total: this.state.total + this.props.item_price + this.props.item_price,
        unit: unit + 1,
      });
    } else {
      let unit = this.state.unit;
      let total = this.state.total;

      this.setState({ total: total + this.props.item_price, unit: unit + 1 });
    }
  }
  async minus() {
    let unit = this.state.unit;
    let total = this.state.total;
    let amount = this.props.item_price;

    this.setState({ total: total - amount, unit: unit - 1 });
  }
  async componentDidMount() {
    try {
      if (this.props.match.params.suc === "success") {
        this.setState({ suc: this.props.match.params.suc });
      }
      let res = await instance.post("/viewimages", {
        p_id: "7",
      });

      const results = await res.data;
      this.setState({ results });
    } catch (e) {
      console.log(e);
    }
  }
  async payys() {
    try {
      let res = await instance.post("/preordercustomer", {
        store_id: this.props.store_id,
        preorder_id: this.props.preorder_id,
        customer_info:
          "Name:" +
          this.state.name +
          " " +
          "Phone no:" +
          this.state.number +
          " " +
          "Email:" +
          this.state.email +
          " " +
          "Address:" +
          this.state.address +
          " " +
          "Delivery Type:" +
          this.state.delivery,
        order_details: this.props.item_name + "x" + this.state.unit,
        amount: this.state.alltotaldb,
      });
      let result = await res.data;
      if (result && result.success) {
        let step = this.state.step;
        this.setState({ step: step + 1 });
        return;
      }
      if (result && !result.success) {
        return alert(result.msg);
      }
    } catch (e) {
      console.log(e);
    }
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    const { step, suc } = this.state;
    const config = {
      public_key: "FLWPUBK-7ca020fc14447f7b59861061438060ae-X",
      tx_ref: "" + Date.now(),
      amount: parseInt(this.state.alltotal),
      currency: "NGN",
      payment_options: "card,mobilemoney,ussd",
      customer: {
        email: String(this.state.email),
        phonenumber: String(this.state.number),
        name: String(this.state.name),
      },
      customizations: {
        title: String(this.props.store_name),
        description: "Payment for items in cart",
        logo: String(this.props.logo),
      },
    };
    const fwConfig = {
      ...config,
      text: "Pay NGN " + this.state.alltotal,
      callback: (response) => {
        console.log(response);
        if (response.status === "successful") {
          closePaymentModal();
          this.payys();
        }
        // this will close the modal programmatically
      },
      onClose: () => {},
    };
    if (suc === "success") {
      this.setState({ step: 4 });
    }

    if (step === 1) {
      return (
        <>
          <div>
            <div className="Predesc">
              <h1>{this.props.store_name}</h1>
              <h3>
                Preorder expires in: {this.state.suc}
                <Countdown
                  timeTillDate={this.props.expire + "12:00 am"}
                  timeFormat="MM DD YYYY, h:mm a"
                />
              </h3>

              <p>{this.props.store_description}</p>
              <p>{this.props.item_name}</p>
              <p>How many?</p>
              <div className="monetary">
                <button
                  disabled={this.state.unit === 1 && true}
                  onClick={() => this.minus()}
                  className="add"
                >
                  -
                </button>

                {this.state.unit}

                <button onClick={() => this.plus()} className="add">
                  +
                </button>
              </div>
              {this.state.unit > 1 && <p>that is NGN {this.state.total}</p>}

              <p>Price</p>
              <span className="price">NGN {this.props.item_price}</span>

              <Button
                name={"Login"}
                value={"Buy Now"}
                placeholder={"Enter your name"}
                handleChange={this.handleFullName}
                onClick={() => this.forward()}
              />
            </div>
          </div>
        </>
      );
    } else if (step === 2) {
      return (
        <div>
          <div className="Predesc">
            <h3>
              <FontAwesomeIcon
                style={{
                  fontSize: "20px",
                  color: "#000000",
                  cursor: "pointer",
                }}
                onClick={() => this.goback()}
                icon={faArrowLeft}
              />{" "}
              Buyer Information
            </h3>
            <hr />
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  type="text"
                  required
                  value={this.state.name ? this.state.name : ""}
                  name="name"
                  placeholder="Hussaini Bulama"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  type="email"
                  required
                  value={this.state.email ? this.state.email : ""}
                  name="email"
                  placeholder="Email Address"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  type="number"
                  name="number"
                  value={this.state.number ? this.state.number : ""}
                  required
                  placeholder="08136668344"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Delivery Address</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  name="address"
                  as="textarea"
                  value={this.state.address ? this.state.address : ""}
                  required
                  rows="4"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Delivery Type</Form.Label>
                <Form.Control
                  name="delivery"
                  as="select"
                  onChange={this.handleChange}
                  required
                >
                  <option>
                    {this.state.delivery ? this.state.delivery : ""}
                  </option>
                  <option>pickup</option>
                  {this.props.delivery === "yes" && <option>delivery</option>}
                </Form.Control>
              </Form.Group>

              <Button
                name={"Login"}
                value={"Review and Pay"}
                placeholder={"Enter your name"}
                onClick={() => this.forward1()}
                handleChange={this.handleFullName}
              />
            </Form>
          </div>
        </div>
      );
    } else if (step === 3) {
      return (
        <div>
          <div className="Predesc">
            <h3>
              <FontAwesomeIcon
                onClick={() => this.goback()}
                style={{
                  fontSize: "20px",
                  color: "#000000",
                  cursor: "pointer",
                }}
                icon={faArrowLeft}
              />{" "}
              Review Information
            </h3>
            <hr />
            <p>Name: {this.state.name}</p>
            <p>Email: {this.state.email}</p>
            <p>Mobile No: {this.state.number}</p>
            <p>Address: {this.state.address}</p>
            <hr />
            <p>
              {this.props.item_name} x{this.state.unit} NGN {this.state.total}
            </p>
            {this.state.delivery === "delivery" && (
              <p>Delivery Fee NGN {this.props.delivery_fee}</p>
            )}
            {this.state.delivery === "pickup" && <p>Pickup Fee NGN 00</p>}

            <p>Vat(3%) NGN {parseFloat(this.state.total * 0.03).toFixed(2)}</p>
            <span>Total: NGN {this.state.alltotal}</span>
            <br></br>
            <hr />
            <div className="otherfielder">
              <FlutterWaveButton {...fwConfig} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="Predesc">
            <div className="maga">
              <h3>Payment Confirmed Successfully</h3>
              <p>please contact the store owner for more</p>
            </div>
          </div>
        </div>
      );
    }
  }
}
document.title = "Preorder  ";
export default Pre;

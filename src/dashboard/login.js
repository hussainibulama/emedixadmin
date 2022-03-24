import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Input from "./FormInputs";
import Button from "./Formbuttons";
import Error from "./errmessage";
import axios from "axios";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwords: "",
    };
  }
  setInputValue(property, e) {
    e = e.trim();
    if (e.length > 200) {
      return;
    }
    this.setState({
      [property]: e,
    });
  }
  handleLogin(e) {
    e.preventDefault();
  }
  async doLogin() {
    if (!this.state.username) {
      return;
    }
    if (!this.state.password) {
      return;
    }
    this.setState({
      buttonDisabled: true,
      loading: true,
    });

    try {
      let res = await axios({
        method: "post",
        mode: "cors",
        url: "http://localhost:3301/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
      });

      let result = await res.data;
      console.log(result);
      if (result && result.success) {
        alert("yes");
      } else if (result && result.success === false) {
        alert(result.msg);
      }
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <>
        <div className="loginbackground">
          <div className="wrapss">
            <Grid>
              <Cell col={6}>
                <div className="login-v1">
                  <div className="loginlogo">
                    <h2>e-medix</h2>
                  </div>
                  <Error />
                  <div className="maincontent">
                    <h3>Log in</h3>
                    <p>Continue to your store</p>
                    <div className="forms">
                      <form onSubmit={this.handleLogin}>
                        <input
                          value={this.state.username ? this.state.username : ""}
                          onChange={(e) =>
                            this.setInputValue("username", e.target.value)
                          }
                          type="text"
                          id="phone"
                          pattern="[0-9]{11}"
                          placeholder="0813 666 8344"
                          className="form-input"
                          required
                        />
                        <input
                          value={this.state.password ? this.state.password : ""}
                          onChange={(e) =>
                            this.setInputValue("password", e.target.value)
                          }
                          type="password"
                          className="form-input"
                          placeholder="Password"
                          required
                        />
                        <button
                          onClick={() => this.doLogin()}
                          variant="primary"
                          type="submit"
                        >
                          Login
                        </button>

                        <Input
                          type={"text"}
                          value={this.state.username ? this.state.username : ""}
                          onChange={(e) =>
                            this.setInputValue("username", e.target.value)
                          }
                          title={" Store address"}
                          name={"name"}
                          placeholder={"Email or storename"}
                        />
                        {/* <div className="loginright">
                          <a className="newlink" href="">
                            Forgot password?
                          </a>
                        </div> */}
                        <Input
                          value={this.state.password ? this.state.password : ""}
                          onChange={(e) =>
                            this.setInputValue("password", e.target.value)
                          }
                          type={"password"}
                          title={" Password"}
                          name={"name"}
                          placeholder={"Enter your password"}
                        />
                        <Button
                          onClick={() => this.doLogin()}
                          name={"Login"}
                          value={"Log in"}
                          name={"name"}
                          placeholder={"Enter your name"}
                        />
                      </form>
                      {/* <div className="newto">
                        <p>
                          New to swip?{" "}
                          <a className="newlink" href="">
                            Get started
                          </a>
                        </p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </Cell>
              <Cell col={6}></Cell>
            </Grid>
          </div>
        </div>
      </>
    );
  }
}
export default Login;

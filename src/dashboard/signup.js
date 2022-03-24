import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Input from "./FormInputs";
import Button from "./Formbuttons";
import Error from "./errmessage";

class Login extends Component {
  render() {
    return (
      <>
        <div className="loginbackground">
          <div className="wrapss">
            <Grid>
              <Cell col={6}>
                <div className="login-v1">
                  <div className="loginlogo">
                    <h2>SWIP</h2>
                  </div>
                  <Error />
                  <div className="maincontent">
                    <h3>Join us and start your free trial today</h3>
                    <p>
                      Try us for free, and explore all the tools and services
                      you need to start, run, and grow your business.
                    </p>
                    <div className="forms">
                      <form>
                        <Input
                          type={"email"}
                          title={"Email address"}
                          name={"email"}
                          placeholder={"Enter email address"}
                          handleChange={this.handleFullName}
                        />

                        <Input
                          type={"password"}
                          title={"Password"}
                          name={"password"}
                          placeholder={"Enter password"}
                          handleChange={this.handleFullName}
                        />
                        <Input
                          type={"text"}
                          title={"Store name"}
                          name={"sname"}
                          placeholder={"mystore"}
                          handleChange={this.handleFullName}
                        />
                        <Button
                          name={"Login"}
                          value={"Create your store"}
                          name={"name"}
                          placeholder={"Enter your name"}
                          handleChange={this.handleFullName}
                        />
                      </form>
                      <div className="newto">
                        <p>
                          Already have an account?{" "}
                          <a className="newlink" href="">
                            Log in
                          </a>
                        </p>
                      </div>
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

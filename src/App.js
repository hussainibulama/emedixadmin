import React, { Component } from "react";
import "./App.css";
import "react-alice-carousel/lib/alice-carousel.css";
import Main from "./components/main";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;

import React from "react";
import instance from "./authaxios";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }
  async componentDidMount() {
    try {
      let store_id = localStorage.getItem("store_id");
      let res = await instance.post("/orderhistories", {
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
    return this.state.results.length;
  }
}
export default Counter;

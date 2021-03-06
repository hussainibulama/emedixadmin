import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import config from "./config";
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducer);

const app = (
  <Provider store={store}>
    <BrowserRouter basename={config.basename}>
      {/* basename="/datta-able" */}
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

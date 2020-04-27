import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import ErrorBoundry from "./utils/ErrorBoundry/ErrorBoundry";
import store from "./bll/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <ErrorBoundry>
          <App />
        </ErrorBoundry>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

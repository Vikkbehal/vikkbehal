import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import 'locomotive-scroll/dist/locomotive-scroll.min.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import mixpanel from "mixpanel-browser";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

mixpanel.init("96ce6aa2f47812f024031d74068aa829", {
  debug: true,
  ignore_dnt: true,
});

// Track an event. It can be anything, but in this example, we're tracking a Signed Up event.
// Include a property about the signup, like the Signup Type
mixpanel.track("Site Visit", {
  Type: "Home",
});

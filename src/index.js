import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
// import registerServiceWorker from "./registerServiceWorker";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  ReactDOM.render(<App />, root);
  // registerServiceWorker();
});

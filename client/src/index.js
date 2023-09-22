import React from "react";
import ReactDOM from "react-dom/client";
// Pages
import App from "./App";
// Redux
import { Provider } from "react-redux"; // Import the Provider component
import store from "./state/store.js"; // Import store

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

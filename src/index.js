import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NiceModal from "@ebay/nice-modal-react";
import { HeadProvider } from "react-head";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeadProvider>
        <NiceModal.Provider>
          <App />
        </NiceModal.Provider>
      </HeadProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

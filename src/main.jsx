import React from "react";

import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { MyCollectionProvider } from "./context/Saved";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <MyCollectionProvider>

      <BrowserRouter>

        <App />

      </BrowserRouter>

    </MyCollectionProvider>

  </React.StrictMode>

);


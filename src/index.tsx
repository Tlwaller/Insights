import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import { getClient } from "./graphql/client";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./App.router";
import { publicPages } from "./constants/publicPages";

const path = window.location.pathname;
const publicPage = publicPages.indexOf(path) >= 0;
const client = publicPage ? getClient(false)  : getClient(true);

console.log(path)
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client[0]}>
       <BrowserRouter>
      <AppRouter />
      </BrowserRouter>
     </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

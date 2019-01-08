import React from "react";
import ReactDOM from "react-dom";
//provider will allow us to inject global sotre
import { Provider } from "react-redux";
//createStore allow us to createStore
import { createStore } from "redux";
import reducer from "./store/reducer";
import App from './App';

import "./styles.css";

const store = createStore(reducer);


const rootElement = document.getElementById("root");



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

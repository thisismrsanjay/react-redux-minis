import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./styles.css";

//import reducer from './store/reducer';
import reducerA from "./store/reducerA";
import reducerB from "./store/reducerB";

import {createStore, combineReducers} from "redux";
//provider takes the store and makes it globally
import {Provider} from "react-redux";

const rootReducer = combineReducers({
  rA: reducerA,
  rB: reducerB
});

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

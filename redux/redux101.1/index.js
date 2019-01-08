import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./styles.css";

import reducer from './store/reducer';
import {createStore} from 'redux';
//provider takes the store and makes it globally
import {Provider} from 'react-redux';

const store = createStore(reducer);



const rootElement = document.getElementById("root");

ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);

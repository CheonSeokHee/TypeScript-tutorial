import * as React from "react";
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';
import *as ReactDOM from 'react-dom';
import {createRoot} from "react-dom/client";


const container = document.getElementById('root')
const store = createStore(rootReducer);
const root = createRoot(container!)

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

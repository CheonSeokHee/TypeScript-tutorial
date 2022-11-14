import * as React from "react";
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';
import *as ReactDOM from 'react-dom';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

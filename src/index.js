import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'react-dates/lib/css/_datepicker.css';
import App from './App';
import createStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

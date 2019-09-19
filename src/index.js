import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'react-dates/lib/css/_datepicker.css';
import App from './App';
import createStore from './store/configureStore';
import { Provider } from 'react-redux';
import { startSetRetros } from './actions/retros';
import { firebase } from './config/firebase';

const store = createStore();

firebase.auth().onAuthStateChanged(() => {
    const uid = store.getState().firebase.auth.uid;
    if (!uid) {
        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,
            document.getElementById('root')
        );
    } else {
        store.dispatch(startSetRetros()).then(() => {
            ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('root')
            );
        });
    }
});

// ReactDOM.render(<p>Loading retros...</p>, document.getElementById('root'));

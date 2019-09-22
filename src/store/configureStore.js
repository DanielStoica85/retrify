import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { reactReduxFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';
import { firebase } from '../config/firebase';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const config = {
    userProfile: 'users',
    enableLogging: false,
    attachAuthIsReady: true
};

export default () => {
    const store = createStore(
        rootReducer,
        {},
        composeEnhancers(
            reactReduxFirebase(firebase, config), // pass in firebase instance instead of config
            reduxFirestore(firebase),
            applyMiddleware(thunk)
        )
    );

    return store;
};

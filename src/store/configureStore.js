import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { firebase } from '../config/firebase';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const config = {
    userProfile: 'users',
    enableLogging: false
};

export default () => {
    const store = createStore(
        rootReducer,
        {},
        composeEnhancers(
            reactReduxFirebase(firebase, config), // pass in firebase instance instead of config
            reduxFirestore(firebase),
            applyMiddleware(
                thunk.withExtraArgument({ getFirebase, getFirestore })
            )
        )
    );

    return store;
};

import authReducer from './auth';
import filtersReducer from './filters';
import retrosReducer from './retros';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    retros: retrosReducer,
    filters: filtersReducer,
    auth: authReducer,
    firebase: firebaseReducer
});

export default rootReducer;

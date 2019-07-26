import authReducer from './auth';
import filtersReducer from './filters';
import retrosReducer from './retros';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    retros: retrosReducer,
    filters: filtersReducer,
    auth: authReducer
});

export default rootReducer;

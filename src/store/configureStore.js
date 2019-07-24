import { createStore, combineReducers } from 'redux';
import retrosReducer from '../reducers/retros';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            retros: retrosReducer,
            filters: filtersReducer
        })
    );

    return store;
};

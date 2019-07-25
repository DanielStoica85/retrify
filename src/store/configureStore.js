import { createStore, combineReducers } from 'redux';
import retrosReducer from '../reducers/retros';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            retros: retrosReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};

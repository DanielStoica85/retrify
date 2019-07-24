import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ACTION GENERATORS

// Add retro
const addRetro = ({ title = '', author = '', createdAt = 0 } = {}) => ({
    type: 'ADD_RETRO',
    retro: {
        id: uuid(),
        title,
        author,
        createdAt
    }
});

// Remove retro
const removeRetro = id => ({
    type: 'REMOVE_RETRO',
    id
});

// Edit retro
const editRetro = (id, updates) => ({
    type: 'EDIT_RETRO',
    id,
    updates
});

// Set text filter
const setTextFilter = text => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = date => ({
    type: 'SET_START_DATE',
    date
});

const setEndDate = date => ({
    type: 'SET_END_DATE',
    date
});

// ---------------------------------------------------------

// REDUCERS (handlers for the actions)

const retrosReducerDefaultState = [];
const retrosReducer = (state = retrosReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_RETRO':
            return [...state, action.retro];
        case 'EDIT_RETRO':
            return state.map(retro => {
                if (retro.id === action.id) {
                    return {
                        ...retro,
                        ...action.updates
                    };
                } else {
                    return retro;
                }
            });
        case 'REMOVE_RETRO':
            return state.filter(retro => retro.id !== action.id);

        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            };
        default:
            return state;
    }
};

// ---------------------------------------------------------

// STORE CREATION

const store = createStore(
    combineReducers({
        retros: retrosReducer,
        filters: filtersReducer
    })
);

// only used for dispplaying the store for testing purpose for now
store.subscribe(() => {
    const state = store.getState();
    console.log(state);
});

// ---------------------------------------------------------

// DISPATCHING ACTIONS

// adding retros
const firstRetro = store.dispatch(
    addRetro({ title: 'First', author: 'Daniel', createdAt: 100 })
);
const secondRetro = store.dispatch(
    addRetro({ title: 'Second', author: 'Costel', createdAt: 300 })
);
// editing retro
store.dispatch(editRetro(firstRetro.retro.id, { author: 'Gica' }));
store.dispatch(editRetro(secondRetro.retro.id, { title: 'Second Updated' }));
// removing retro
store.dispatch(removeRetro(firstRetro.retro.id));

// setting text filter
store.dispatch(setTextFilter('first'));

// sorting by amount
store.dispatch(sortByAmount());
// sorting by date
store.dispatch(sortByDate());

// seting start and end dates
store.dispatch(setStartDate(0));
store.dispatch(setStartDate());
store.dispatch(setEndDate(999));

// ---------------------------------------------------------

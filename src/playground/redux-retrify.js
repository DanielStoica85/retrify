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

// ---------------------------------------------------------

// DEMO STATE (won't be used, just as a helper for me to have a good image of how the state would look like)

const demoState = {
    retros: [
        {
            title: 'First ',
            author: 'Daniel',
            createdAt: 'May 10th, 2019',
            id: 1
        },
        {
            title: 'Second',
            author: 'Costel',
            createdAt: 'May 10th, 2019',
            id: 2
        },
        {
            title: 'Third',
            author: 'Gica',
            createdAt: 'May 10th, 2019',
            id: 3
        }
    ],
    filters: {
        text: 'second',
        sortBy: 'date', // date or author
        startDate: undefined,
        endDate: undefined
    }
};

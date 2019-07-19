import { createStore, combineReducers } from 'redux';

// ACTION GENERATORS

// ---------------------------------------------------------

// REDUCERS (handlers for the actions)

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

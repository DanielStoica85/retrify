import { createStore } from 'redux';

// ACTION GENERATORS

// ---------------------------------------------------------

// REDUCERS (handlers for the actions)

// ---------------------------------------------------------

// STORE CREATION

// ---------------------------------------------------------

// DISPATCHING ACTIONS

// ---------------------------------------------------------

// DEMO STATE (won't be used)

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

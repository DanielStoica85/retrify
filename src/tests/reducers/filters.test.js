import filtersReducer from '../../reducers/filters';
import moment from 'moment';

describe('Filters reducer', () => {
    it('should setup default filter values', () => {
        const state = filtersReducer(undefined, { type: '@@INIT' });

        expect(state).toEqual({
            text: '',
            sortBy: 'date',
            startDate: undefined,
            endDate: undefined
        });
    });

    it('should set text filter correctly', () => {
        const text = 'text';
        const state = filtersReducer(undefined, {
            type: 'SET_TEXT_FILTER',
            text
        });
        expect(state).toEqual({
            text,
            sortBy: 'date',
            startDate: undefined,
            endDate: undefined
        });
    });

    it('should set sort by amount correctly', () => {
        const state = filtersReducer(undefined, {
            type: 'SORT_BY_AMOUNT'
        });
        expect(state).toEqual({
            text: '',
            sortBy: 'amount',
            startDate: undefined,
            endDate: undefined
        });
    });

    it('should set sort by date correctly', () => {
        const initialState = {
            text: '',
            sortBy: 'amount',
            startDate: undefined,
            endDate: undefined
        };
        const state = filtersReducer(initialState, {
            type: 'SORT_BY_DATE'
        });
        expect(state).toEqual({
            text: '',
            sortBy: 'date',
            startDate: undefined,
            endDate: undefined
        });
    });

    it('should set start date correctly', () => {
        const date = moment();
        const state = filtersReducer(undefined, {
            type: 'SET_START_DATE',
            date
        });

        expect(state).toEqual({
            text: '',
            sortBy: 'date',
            startDate: date,
            endDate: undefined
        });
    });

    test('should set end date correctly', () => {
        const date = moment();
        const state = filtersReducer(undefined, {
            type: 'SET_END_DATE',
            date
        });

        expect(state).toEqual({
            text: '',
            sortBy: 'date',
            startDate: undefined,
            endDate: date
        });
    });
});

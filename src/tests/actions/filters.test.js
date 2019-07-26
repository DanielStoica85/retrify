import {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate
} from '../../actions/filters';
import moment from 'moment';

describe('Filters action generator', () => {
    it('should generate setTextFilter action object', () => {
        const text = 'the filter';
        const action = setTextFilter(text);

        expect(action).toEqual({
            type: 'SET_TEXT_FILTER',
            text
        });
    });

    it('should generate sortByAmount action object', () => {
        const action = sortByAmount();

        expect(action).toEqual({
            type: 'SORT_BY_AMOUNT'
        });
    });

    it('should generate sortByDate action object', () => {
        const action = sortByDate();

        expect(action).toEqual({
            type: 'SORT_BY_DATE'
        });
    });

    it('should generate setStartDate action object', () => {
        const date = moment(0);
        const action = setStartDate(date);

        expect(action).toEqual({
            type: 'SET_START_DATE',
            date
        });
    });

    it('should generate setEndDate action object', () => {
        const date = moment(0);
        const action = setEndDate(date);

        expect(action).toEqual({
            type: 'SET_END_DATE',
            date
        });
    });
});

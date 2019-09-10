import retrosReducer from '../../reducers/retros';
import defaultRetros from '../fixtures/retros';

describe('Retros reducer', () => {
    it('should setup default retro values', () => {
        const state = retrosReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual([]);
    });

    it('should add retro', () => {
        const action = {
            type: 'ADD_RETRO',
            retro: {
                id: 4,
                title: 'Fourth Retro',
                author: 'Mitica',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti itaque aut eligendi laborum excepturi animi hic similique impedit enim velit.',
                createdAt: 1564396263000
            }
        };
        const state = retrosReducer(defaultRetros, action);
        expect(state).toEqual([...defaultRetros, action.retro]);
    });

    it('should edit retro with valid id', () => {
        const action = {
            type: 'EDIT_RETRO',
            id: '1',
            updates: {
                author: 'The Tester'
            }
        };
        const state = retrosReducer(defaultRetros, action);
        expect(state[0].author).toBe(action.updates.author);
    });

    it('should not edit retro with id not found', () => {
        const action = {
            type: 'EDIT_RETRO',
            id: '123',
            updates: {
                author: 'The Tester'
            }
        };
        const state = retrosReducer(defaultRetros, action);
        expect(state).toEqual(defaultRetros);
    });

    it('should remove retro with valid id', () => {
        const state = retrosReducer(defaultRetros, {
            type: 'REMOVE_RETRO',
            id: '1'
        });
        expect(state).toEqual([defaultRetros[1], defaultRetros[2]]);
    });

    it('should not remove retro with id not found', () => {
        const state = retrosReducer(defaultRetros, {
            type: 'REMOVE_RETRO',
            id: '123'
        });
        expect(state).toEqual(defaultRetros);
    });

    it('should set retros', () => {
        const action = {
            type: 'SET_RETROS',
            retros: [defaultRetros[1]]
        };
        const state = retrosReducer(defaultRetros, action);
        expect(state).toEqual([defaultRetros[1]]);
    });
});

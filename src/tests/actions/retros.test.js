import { addRetro, editRetro, removeRetro } from '../../actions/retros';

describe('Retros action generator', () => {
    it('should generate addRetro action object with provided values', () => {
        const retro = {
            title: 'The retro',
            author: '',
            createdAt: 0
        };
        const action = addRetro(retro);

        expect(action).toEqual({
            type: 'ADD_RETRO',
            retro: {
                ...retro,
                id: expect.any(String)
            }
        });
    });

    it('should generate addRetro action object with default values', () => {
        const action = addRetro();

        expect(action).toEqual({
            type: 'ADD_RETRO',
            retro: {
                id: expect.any(String),
                title: '',
                author: '',
                createdAt: 0
            }
        });
    });

    it('should generate removeRetro action object', () => {
        const id = '123';
        const action = removeRetro(id);
        expect(action).toEqual({
            type: 'REMOVE_RETRO',
            id
        });
    });

    it('should generate editRetro action object', () => {
        const id = '123';
        const updates = {
            title: 'Modified',
            author: 'Daniel',
            createdAt: 2000
        };
        const action = editRetro(id, updates);
        expect(action).toEqual({
            type: 'EDIT_RETRO',
            id,
            updates
        });
    });
});

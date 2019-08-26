import uuid from 'uuid';

// Add retro
export const addRetro = ({
    title = '',
    author = '',
    description = '',
    createdAt = 0
} = {}) => ({
    type: 'ADD_RETRO',
    retro: {
        id: uuid(),
        title,
        author,
        description,
        createdAt
    }
});

// add retro to db and then to store
export const startAddRetro = (retroData = {}) => {
    return dispatch => {
        const {
            title = '',
            description = '',
            createdAt = 0,
            author = ''
        } = retroData;

        const retro = { title, description, createdAt, author };

        return database
            .ref('retros')
            .push(retro)
            .then(ref => {
                dispatch(
                    addRetro({
                        id: ref.key,
                        ...retro
                    })
                );
            });
    };
};

// Remove retro
export const removeRetro = id => ({
    type: 'REMOVE_RETRO',
    id
});

// Edit retro
export const editRetro = (id, updates) => ({
    type: 'EDIT_RETRO',
    id,
    updates
});

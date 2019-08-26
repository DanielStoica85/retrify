import database from '../config/firebase';

// Add retro
export const addRetro = retro => ({
    type: 'ADD_RETRO',
    retro
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

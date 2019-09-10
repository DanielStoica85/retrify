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

// remove retro from db
export const startRemoveRetro = id => {
    return dispatch => {
        return database
            .ref(`retros/${id}`)
            .remove()
            .then(() => {
                dispatch(removeRetro(id));
            });
    };
};

// Edit retro
export const editRetro = (id, updates) => ({
    type: 'EDIT_RETRO',
    id,
    updates
});

// Start edit retro
export const startEditRetro = (id, updates) => {
    return dispatch => {
        return database
            .ref(`retros/${id}`)
            .update(updates)
            .then(() => {
                dispatch(editRetro(id, updates));
            });
    };
};

// Set retros
export const setRetros = retros => ({
    type: 'SET_RETROS',
    retros
});

// Start set retros
export const startSetRetros = () => {
    return dispatch => {
        return database
            .ref('retros')
            .once('value')
            .then(snapshot => {
                let retros = [];
                snapshot.forEach(element => {
                    retros.push({
                        id: element.key,
                        ...element.val()
                    });
                });
                dispatch(setRetros(retros));
            });
    };
};

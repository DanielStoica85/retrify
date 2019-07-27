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

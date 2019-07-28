// Expenses reducer
const retrosReducerDefaultState = [
    {
        id: 1,
        title: 'First Retro',
        author: 'Gica',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti itaque aut eligendi laborum excepturi animi hic similique impedit enim velit.',
        createdAt: 1564169537000
    },
    {
        id: 2,
        title: 'Second Retro',
        author: 'Costel',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti itaque aut eligendi laborum excepturi animi hic similique impedit enim velit.',
        createdAt: 1564255937000
    },
    {
        id: 3,
        title: 'Third Retro',
        author: 'Miron',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti itaque aut eligendi laborum excepturi animi hic similique impedit enim velit.',
        createdAt: 1564342337000
    }
];

export default (state = retrosReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_RETRO':
            return [...state, action.retro];
        case 'EDIT_RETRO':
            return state.map(retro => {
                if (retro.id === action.id) {
                    return {
                        ...retro,
                        ...action.updates
                    };
                } else {
                    return retro;
                }
            });
        case 'REMOVE_RETRO':
            return state.filter(retro => retro.id !== action.id);

        default:
            return state;
    }
};

// Expenses reducer
const retrosReducerDefaultState = [
    {
        id: 1,
        title: 'First Retro',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus in ipsum culpa, sint totam dignissimos reiciendis consequuntur iusto molestiae sit!',
        date: 'May 1st, 2019'
    },
    {
        id: 2,
        title: 'Second Retro',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus in ipsum culpa, sint totam dignissimos reiciendis consequuntur iusto molestiae sit!',
        date: 'May 1st, 2019'
    },
    {
        id: 3,
        title: 'Third Retro',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus in ipsum culpa, sint totam dignissimos reiciendis consequuntur iusto molestiae sit!',
        date: 'May 1st, 2019'
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

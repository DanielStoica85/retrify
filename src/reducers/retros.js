// Expenses reducer
const retrosReducerDefaultState = [];

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
        case 'SET_RETROS':
            return action.retros;
        default:
            return state;
    }
};

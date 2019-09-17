const authReducerDefaultState = {
    authError: null
};

export default (state = authReducerDefaultState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null
            };
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Invalid credentials. Please try again.'
            };
        case 'LOGOUT_SUCCESS':
            return state;
        default:
            return state;
    }
};

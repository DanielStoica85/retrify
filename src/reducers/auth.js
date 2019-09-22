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
        case 'SIGNUP_SUCCESS':
            console.log('Signup success!');
            return {
                ...state,
                authError: null
            };
        case 'SIGNUP_ERROR':
            console.log('Signup error!', action.err.message);
            return {
                ...state,
                authError: action.err.message
            };
        default:
            return state;
    }
};

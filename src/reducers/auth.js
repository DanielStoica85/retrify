const authReducerDefaultState = {
    authError: null
};

export default (state = authReducerDefaultState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('Login worked!');
            return {
                ...state,
                authError: null
            };
        case 'LOGIN_ERROR':
            console.log('Login error!');
            return {
                ...state,
                authError: 'Login failed'
            };
        case 'LOGOUT_SUCCESS':
            return state;
        default:
            return state;
    }
};

import firebase from 'firebase/app';
import 'firebase/auth';

export const login = credentials => {
    return dispatch => {
        firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({ type: 'LOGIN_SUCCESS' });
            })
            .catch(err => {
                dispatch({ type: 'LOGIN_ERROR', err });
            });
    };
};

export const logout = () => {
    return dispatch => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                firebase.logout().then(() => {
                    dispatch({ type: 'LOGOUT_SUCCESS' });
                });
            });
    };
};

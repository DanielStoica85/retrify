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

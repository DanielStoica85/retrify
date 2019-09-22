import database, { firebase } from '../config/firebase';

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

export const signUp = newUser => {
    return (dispatch, getState) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then(resp => {
                console.log(resp.user.uid);
                const uid = resp.user.uid;
                return database.ref(`users/${uid}`).set({
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    initials: newUser.firstName[0] + newUser.lastName[0]
                });
            })
            .then(() => {
                dispatch({
                    type: 'SIGNUP_SUCCESS'
                });
            })
            .catch(err => {
                dispatch({ type: 'SIGNUP_ERROR', err });
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

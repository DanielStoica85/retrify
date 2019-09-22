import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
    startAddRetro,
    addRetro,
    editRetro,
    removeRetro,
    setRetros,
    startSetRetros,
    startRemoveRetro,
    startEditRetro
} from '../../actions/retros';
import database from '../../config/firebase';
import retros from '../fixtures/retros';

const middlewares = [thunk];
const uid = 'testuid';
const defaultAuthState = { firebase: { auth: { uid } } };
const createMockStore = configureMockStore(middlewares);

describe('Retros action generator', () => {
    it('should generate addRetro action object with provided values', () => {
        const action = addRetro(retros[0]);

        expect(action).toEqual({
            type: 'ADD_RETRO',
            retro: retros[0]
        });
    });

    it('should generate removeRetro action object', () => {
        const id = '123';
        const action = removeRetro(id);
        expect(action).toEqual({
            type: 'REMOVE_RETRO',
            id
        });
    });

    it('should generate editRetro action object', () => {
        const id = '123';
        const updates = {
            title: 'Modified',
            author: 'Daniel',
            createdAt: 2000
        };
        const action = editRetro(id, updates);
        expect(action).toEqual({
            type: 'EDIT_RETRO',
            id,
            updates
        });
    });

    it('should generate setExpenses action object', () => {
        const action = setRetros(retros);
        expect(action).toEqual({
            type: 'SET_RETROS',
            retros
        });
    });
});

describe('Retros async actions', () => {
    beforeEach(done => {
        // seed test db before each test
        let retrosFixture = [];
        retros.forEach(
            ({ id, title, description, type, author, createdAt }) => {
                retrosFixture[id] = {
                    title,
                    description,
                    type,
                    author,
                    createdAt
                };
            }
        );
        database
            .ref(`users/${uid}/retros`)
            .set(retrosFixture)
            .then(() => done());
    });
    it('should add retro to database and then to store', done => {
        const store = createMockStore(defaultAuthState);
        const newRetro = {
            title: 'Test retro',
            author: 'Test author',
            type: 'What went well',
            createdAt: 8736823746,
            description: 'Test description'
        };

        store.dispatch(startAddRetro(newRetro)).then(() => {
            const actions = store.getActions();
            expect(actions).toEqual([
                {
                    type: 'ADD_RETRO',
                    retro: {
                        id: expect.any(String),
                        ...newRetro
                    }
                }
            ]);

            database
                .ref(`users/${uid}/retros/${actions[0].retro.id}`)
                .once('value')
                .then(snapshot => {
                    expect(snapshot.val()).toEqual(newRetro);
                    done();
                });
        });
    });

    it('should add default values retro to database and then to store', done => {
        const store = createMockStore(defaultAuthState);
        const newRetro = {
            title: '',
            author: '',
            type: '',
            createdAt: 0,
            description: ''
        };

        store.dispatch(startAddRetro(newRetro)).then(() => {
            const actions = store.getActions();
            expect(actions).toEqual([
                {
                    type: 'ADD_RETRO',
                    retro: {
                        id: expect.any(String),
                        ...newRetro
                    }
                }
            ]);

            database
                .ref(`users/${uid}/retros/${actions[0].retro.id}`)
                .once('value')
                .then(snapshot => {
                    expect(snapshot.val()).toEqual(newRetro);
                    done();
                });
        });
    });

    it('should fetch retros from db', done => {
        const store = createMockStore(defaultAuthState);

        store.dispatch(startSetRetros()).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'SET_RETROS',
                retros
            });
            done();
        });
    });

    it('should remove retro from db and then from store', done => {
        const store = createMockStore(defaultAuthState);
        const id = retros[2].id;

        store.dispatch(startRemoveRetro(id)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'REMOVE_RETRO',
                id
            });

            database
                .ref(`users/${uid}/retros/id`)
                .once('value')
                .then(snapshot => {
                    expect(snapshot.val()).toBeFalsy();
                    done();
                });
        });
    });

    it('should update retro in db and then in store', done => {
        const store = createMockStore(defaultAuthState);
        const id = retros[2].id;
        const updates = {
            author: 'The Scrum Master'
        };

        store.dispatch(startEditRetro(id, updates)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'EDIT_RETRO',
                id,
                updates
            });
        });

        return database
            .ref(`users/${uid}/retros/${id}`)
            .once('value')
            .then(snapshot => {
                expect(snapshot.val().author).toBe(updates.author);
                done();
            });
    });
});

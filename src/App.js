import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navigation from './components/layout/Navigation';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import RetroDetails from './components/retros/RetroDetails';
import AddRetro from './components/retros/AddRetro';

import configureStore from './store/configureStore';

import { addRetro } from './actions/retros';

const store = configureStore();
console.log(store.getState());

store.dispatch(addRetro({ title: 'First', author: 'Daniel' }));
store.dispatch(addRetro({ title: 'Second', author: 'Gica' }));

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/retro/:id" component={RetroDetails} />
                        <Route path="/retro" component={AddRetro} />
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
